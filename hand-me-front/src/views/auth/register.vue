<template>
  <div class="events-container">
    <div class="container">
      <div class="left">
        <div v-if="step" class="step">
          <p class="steping">Créer votre compte(Etape 1 sur 3)</p>
          <h1 class="title">Repondez à ces quelques questions afin de continuer...</h1>
          <p class="question"><strong>Qui êtes-vous ?</strong></p>
          <p><el-button type="primary" @click="registerForm.society = false" class="btn" plain>Je suis un particulier</el-button></p>
          <p><el-button type="primary" @click="registerForm.society = true" class="btn" plain>Je suis une association</el-button></p>
          <div class="buttons">
            <el-button @click="handleCheckSociety" class="btn btn-validate" type="succes" round>Suivant</el-button>
          </div>
        </div>
        <!-- Steps for Particular registion -->
        <div v-if="step11" class="step11">
          <p class="steping">Créer votre compte(Etape 2 sur 3)</p>
          <h1 class="title">Veuillez renseigner ces informations d'authentification</h1>
          <div class="content">
            <el-input placeholder="email..." class="input" v-model="registerForm.email" clearable />
            <el-input placeholder="Mot de passe..." class="input" v-model="registerForm.pass" show-password />
            <el-input placeholder="Confirmation mot de passe..." class="input" v-model="registerForm.pass1" show-password />
          </div>
          <div class="buttons">
            <el-button @click="backToCheckSociety" type="text">retour</el-button>
            <el-button @click="handleValidateIdentity" class="btn btn-validate" type="succes" round>Valider</el-button>
          </div>
        </div>
        <div v-if="step12" class="step12">
          <p class="steping">Créer votre compte(Etape 3 sur 3)</p>
          <h1 class="title">Plus d'informations necessaire...</h1>
          <div class="content">
            <el-input placeholder="Prenom..."  class="input" v-model="userData.particularFirstName"></el-input>
            <el-input placeholder="Nom..." class="input" v-model="userData.particularName" ></el-input>
            <Places
              class="input"
              id="userAddress"
              classname="form-control"
              type="address"
              placeholder="Adresse..."
              @change="getPlace"
              :error="handleError"
            />
            <!-- <el-input placeholder="Adresse..." class="input" v-model="userData.particularLocation"></el-input> -->
            <el-input placeholder="Téléphone..." class="input" v-model="userData.phonenumber"></el-input>
          </div>
          <div class="buttons">
            <el-button @click="backToCheckSociety" type="text">retour</el-button>
            <el-button @click="handleValidateParticular" class="btn btn-validate" type="succes" round>Valider</el-button>
          </div>
        </div>
        <div v-if="step13">
          <div class="success-checkmark">
            <div class="check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
          </div>
          <div class="message">Votre compte a été créé avec succès !</div>
          <router-link :to="{path: '/events'}"><el-button class="success">continuer</el-button></router-link>
        </div>
        <div v-if="step1" class="step1">
          <p class="steping">Créer votre compte(Etape 2 sur 3)</p>
          <h1 class="title">Quelques informations sur votre association</h1>
          <p><el-input placeholder="SIRET..." v-model="orgaData.organizationMatricule" class="marginInput"></el-input></p>
          <p><el-input placeholder="Nom de votre association..." v-model="orgaData.organizationName"></el-input></p>
            <Places
              class="input"
              id="userAddress"
              classname="form-control"
              type="address"
              placeholder="Siège social de l'association..."

              @change="getPlace"
              :error="handleError"
            />
          <div class="buttons">
            <el-button @click="backToCheckSociety" type="text">retour</el-button>
            <el-button @click="handleCheckSiret" class="btn btn-validate" type="succes" round>Suivant</el-button>
          </div>
        </div>
        <div v-if="step2" class="step2">
          <p class="steping">Créer votre compte(Etape 3 sur 3)</p>
          <h1 class="title">Quelques informations sur le gérant de cette société</h1>
          <p><el-input placeholder="Nom..." v-model="orgaData.organizationChiefName" ></el-input></p>
          <p><el-input placeholder="Prénom..." v-model="orgaData.organizationChiefFirstname"></el-input></p>
          <p><el-input placeholder="Email..." v-model="registerForm.email" @input="onValueAction"></el-input></p>
          <p><el-input placeholder="Téléphone..." v-model="orgaData.organizationPhoneNumber" ></el-input></p>
          <p><el-input placeholder="Mot de passe..." class="input" v-model="registerForm.pass" show-password /></p>
          <p><el-input placeholder="Confirmation mot de passe..." class="input" v-model="registerForm.pass1" show-password /></p>
          <div class="buttons">
            <el-button @click="backToCheckSiret" type="text">retour</el-button>
            <el-button @click="handleValidateOrganization" class="btn btn-validate" type="succes" round>Valider</el-button>
          </div>
        </div>
        <div v-if="step3">Success</div>
      </div>
      <div class="right" />
    </div>
  </div>
</template>

<script>
import Places from '@/components/places/Places'

export default {
  name: 'Register',
  components: { Places },
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
      organizationName :'',
      organizationChiefName : '',
      organizationChiefFirstname :'',
      organizationPassword :'',
      organizationLocation :'',
      organizationMatricule :'',
      organizationLogo :'',
      organizationDescription :'',
      organizationWebSite :'',
      organizationPhoneNumber :'',
      organizationEmail :'',
      organizationCreationDate :'',
      userAddress:{},
      orgaAddress:{},
      userData: {
        particularName: '',
        particularFirstName: '',
        particularEmail: '',
        particularPassword: '',
        particularPhonenumber: '',
        particularLocation: '',
      },
      orgaData: {
        organizationName :'',
        organizationChiefName : '',
        organizationChiefFirstname :'',
        organizationPassword :'',
        organizationLocation :'',
        organizationMatricule :'',
        organizationLogo :'',
        organizationDescription :'',
        organizationWebSite :'',
        organizationPhoneNumber :'',
        organizationEmail :'',
        organizationCreationDate :'',
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
      this.step13 = false
      this.step2 = false
      this.step3 = false
    },
    handleCheckSiret() {
      if(this.handleCheckSiret.siret !== 0) {
        this.step = false
        this.step1 = false
        this.step11 = false
        this.step12 = false
        this.step13 = false
        this.step2 = true
        this.step3 = false
      }
    },
    handleValidateIdentity() {
      if (!this.registerForm.email || this.registerForm.pass !== this.registerForm.pass1 ) return
      this.step = false
      this.step1 = false
      this.step11 = false
      this.step12 = true
      this.step13 = false
      this.step2 = false
      this.step3 = false
    },
    backToCheckSiret() {
      this.step = false
      this.step1 = true
      this.step11 = false
      this.step12 = false
      this.step13 = false
      this.step2 = false
      this.step3 = false
    },
    backToRegister() {
      this.isRegister = true
      this.step = false
      this.step1 = false
      this.step11 = false
      this.step12 = false
      this.step13 = false
      this.step2 = false
      this.step3 = false
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
      // console.log('this.userData')
      // console.log(this.userData)
      this.$store.dispatch('register_particular', this.userData)
                  .then(({ data }) => { console.log('user data is:', data ) })
                  .catch(error => { console.log(error) })
      // console.log('res', res)
      this.isRegister = false
      this.step = false
      this.step1 = false
      this.step11 = false
      this.step12 = false
      this.step13 = true
      this.step2 = false
      this.step3 = false
    },
    async handleValidateOrganization() {
      this.orgaData.organizationEmail = this.registerForm.email
      this.orgaData.organizationPassword = this.registerForm.pass
      this.$store.dispatch('register_association', this.orgaData)
                  .then(({ data }) => { console.log('orga data is:', data ) })
                  .catch(error => { console.log(error) })
      // console.log('res', res)
      this.isRegister = false
      this.step = false
      this.step1 = false
      this.step11 = false
      this.step12 = false
      this.step13 = true
      this.step2 = false
      this.step3 = false
    },
    onValueAction(value) {
      console.log(value)
      if(!value || !this.registerForm.societyCapital) return
      this.registerForm.societyValueAction = value
      this.registerForm.societyNumberAction = this.registerForm.societyCapital / this.registerForm.societyValueAction
    },
    handleError(error){
      alert(error)
    },
    getPlace(place) {
      if(!place) return
      this.userData.particularLocation = place
      this.orgaData.organizationLocation = place
    },
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
      .question {
        letter-spacing: 0.14px;
      }
      .buttons {
        padding-top: 40px;
      }
    }

    .step11 {
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
      .content {
        letter-spacing: 0.14px;
        .input {
          width: 400px;
          padding-bottom: 10px;
        }
      }
      .buttons {
        padding-top: 40px;
      }
    }

    .step12 {
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
      .content {
        letter-spacing: 0.14px;
        .input {
          width: 400px;
          padding-bottom: 10px;
        }
      }
      .buttons {
        padding-top: 40px;
      }
    }

    .step1 {
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
      .content {
        letter-spacing: 0.14px;
        .input {
          width: 400px;
          padding-bottom: 10px;
        }
      }
      .buttons {
        padding-top: 40px;
      }
    }

    .step2 {
      padding-top: 30px;
      padding-left: 50px;

      .steping {
        color: #7E829B;
      }
      .title {
        padding-bottom: 20px;
        padding-top: 20px;
        letter-spacing: 0.14px;
      }
      .content {
        letter-spacing: 0.14px;
        .input {
          width: 400px;
          padding-bottom: 10px;
        }
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

.success {
  margin-left: 56%;
  margin-top: 5%;
}

.message {
  padding-top: 15%;
  padding-left: 35%;
  font-size: 24px;
}

.success-checkmark {
    width: 80px;
    height: 115px;
    margin: 0 auto;
    padding-left: 15%;
    padding-top: 20%;

    .check-icon {
        width: 80px;
        height: 80px;
        position: relative;
        border-radius: 50%;
        box-sizing: content-box;
        border: 4px solid #4CAF50;

        &::before {
            top: 3px;
            left: -2px;
            width: 30px;
            transform-origin: 100% 50%;
            border-radius: 100px 0 0 100px;
        }

        &::after {
            top: 0;
            left: 30px;
            width: 60px;
            transform-origin: 0 50%;
            border-radius: 0 100px 100px 0;
            animation: rotate-circle 4.25s ease-in;
        }

        &::before, &::after {
            content: '';
            height: 100px;
            position: absolute;
            background: #FFFFFF;
            transform: rotate(-45deg);
        }

        .icon-line {
            height: 5px;
            background-color: #4CAF50;
            display: block;
            border-radius: 2px;
            position: absolute;
            z-index: 10;

            &.line-tip {
                top: 46px;
                left: 14px;
                width: 25px;
                transform: rotate(45deg);
                animation: icon-line-tip 0.75s;
            }

            &.line-long {
                top: 38px;
                right: 8px;
                width: 47px;
                transform: rotate(-45deg);
                animation: icon-line-long 0.75s;
            }
        }

        .icon-circle {
            top: -4px;
            left: -4px;
            z-index: 10;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            position: absolute;
            box-sizing: content-box;
            border: 4px solid rgba(76, 175, 80, .5);
        }

        .icon-fix {
            top: 8px;
            width: 5px;
            left: 26px;
            z-index: 1;
            height: 85px;
            position: absolute;
            transform: rotate(-45deg);
            background-color: #FFFFFF;
        }
    }
}

@keyframes rotate-circle {
    0% {
        transform: rotate(-45deg);
    }
    5% {
        transform: rotate(-45deg);
    }
    12% {
        transform: rotate(-405deg);
    }
    100% {
        transform: rotate(-405deg);
    }
}

@keyframes icon-line-tip {
    0% {
        width: 0;
        left: 1px;
        top: 19px;
    }
    54% {
        width: 0;
        left: 1px;
        top: 19px;
    }
    70% {
        width: 50px;
        left: -8px;
        top: 37px;
    }
    84% {
        width: 17px;
        left: 21px;
        top: 48px;
    }
    100% {
        width: 25px;
        left: 14px;
        top: 45px;
    }
}

@keyframes icon-line-long {
    0% {
        width: 0;
        right: 46px;
        top: 54px;
    }
    65% {
        width: 0;
        right: 46px;
        top: 54px;
    }
    84% {
        width: 55px;
        right: 0px;
        top: 35px;
    }
    100% {
        width: 47px;
        right: 8px;
        top: 38px;
    }
}

</style>
