<template>
  <div class="events-container">
    <div class="container">
      <div class="left">
        <div v-if="step1">
          <div class="heading">Créer un évènement (Etape 1 sur 3)</div>
          <div class="title">Commençons par donner un nom à votre évènement</div>
          <div class="eventTitle">
            <el-input placeholder="Saisissez le titre de votre évènement..." v-model="eventData.eventTitle"></el-input>
          </div>

        <div class="eventTitle">
          <el-select v-model="eventData.categoryName" placeholder="Type d'évènement">
            <el-option label="Entraide sur un projet" value="Entraide sur un projet"></el-option>
            <el-option label="Action pour les autres" value="Action pour les autres"></el-option>
            <el-option label="Action pour l'environnement" value="Action pour l'environnement"></el-option>
          </el-select>
        </div>

          <div class="actions">
            <el-button @click="nextToStep2" type="primary">Continuer</el-button>
          </div>
        </div>
        <div v-if="step2">
          <div class="heading">Créer un évènement (Etape 2 sur 3)</div>
          <div class="title">Donnons une description de votre évènement</div>
          <el-input
            type="textarea"
            class="eventDescr"
            :autosize="{ minRows: 2, maxRows: 10}"
            placeholder="Saisissez le titre de votre évènement..."
            v-model="eventData.eventDescription">
          </el-input>
          <div class="actions">
            <el-button class="left1" @click="nextToStep1" type="text">retour</el-button>
            <el-button class="right2" @click="nextToStep3" type="primary">Continuer</el-button>
          </div>
        </div>
        <div v-if="step3">
          <div class="heading">Créer un évènement (Etape 3 sur 3)</div>
          <div class="title">Quelques informations utiles</div>
          <div class="content">
            <Places
              class="address"
              id="userAddressCreate"
              classname="form-control"
              type="address"
              placeholder="Adresse..."
              @change="getPlace"
              :error="handleError"
            />
            <!-- <el-input class="address" placeholder="Lieu de l'évènement..." v-model="eventData.eventPlace"></el-input> -->
            <el-date-picker class="date" v-model="eventData.eventDate" type="date" placeholder="date de l'évènement..."></el-date-picker>
          </div>
          <div class="actions">
            <el-button @click="nextToStep2" type="text">retour</el-button>
            <el-button @click="validate" type="primary">Continuer</el-button>
          </div>
        </div>
      </div>
      <div class="right" />
    </div>
  </div>
</template>

<script>
import Places from '@/components/places/Places'
import { authComputed } from '@/store/helpers'

export default {
  name: "CREATEEVENTPAGE",
  components: { Places },
  data(){
    return {
      userData: {},
      eventData: {
        eventTitle: '',
        eventDescription: '',
        eventPlace: '',
        eventDate: '',
        eventMakerEmail: '',
        categoryName : ''
      },
      step1: true,
      step2: false,
      step3: false
    }
  },
  computed: {
    ...authComputed
  },
  methods: {
    nextToStep1() {
      this.step1 = true
      this.step2 = false
      this.step3 = false
    },
    nextToStep2() {
      if (this.eventData.eventTitle === '') return
      this.step1 = false
      this.step2 = true
      this.step3 = false
    },
    nextToStep3() {
      if (this.eventData.eventDescription === '') return
      this.step1 = false
      this.step2 = false
      this.step3 = true
    },
    async validate() {
      this.userData = this.$store.state.userData
      if(this.userData.particularDto) {
        this.eventData.eventMakerEmail = this.userData.particularDto.particularEmail
        this.$store.dispatch('addEventParticular', this.filters)
                    .then((data) => { console.log('data', data) })
                    .catch(() => this.$notify.error({title: 'Error', message: "Erreur lors de la création d'évènement"}))
      } else {
        this.eventData.eventMakerEmail = this.userData.organizationDto.organizationEmail
        this.$store.dispatch('addEventOrga', this.filters)
                    .then(() => { console.log('done') })
                    .catch(() => this.$notify.error({title: 'Error', message: "Erreur lors de la création d'évènement"}))
      }
    },
    handleError(error){
      alert(error)
    },
    getPlace(place) {
      if(!place) return
      this.eventData.eventPlace = place
      // console.log('this.eventData.eventPlace', this.eventData.eventPlace)
    }
  }
}
</script>

<style lang="scss" scoped>
.events-container {
  width:100%;
  display: flex;
  flex-flow: column;
  height: 100%;
  color: #333333;
}

.container {
  width:100%;
  margin-top:60px;
  height: 705px;

  .left {
    float:left;
    width: 53%;
    margin-top: 20px;
    margin-left: 25px;
    margin-right: 0px;
    margin-bottom: 0px;
    display: block;

    .heading {
      font-size: 20px;
      color: #7E829B;
      letter-spacing: 0.14px;
      margin-top: 90px;
      margin-left: 50px;
      margin-bottom: 60px;
    }

    .title {
      font-size: 30px;
      color: #7E829B;
      letter-spacing: 0.14px;
      margin-top: 50px;
      margin-left: 50px;
      margin-bottom: 60px;
    }

    .eventTitle {
      width: 570px;
      margin-left: 50px;
      margin-bottom: 60px;
    }

    .eventDescr {
      width: 650px;
      margin-left: 50px;
      margin-bottom: 60px;
    }

    .content {
      width: 570px;
      margin-left: 50px;
      margin-bottom: 60px;

      .address {
        width: 300px;
      }

      .date {
        width: 250px;
        padding-left: 10px;
      }
    }

    .actions {
      display: flex;
      margin-left: 50px;
      .left1 { float: left; }
      .right1 { float: right; }
    }

  }
  .right {
    background: url('~@/assets/bg_create_project.png') no-repeat center center;
    background-size: cover;
    text-align:justify;
    float:right;
    height: 750px;
    width: 45%;
  }
}

.footer-fixed {
  bottom: 0;
  position: fixed;
}

.clear {
  clear:both;
}

</style>
