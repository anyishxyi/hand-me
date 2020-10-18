<template>
  <GeneralModal
    :modal-visible="visibility"
    width="600px"
    @eventModalClose="beforeClose"
  >
    <div class="header">

    </div>
    <div class="content">

    
      <h3>Ttire de l'évènement :</h3> 
      {{event.eventTitle}}
      <h3>Lieu de l'évènement :</h3> 
      {{event.eventPlace}}
      <h3>Description de l'évènement :</h3> 
      {{event.eventDescription}}

      <div class="buttons">
            <el-button  align="center" @click="add" class="btn btn-validate" type="success" round>Participer</el-button>
      </div>
    </div>
    <div class="actions">

    </div>
  </GeneralModal>
</template>

<script>
import apiService from '@/services/apiService'
import GeneralModal from '@/components/GeneralModal'

export default {
  name: 'ShowEvent',
  components: { GeneralModal },
  props: {
    visibility: {
      type: Boolean,
      default: false
    },
    event: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      userData: {},
      eventData: {
         participantEmail: '',
         eventId:''
      }
    }
  },
   async mounted() {
    this.userData = await this.$localforage.getItem('userData')
  },
  methods: {
    beforeClose(newVal) {
      this.$emit('eventToggleDisplayEvent', newVal)
    },
    confirm() {
      this.$emit('confirm')
    },

        async add() {
      
 this.eventData.participantEmail = this.userData.particularDto ? this.userData.particularDto.particularEmail : this.userData.organizationDto.organizationEmail
 this.eventData.eventId = this.event.eventId
      console.log('eventData')
      console.log(this.eventData)
      const res = await apiService.addevent(this.eventData, this.userData.token)
                                  .catch(error => {
                                    this.$notify.error({title: 'Error', message: 'Erreur lors de la connexion au serveur'});
                                    console.error(error)
                                    return
                                  })
      console.log('res')
      console.log(res)
      if(!res || !res.data || res.status !== 200) {
        // this.$notify.error({title: 'Error', message: 'Erreur de connexion'});
        return
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.general-modal {
  .close-modal-icon {
    position: absolute;
    right: -19px;
    top: -17px;
    font-size: 38px;
    cursor: pointer;
  }
  .subfooter {
    position: absolute;
    margin-top: 30px;
    width: 100%;
    margin-left: -20px;
    .subfooter-button {
      display: block;
      background: #3574e4;
      width: 100%;
      margin-top: 15px;
      padding: 15px;
      color: white;
      text-align: center;
      border-radius: 5px;
      font-size: 25px;
      font-weight: 600;
      box-shadow: 0px 1px 4px 0px #5d5d5d;
      &:hover {
        cursor: pointer;
        box-shadow: 0px 1px 4px 0px #676767;
        background: #4082f7;
      }
    }
  }
}
</style>
