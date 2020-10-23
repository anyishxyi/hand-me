<template>
  <div>
    <section class="board">
      <div class="board-left">
        <div class="board-left-profile">
          <span class="board-left-profile__name"></span>
          <span class="board-left-profile__location"></span>
        </div>
        <div class="board-left-menu">
          <div class="board-left-menu-container">
            <a class="board-left-menu-container-item" href>
              <div style="background-image:url('~@/assets/Icon.png')"></div>
            </a>
            <div class="board-left-menu-container-item"></div>
            <div class="board-left-menu-container-item"></div>
            <div class="board-left-menu-container-item"></div>
            <div class="board-left-menu-container-item"></div>
            <div class="board-left-menu-container-item"></div>
          </div>
        </div>
      </div>

      <div class="board-middle">
        <div class="board-middle-banner">
          <span class="board-middle-banner-text"
            >Hello {{ user.particularFirstName }}</span
          >
          <h1 class="board-middle-banner-title">bienvenue sur ton dashboard</h1>
        </div>
        <div class="board-middle-content">
            <div class="ownest-table-style reserve-content">
              <el-table
                v-if="events"
                v-loading="loading"
                :data="events"
                stripe
                size="mini"
              >
                <el-table-column label="Titre">
                  <template slot-scope="scope">{{scope.row.eventTitle}}</template>
                </el-table-column>
                <el-table-column label="Date">
                  <template slot-scope="scope">
                    <div class="datetime">
                      <div class="date">{{ displayDate(scope.row.eventDate) }}</div>
                      <div class="time">{{ displayTime(scope.row.eventDate) }}</div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="Lieu">
                  <template slot-scope="scope">{{scope.row.eventPlace}}</template>
                </el-table-column>
                <el-table-column label="Nombre des participants">
                  <template slot-scope="scope">{{scope.row.participants? scope.row.participants.length : []}}</template>
                </el-table-column>

                <el-table-column label="Actions" align="right" width="100">
                  <template slot-scope="scope">
                    <el-badge class="btn-details">
                      <el-button circle @click="handleShowEvent(scope.row)"><i class="el-icon-view"></i></el-button>
                      <el-button circle @click="readMessageClicked(scope.row)"><i class="el-icon-message"></i></el-button>
                    </el-badge>
                  </template>
                </el-table-column>
              </el-table>
            </div>
        </div>
      </div>

      <!-- <div class="board-right">
        <div
          v-for="(item, index) in events"
          :key="index"
          class="board-right-container"
        >
          <el-col class="board-right-container-card">
            <el-card shadow="hover" class="board-right-container-card-element">
              <router-link
                :to="{
                  name: 'communityBlog',
                  params: {
                    communityId: item.community.communityId,
                    communityData: communityData
                  }
                }"
                class="board-right-container-card-element-link"
                >{{ item.eventTitle }}</router-link
              >
            </el-card>
          </el-col>
        </div>
      </div> -->
    </section>

    <ShowEvent
      :event="eventClicked"
      :visibility="dialogEventVisible"
      @eventToggleDisplayEvent="toggleDisplayEventVisibility"
    />
    <Message
      :showdrawer="drawerMessageReserveVisible"
      :event="eventClicked"
      @eventMessageReserveSent="handleMessageReserveSent"
      @eventReserveClosed="closeDrawerAndReloadReserves"
      @eventOpenItemHistory="openDialogMessage"
    />
  </div>
</template>

<script>
import ShowEvent from '@/components/Event/ShowEvent'
import Message from '@/components/Community/Message'

export default {
  name: "userBoard",
  components: { ShowEvent, Message },
  data: function() {
    return {
      token: "",
      events: [],
      user: {},
      communityData: {},
      eventClicked: {},
      dialogEventVisible: false,
      drawerMessageReserveVisible: false,
      loading: true
    };
  },
  async mounted() {
    const userData = this.$store.state.userData
    //this.events = userData && userData.events ? userData.events : [];
    console.log("userData", userData);
    this.events = userData.events;
    this.user = userData.particularDto;

    this.communityData = {
      token: userData.token,
      usrEmail: userData.particularDto.particularEmail
    };
    this.loading = false
  },
  methods: {
    readMessageClicked(event) {
      this.drawerMessageReserveVisible = true
      this.eventClicked = event
    },
    displayDate(date) {
      return this.$moment(date).format('DD MMMM YYYY')
    },
    displayTime(value) {
      const format = 'HH:mm'
      let date = value.eventDate

      return this.$moment(date).format(format)
    },
    async handleShowEvent(event) {
      if (event) {
        this.eventClicked = event
        this.dialogEventVisible = true
      }
    },
    toggleDisplayEventVisibility(value) {
      if(!value) this.eventClicked = {}
      this.dialogEventVisible = value
    },
    handleMessageReserveSent(value) {
      this.drawerMessageReserveVisible = value
    },
    closeDrawerAndReloadReserves() {
      this.drawerMessageReserveVisible = false
      // this.getReserves()
    },
    openDialogMessage(event) {
      this.eventClicked = event
      this.toggleItemHistoryVisibility(true)
    },
    toggleItemHistoryVisibility(val) {
      this.dialogItemHistoryVisibility = val

      if (val === false) { this.selectedItem = {} }
    },
  }
};
</script>

<style lang="scss" scoped>
$darkGrey: #212020;
$white: #ffffff;
$blue: #4270f3;
$brightGrey: #d8d8d8;

@mixin text-uppercase() {
  text-transform: uppercase;
}

@mixin bg-color-hover($color) {
  padding: 10px;
  border-radius: 5px;
  background-color: $color;
}
.board {
  margin-top: 60px;
  width: 100%;
  height: 900px;
  display: flex;
  &-left {
    width: 25%;
    height: 100%;
    &-profile {
      width: 100%;
      height: 300px;
      background: url("~@/assets/galina.png") no-repeat center center;
      background-size: cover;
    }
    &-menu {
      width: 100%;
      height: 800px;
      display: flex;
      justify-content: center;
      background-color: $blue;
      &-container {
        width: 80%;
        height: 400px;
        margin: 30px 0 0 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5px;
        &-item {
          background-color: $blue;
          border: 1px solid $brightGrey;
          text-align: center;
        }
        &-item:hover {
          background-color: $white;
          border: 1px solid $brightGrey;
          text-align: center;
        }
      }
    }
  }
  &-middle {
    width: 100%;
    height: 700px;
    &-banner {
      width: 100%;
      height: 300px;
      position: relative;
      background: url("~@/icons/jpg/header_home.jpg") no-repeat center center;
      background-size: cover;
      &-text {
        position: absolute;
        bottom: 40px;
        left: 20px;
        color: $white;
        margin: 50px 0 50px 0;
      }
      &-title {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: $white;
      }
    }
    &-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      // align-items: center;

      &-cards {
        width: 90%;
        height: 300px;
        display: flex;
        justify-content: space-around;
        margin: 30px 0 0 0;
        &-card {
          width: 33%;
          margin: 0 25px 0 0;
          box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
          text-align: center;
          h2 {
            @include text-uppercase();
          }
        }
      }

      &-table {
        width: 100%;
        padding: 25px;
      }

      /*table {
        border-collapse: separate;
        background: #fff;
        width: 100%;
        border-radius: 5px;
        margin: 50px auto;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
      }

      thead {
        border-radius: 5px;
      }

      thead th {
        font-family: "Patua One", cursive;
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
        text-align: left;
        padding: 20px;
        background-image: linear-gradient(#646f7f, #4a5564);
        border-top: 1px solid #858d99;

        &:first-child {
          border-top-left-radius: 5px;
        }

        &:last-child {
          border-top-right-radius: 5px;
        }
      }

      tbody tr td {
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        color: #5f6062;
        font-size: 13px;
        padding: 20px 20px 20px 20px;
        border-bottom: 1px solid #e0e0e0;
      }*/
    }
  }
  &-right {
    width: 25%;
    height: 100%;
    background-color: $blue;

    &-container {
      padding: 10px 10px 0 10px;

      &-card {
        padding-bottom: 10px;

        &-element {
          &-link {
            background-color: black;
          }
        }
      }
    }
  }
}

.datetime {
  .date {
    font-weight: 600;
    font-size: 16px;
  }

  .time {
    font-size: 12px;
  }
}


.btn-details {
  display: flex;
  margin: 0px 2px 4px 2px;
}

</style>
