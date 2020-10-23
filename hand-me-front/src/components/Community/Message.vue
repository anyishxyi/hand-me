<template>
  <el-drawer :visible.sync="showMessage" :with-header="false" :before-close="handleCloseMessage" direction="rtl">
    <div class="drawer-wrapper">
      <div class="footer">
        <div v-if="isPushMessageClicked" class="text-input-area">
          <div class="message-box">
            <div class="footer-component-msg">
              <el-input
                v-model="review"
                placeholder="Écrire un message pour clôturer la réserve"
                type="textarea"
                clearable
                rows="3"
              />
            </div>
          </div>
        </div>
        <div class="reserve_block middle-block">
          <div class="title">Messagerie</div>
          <div class="content reserve-discuss reserve-message messenging">
            <div class="day-separator">
              <span class="date">{{ format_date(event.eventDate) }}</span>
            </div>

            <div class="block-left">
              <div class="user-avatar">
                <span class="initials">{{ getInitials(userDoingReserve) }}</span>
              </div>
              <!-- <div class="group-messages">
                <div class="msg-left">
                  <div class="msg-username">{{ reserve.userTo && reserve.userTo.employerDetails && reserve.userTo.employerDetails[0] ? reserve.userTo.employerDetails[0].name : reserve.orgaTo ? reserve.orgaTo.name : 'Inconnu' }}</div>
                  <div class="msg-content">
                    {{ reserve.reasonsTo }}
                  </div>
                  <span class="msg-time">{{ format_hour(reserve.createdAt) }}</span>
                </div>
              </div> -->
            </div>

            <!-- <div v-if="reserve.reasonsOrgaFrom" class="day-separator">
              <span class="date">{{ format_date(reserve.updatedAt) }}</span>
            </div> -->

            <!-- <div v-if="reserve.reasonsOrgaFrom" class="block-right">
              <div class="group-messages">
                <div class="msg-right">
                  <div class="msg-content">
                    {{ reserve.reasonsOrgaFrom }}
                  </div>
                  <span class="msg-time">{{ format_hour(reserve.updatedAt) }}</span>
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <div v-if="!isPushMessageClicked" class="bottom-buttons">
          <span class="close-reserve-btn" plain @click="isPushMessageClicked = true">Envoyez un Message</span>
        </div>
        <div v-if="isPushMessageClicked" class="bottom-buttons no-top-border">
          <div class="close-reserve-actions">
            <div class="cancel" @click="cancel()">Annuler</div>
            <div class="validate" @click="markReviewed()">Confirmer</div>
          </div>
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<script>

export default {
  name: 'Message',
  props: {
    showdrawer: {
      type: Boolean,
      default: () => false
    },
    ishistorical: {
      type: Boolean,
      default: () => false
    },
    event: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      showMessage: false,
      comment: '',
      review: '',
      loading: false,
      isPushMessageClicked: false,
      isFrom: false,
      userDoingReserve: '',
      imagesUrl: process.env.VUE_APP_CONFLICTS_URL
    }
  },
  watch: {
    showdrawer: function(value) {
      this.showMessage = value
      // console.log('events', this.event)
      this.$emit('eventMessageSent', value)
      // this.userDoingReserve = this.reserve.userTo && this.reserve.userTo.employerDetails && this.reserve.userTo.employerDetails[0] ? this.reserve.userTo.employerDetails[0].name : this.reserve.orgaTo ? this.reserve.orgaTo.name : 'Inconnu'
    }
  },
  methods: {
    autoCompleteMess() {},
    handleCloseMessage() {
      this.closeDiscussion()
    },
    closeDiscussion() {
      this.review = ''
      this.isPushMessageClicked = false
      this.$emit('eventMessageSent', false)
    },
    cancel() {
      this.review = ''
      this.isPushMessageClicked = false
    },
    format_date(date) {
      return this.$moment(date).format('DD MMMM YYYY')
    },
    format_hour(date) {
      return this.$moment(date).format('HH:MM')
    },
    getInitials(name) {
      const nameArray = name.split(' ')
      const initialsArray = []
      for (var i = 0; i < nameArray.length; i++) {
        initialsArray.push(nameArray[i].split('')[0])
      }
      return initialsArray.join('').toUpperCase().slice(0, 3)
    },
    srcList(isFrom) {
      if (isFrom) {
        const imgListsFrom = []
        for (const img of this.reserve.pathImgConflictFrom) {
          const imgUrl = this.imagesUrl + img
          imgListsFrom.push(imgUrl)
        }
        return imgListsFrom
      } else {
        const imgListsTo = []
        for (const img of this.reserve.pathImgConflictTo) {
          const imgUrl = this.imagesUrl + img
          imgListsTo.push(imgUrl)
        }
        return imgListsTo
      }
    },
    async markReviewed() {
      try {
        if (this.review && this.review !== '') {
          const res = await this.$ownest.Api.conflictHasBeenReviewed(this.reserve._id, this.$profile.orga.wallet.address, this.review)
          if (res && res.status === 200) {
            this.$notify({
              title: 'Success',
              message: 'Réserve clôturée avec succès',
              type: 'success'
            })
          } else {
            this.$notify({
              title: 'Error',
              message: 'Echec de la clôture. Veuillez réessayer',
              type: 'error'
            })
          }
          this.review = ''
          this.$emit('eventReserveClosed', false)
        }
      } catch (error) {
        console.error(error)
      }
    },
    getStockAmount(stocksList, stock_uid) {
      if (stocksList && stock_uid) {
        for (var i = 0; i < stocksList.length; i++) {
          if (stocksList[i].uid === stock_uid) {
            return stocksList[i].amount
          }
        }
      }
    },
    openEventHistory(item) {
      this.$emit('eventOpenItemHistory', item)
    },
    async sendComment(idReserve) {
      if (this.comment && this.comment !== '' && this.$profile.orga.wallet.address && idReserve) {
        try {
          const res = await this.$ownest.Api.pushMessageToConflict(idReserve, this.$profile.orga.wallet.address, this.message)
          if (res && res.status === 200) {
            this.$notify({
              title: 'Success',
              message: 'Message envoyé',
              type: 'success'
            })
          } else {
            this.$notify({
              title: 'Error',
              message: 'Message non envoyé. Veuillez réessayer',
              type: 'error'
            })
          }
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  ::v-deep .el-image-viewer__wrapper .el-image-viewer__mask {
    opacity: 0.8;
  }

  .top-block {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    background: white;
  }

  .middle-block {
    position: absolute;
    top: 297px;
    bottom: 200px;
    width: 100%;

    &.larger {
      bottom: 97px;
    }
  }

  .drawer-header {
    font-size: 21px;
    padding: 15px;
    padding-top: 20px;

    .header-icon {
      font-size: 36px;
      float: left;
      margin-top: -2px;
      margin-right: 15px;
      margin-left: 5px;
    }

    .title {
      font-size: 18px;
      margin-top: -5px;
      margin-bottom: 5px;
      font-weight: 600;
    }

    .subtitle {
      font-size: 15px;

      .userName {
        display: inline-block;
        font-size: 15px !important;
        font-weight: 600;
      }
    }

    .close-modal-icon {
      font-size: 35px;
      float: right;
      margin-top: -34px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .reserve_block {

    .title {
      background: #DCDCDC;
      font-weight: 600;
      padding: 8px 15px;
    }

    .content {
      overflow-x: hidden;
      overflow-y: auto;

      &.reserve-discuss {
        background: #F4F4F4;
        height: calc(100% - 34px);
        padding: 15px;
      }

      &.reserve-content {
        padding: 10px;
        padding-right: 0px;
        overflow-x: auto;
        max-height: 71px;

        .product {
          margin: 3px 10px 3px 0px;
        }
      }

      &.reserve-proofs {
        padding: 10px;
        padding-right: 0px;
        overflow-x: auto;
        overflow-y: hidden;
        max-height: 86px;
        display: flex;
        align-items: flex-start;

        .img-reserve {
          height: 60px;
          width: 60px;
          min-width: 60px;
          margin: 3px 10px 3px 0px;
          border-radius: 5px;

          img {
            height: 100%;
            width: auto;
          }
        }
      }
    }
  }

  .messenging {

    .day-separator {
      text-align: center;

      .date {
        background: #c1c1c1;
        color: white;
        display: block;
        margin: 5px auto;
        padding: 3px 8px;
        font-size: 14px;
        border-radius: 15px;
        height: 22px;
        display: inline-block;
      }
    }

    .block-left {
      display: flex;
      margin-top: 10px;
      max-width: calc(100% - 90px);

      .msg-left {
        margin-left: 10px;
        background: #D8D8D8;
        padding: 10px;
        padding-right: 45px;
        border-radius: 8px 8px 8px 0px;
        position: relative;
        display: inline-block;
        width: fit-content;
        margin-bottom: 5px;

        &:before {
          position: absolute;
          content: '';
          border: 10px solid transparent;
          border-bottom-color: #D8D8D8;
          bottom: 0px;
          left: -10px;
        }
      }

      .user-avatar {
        display: flex;
        align-items: flex-end;
        padding-bottom: 5px;

        .initials {
          background: #cacaca;
          line-height: 36px;
          width: 36px;
          border-radius: 100%;
          display: inline-block;
          text-align: center;
          font-weight: 600;
          font-size: 0.85em;
          margin-right: 5px;
          color: white;
        }
      }

      &.user-doing-reserve {

        .msg-username {
          color: #108214;
        }

        .user-avatar .initials {
          background: #108214;
        }
      }
    }

    .block-right {
      margin-top: 10px;

      .msg-right {
        background: #0380FF;
        color: white;
        padding: 10px;
        padding-right: 50px;
        border-radius: 8px 8px 0px 8px;
        position: relative;
        width: fit-content;
        max-width: 90%;
        margin-bottom: 5px;
        margin-left: auto;

        &:before {
          position: absolute;
          content: '';
          border:10px solid transparent;
          border-bottom-color: #0380FF;
          bottom: 0px;
          right: -8px;
        }
      }
    }

    .msg-username {
      font-size: 0.9em;
      font-weight: 600;
      margin-bottom: 5px;
    }

    .msg-time {
      font-weight: 500;
      font-size: 0.80em;
      position: absolute;
      right: 5px;
      bottom: 5px;
    }
  }

  .footer {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;

    &.disabled {
      background: #c1c1c1;
      color: white;
      font-size: 21px;
      font-weight: 600;
      width: 100%;
      text-align: center;
      padding: 36px 0px;
      border-top: 1px solid #DBDBDB;
    }

    .text-input-area {
      display: block;
      width: 100%;
      height: 103px;
      background: white;
      border-top: 1px solid #DBDBDB;
      padding: 20px 25px;

      .message-box {
        .send-message-icon {
          display: inline-block;
          margin-left: 10px;
          font-size: 21px;
          color: #A4A4A4;

          &:hover {
            cursor: pointer;
            color: #0380FF;
          }
        }

        .text-area {
          width: calc(100% - 50px);
          display: inline-block;

          input {
            background: #F3F3F3;
            border-radius: 10px;
            font-size: 15px;
            height: 40px;
          }
        }
      }
    }

    .bottom-buttons {
      border-top: 1px solid #DBDBDB;
      padding: 20px 25px;

      &.no-top-border {
        border-top: none;
        padding-top: 21px;
      }

      .close-reserve-btn {
        background: #4A4F5A;
        color: white;
        font-size: 21px;
        font-weight: 600;
        width: 100%;
        display: block;
        text-align: center;
        padding: 16px 0px;
        border-radius: 6px;

        &:hover {
          cursor: pointer;
          background: #616469;
        }
      }

      .close-reserve-actions {
        display: flex;
        justify-content: space-between;

        .cancel, .validate {
          background: #E7E7E7;
          font-size: 21px;
          font-weight: 600;
          text-align: center;
          padding: 16px 0px;
          border-radius: 6px;
          width: 49%;

          &:hover {
            cursor: pointer;
            background: #f1f1f1;
          }
        }

        .validate {
          background: #0380FF;
          color: white;

          &:hover {
            background: #42a0ff;
          }
        }
      }
    }
  }
</style>

