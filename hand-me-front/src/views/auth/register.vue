<template>
  <div class="events-container">
    <div class="container">
      <div class="left">
        <div v-if="step" class="step">
          <p class="steping">Créer votre compte(Etape 1 sur 3)</p>
          <h1 class="title">Repondez à ces quelques questions afin de continuer...</h1>
          <p class="question"><strong>Qui êtes-vous ?</strong></p>
          <p><el-button type="primary" @click="registerForm.society = false" class="btn" plain>Je suis un particulier</el-button></p>
          <p><el-button type="primary" @click="registerForm.society = true" class="btn" plain>Je suis une société(Association)</el-button></p>
          <div class="buttons">
            <el-button @click="handleCheckSociety" class="btn btn-validate" type="succes" round>Suivant</el-button>
          </div>
        </div>
        <!-- Steps for Particular registion -->
        <div v-if="step11">
          <p class="steping">Créer votre compte(Etape 2 sur 3)</p>
          <p><strong>Identifiant de connexion</strong></p>
          <div class="content">
            <el-input placeholder="email..." v-model="registerForm.email"></el-input>
            <el-input placeholder="Mot de passe..." v-model="registerForm.pass" ></el-input>
            <el-input placeholder="Confirmation mot de passe..." v-model="registerForm.pass1" ></el-input>
          </div>
          <div class="buttons">
            <el-button @click="backToCheckSociety" type="text">retour</el-button>
            <el-button @click="handleValidateIdentity" class="btn btn-validate" type="danger">Valider</el-button>
          </div>
        </div>
        <div v-if="step12">
          <p class="steping">Créer votre compte(Etape 3 sur 3)</p>
          <p><strong>Plus d'informations...</strong></p>
          <div class="first-input">
            <div>
              <el-input placeholder="Prenom..." v-model="userData.particularFirstName"></el-input>
            </div>
            <div class="input-left">
              <el-input placeholder="Nom..." v-model="userData.particularName" ></el-input>
            </div>
          </div>
          <div class="inputs">
            <div>
              <el-input placeholder="Ville..." v-model="userData.particularLocation"></el-input>
            </div>
            <div class="input-left">
              <el-input placeholder="Téléphone..." v-model="userData.phonenumber"></el-input>
            </div>
          </div>
          <div class="buttons">
            <el-button @click="backToCheckSociety" type="text">retour</el-button>
            <el-button @click="handleValidateParticular" class="btn btn-validate" type="danger">Valider</el-button>
          </div>
        </div>
        <div v-if="step13">Success</div>
        <!-- Steps for Association registion -->
        <div v-if="step1">
          <p><strong>Quel est le SIRET de votre société ?</strong></p>
          <p><el-input placeholder="SIRET..." v-model="registerForm.siret" class="marginInput"></el-input></p>
          <div class="buttons">
            <el-button @click="backToCheckSociety" type="text">retour</el-button>
            <el-button @click="handleCheckSiret" class="btn btn-validate" type="danger">Suivant</el-button>
          </div>
        </div>
        <div v-if="step2">
          <p><strong>Informations de votre société</strong></p>
          <div class="first-input">
            <div>
              <p>Nom:</p>
              <el-input placeholder="Nom..." v-model="registerForm.societyName"></el-input>
            </div>
            <div class="input-left">
              <p>Site web:</p>
              <el-input placeholder="Site web..." v-model="registerForm.societyWeb" ></el-input>
            </div>
          </div>
          <div class="inputs">
            <div>
              <p>Localisation:</p>
              <el-input placeholder="Ville..." v-model="registerForm.societyCity"></el-input>
            </div>
            <div class="input-left">
              <p>Montant du capital social (€)</p>
              <el-input v-model="registerForm.societyCapital" ></el-input>
            </div>
          </div>
          <div class="inputs">
            <div>
              <p>Valeur nominale de l'action (€)</p>
              <!-- <el-input v-model="registerForm.societyValueAction" @change="onValueAction"></el-input> -->
              <el-input v-model="registerForm.societyValueAction" @input="onValueAction"></el-input>
            </div>
            <div class="input-left">
              <p>Nombre d'action (calculé)</p>
              <el-input v-model="registerForm.societyNumberAction"  :disabled="true"></el-input>
            </div>
          </div>
          <div class="buttons">
            <el-button @click="backToCheckSiret" type="text">retour</el-button>
            <el-button @click="handleValidate" class="btn btn-validate" type="danger">Valider</el-button>
          </div>
        </div>
        <div v-if="step3">Success</div>
      </div>
      <div class="right" />
    </div>
  </div>
</template>

<script>
import apiService from '@/services/apiService'

export default {
  name: 'Register',
  data() {
    return {
      registerForm: {},
      email: '',
      password: '',
      confirmPassword: '',
      particularName: '',
      particularFirstName: '',
      particularEmail: '',
      particularPassword: '',
      particularPhonenumber: '',
      particularLocation: '',
      userData: {
        particularName: '',
        particularFirstName: '',
        particularEmail: '',
        particularPassword: '',
        particularPhonenumber: '',
        particularLocation: ''
      },
      passwordType: 'password',
      loading: false,
      success: false,
      isCodeDownloaded: false,
      confirmPass: 'Confirmer le mot de passe',
      isRegister: true,
      step: true,
      step1: false,
      step2: false,
      step3: false,
      step11: false,
      step12: false,
      step13: false,
      fit: 'fill'
    }
  },
  methods: {
    handleRegister() {
      if(!this.registerForm || !this.registerForm.email) return
      if(this.registerForm.password === this.registerForm.confirmPassword) {
        this.isRegister = false
        this.step = true
      }
    },
    handleCheckSociety() {
      console.log(this.registerForm)
      if(this.registerForm.society) {
        this.step1 = true
      } else {
        this.step11 = true
      }
      this.step = false
      this.step2 = false
    },
    backToCheckSociety() {
      this.step = true
      this.step1 = false
      this.step11 = false
      this.step12 = false
      this.step2 = false
    },
    handleCheckSiret() {
      if(this.handleCheckSiret.siret !== 0) {
        this.step = false
        this.step1 = false
        this.step11 = false
        this.step12 = false
        this.step2 = true
      }
    },
    handleValidateIdentity() {
      if (!this.registerForm.email || this.registerForm.pass !== this.registerForm.pass1 ) return
      this.step = false
      this.step1 = false
      this.step11 = false
      this.step12 = true
      this.step2 = false
    },
    backToCheckSiret() {
      this.step = false
      this.step1 = true
      this.step11 = false
      this.step12 = false
      this.step2 = false
    },
    backToRegister() {
      this.isRegister = true
      this.step = false
      this.step1 = false
      this.step11 = false
      this.step12 = false
      this.step2 = false
    },
    handleValidate() {
      if ( !this.registerForm.siret ||
      !this.registerForm.societyName ||
      !this.registerForm.societyWeb ||
      !this.registerForm.societyCity ||
      !this.registerForm.societyCapital ||
      !this.registerForm.societyValueAction ||
      !this.registerForm.societyNumberAction) {
        return
      }
      console.log('this.registerForm')
      console.log(this.registerForm)
    },
    async handleValidateParticular() {
      this.userData.particularEmail = this.registerForm.email
      this.userData.particularPassword = this.registerForm.pass
      console.log('this.userData')
      console.log(this.userData)
      const res = await apiService.registerParticular(this.userData).catch(error => console.log(error))
      console.log('this.res')
      console.log(res)
    },
    onValueAction(value) {
      console.log(value)
      if(!value || !this.registerForm.societyCapital) return
      this.registerForm.societyValueAction = value
      this.registerForm.societyNumberAction = this.registerForm.societyCapital / this.registerForm.societyValueAction
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

    .step {
      padding-top: 50px;
      padding-left: 50px;

      .steping {
        color: #7E829B;
      }
      .title {
        padding-bottom: 20px;
        padding-top: 20px;
        letter-spacing: 0.14px;
      }
      .subtitle {
        letter-spacing: 0.14px;
      }
      .question {
        letter-spacing: 0.14px;
      }
      .buttons {
        padding-top: 40px;
      }
    }

  }
  .right {
    background: url('~@/assets/bg_create_particular.png') no-repeat center center;
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
