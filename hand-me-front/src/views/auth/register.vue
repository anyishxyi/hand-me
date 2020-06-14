<template>
  <div v-if="isRegister" class="register-page">
    <div class="register-container">
      <div class="wrapper">
        <el-form v-if="!success" ref="registerForm" :model="registerForm" class="register-form" autocomplete="on" label-position="left">
          <div class="title-container">
            <h3 class="title">
              Créer un compte
            </h3>
          </div>

          <el-form-item prop="email">
            <el-input
              ref="email"
              v-model="email"
              placeholder="email"
              name="email"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              ref="password"
              :key="passwordType"
              v-model="password"
              type="password"
              placeholder="password"
              name="password"
              tabindex="2"
              autocomplete="on"
            />
          </el-form-item>

            <el-form-item prop="name">
            <el-input
              ref="name"
              v-model="name"
              placeholder="name"
              name="name"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
            </el-form-item>

            <el-form-item prop="surname">
            <el-input
              ref="surname"
              v-model="surname"
              placeholder="surname"
              name="surname"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
            </el-form-item>

            <el-form-item prop="phone">
            <el-input
              ref="phone"
              v-model="phone"
              placeholder="phone"
              name="phone"
              type="tel"
              tabindex="1"
              autocomplete="on"
            />
            </el-form-item>

            <el-form-item prop="location">
            <el-input
              ref="location"
              v-model="location"
              placeholder="location"
              name="location"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
            
          </el-form-item>
          <el-button :loading="loading" type="primary" class="btn" style="width:100%;margin-bottom:30px;" round @click.native.prevent="register">
            Créer votre compte
          </el-button>
        </el-form>
      </div>
    </div>
    <div class="login-container">
      <header>
        <router-link to="/">
          <span>DASHBOARD</span>
        </router-link>
      </header>
      <div class="wrapper">
        <h3>Connexion</h3>
        <p>Si vous avez déjà un comptez, connectez-vous maintenant !</p>
        <router-link to="/login">
          <el-button type="secondary" class="btn" round>
            Se connecter
          </el-button>
        </router-link>
      </div>
    </div>
  </div>
  <div v-else class="onboarding">
	<div class="onboard">
		<div v-if="step">
			<h1>Bienvenue</h1>
			<p>Repondez à ces quelques questions afin de continuer.</p>
			<p><strong>Qui êtes-vous ?</strong></p>
			<p><el-button type="primary" @click="registerForm.society = true" class="btn" plain>Je suis une société(compte emetteur)</el-button></p>
			<p><el-button type="primary" @click="registerForm.society = false" class="btn" plain>Je suis un associé / investisseur / salarié (compte receveur)</el-button></p>
			<div class="buttons">
				<el-button @click="backToRegister" type="text">retour</el-button>
				<el-button @click="handleCheckSociety" class="btn btn-validate" type="danger">Suivant</el-button>
			</div>
		</div>
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
	</div>
	<el-image
		class="picture"
		:src="picture"
		:fit="fit">
	</el-image>
  </div>
</template>

<script>
import authService from "../../services/auth";
export default {
  name: 'Register',
  data() {
    return {
        email: '',
        password: '',
        name: '',
        surname: '',
        phone: "",
        location: "",
      passwordType: 'password',
      loading: false,
      success: false,
      isCodeDownloaded: false,
      confirmPass: 'Confirmer le mot de passe',
      isRegister: true,
      step: true,
      step1: false,
      step2: false,
      fit: 'fill',
      // picture: require('@/assets/images/png/onboarding.png')
    }
  },
  methods: {

    register(){
      authService.registerParticular(this.name,
        this.surname,
        this.email,
        this.password,
        this.telNumber,
        this.location);
    },
    handleRegister() {
      if(!this.registerForm || !this.registerForm.email) return
      if(this.registerForm.password === this.registerForm.confirmPassword) {
        this.isRegister = false
        this.step = true
      }
    },
    handleCheckSociety() {
      this.step = false
      this.step1 = true
      this.step2 = false
	},
	backToCheckSociety() {
      this.step = true
      this.step1 = false
      this.step2 = false
	},
	handleCheckSiret() {
      if(this.handleCheckSiret.siret !== 0) {
        this.step = false
        this.step1 = false
        this.step2 = true
      }
	},
	backToCheckSiret() {
      this.step = false
      this.step1 = true
      this.step2 = false
	},
    backToRegister() {
      this.isRegister = true
      this.step = false
      this.step1 = false
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
    onValueAction(value) {
		console.log(value)
		if(!value || !this.registerForm.societyCapital) return
		this.registerForm.societyValueAction = value
		this.registerForm.societyNumberAction = this.registerForm.societyCapital / this.registerForm.societyValueAction
	}
  }
}
</script>

<style lang="scss">
  .register-page {
    .svg-container {
      margin-left: 10px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0;
        -webkit-appearance: none;
        border-radius: 0;
        padding: 12px 5px 12px 15px;
        height: 47px;
      }
      .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        cursor: pointer;
        user-select: none;
      }
    }
    .el-button {
      width: 100%;
      font-size: 1.1em;
      line-height: 1.5em;
    }
    .el-form-item:not(.registerType):not(.typology) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style lang="scss" scoped>
  .register-page {
    display: flex;
    .login-container, .register-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      .wrapper {
        padding: 10px 25px;
        text-align: center;
        margin: 0 auto;
      }
    }
    .login-container {
      width: calc(100%/3);
      background-color: #1f2d3d;
      position: relative;
      header {
        position: absolute;
        top: 0;
        left: 0; right: 0;
        text-align: center;
        margin: 0 auto;
        .router-link-active:hover {
          span {
            color: tomato;
          }
        }
        .svg-icon {
          height: auto;
          width: calc(100%/3);
        }
        span {
          font-size: 1.5em;
          letter-spacing: 0.3em;
          display: block;
          margin-top: -40px;
          color: white;
        }
      }
      .wrapper {
        width: calc(100%*(2/3));
        min-width: 250px;
        color: #fff;
        h3 {
          font-size: 2.5em;
        }
      }
    }
    .register-container {
      width: calc(100%*(2/3));
      .wrapper {
        width: calc(100%/3);
        min-width: 400px;
        text-align: left;
        .success {
          .title-container {
            text-align: center;
            .svg-icon {
              display: block;
              margin: 0 auto 10px auto;
            }
          }
          .stepChecked {
            color: #909399;
          }
        }
        .title-container {
          position: relative;
          h3 {
            font-size: 2.5em;
          }
          .set-language {
            color: #000;
            position: absolute;
            top: -20px;
            right: -35px;
            font-size: 18px;
            cursor: pointer;
          }
        }
        .registerType {
          display: flex;
          flex-direction: column;
          p {
            margin: auto;
          }
        }
        .el-button.cta {
          margin-bottom: 30px;
        }
      }
    }
  }

.onboarding {
	display: flex;
	.onboard {
		display: flex;
		height: 100vh;
		width: calc(100% * (2/3));
        align-items: center;
        justify-content: center;
	}
	.picture {
		display: flex;
		height: 100vh;
		width: calc(100%/3);
	}
}

.btn-validate {
	float: right;
    padding: 15px 40px;
}

.buttons { margin-top: 50px; }

.inputs {
	display: flex;
	margin-top: 10px;
}

.input-left{
	margin-left: 10px;
}

.first-input {
	display: flex;
	margin-top: 50px;
}

.marginInput { margin-top: 50px; }
</style>
