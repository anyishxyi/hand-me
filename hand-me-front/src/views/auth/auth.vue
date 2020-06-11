<template>
  <div class="login-page">
    <div class="register-container">
      <header>
        <router-link to="/">
          <span>DASHBOARD</span>
        </router-link>
      </header>
      <div class="wrapper">
        <h3>Créer un compte</h3>
        <p>Si vous n'avez pas encore de compte, créez-en un maintenant !</p>
        <router-link to="/register">
          <el-button type="secondary" class="cta" round>
           S'inscrire
          </el-button>
        </router-link>
      </div>
    </div>
    <div class="login-container">
      <div class="wrapper">
        <el-form ref="loginForm" :model="loginForm" class="login-form" autocomplete="on" label-position="left">
          <div class="title-container">
            <h3 class="title">
              Connexion
            </h3>
          </div>
          <div>
            <el-form-item prop="email">
              <el-input
                ref="email"
                v-model="loginForm.email"
                :placeholder="email"
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
                v-model="loginForm.password"
                :type="passwordType"
                :placeholder="password"
                name="password"
                tabindex="2"
                autocomplete="on"
                @keyup.enter.native="handleLogin"
              />
            </el-form-item>

            <el-button :loading="loading" class="cta" type="primary" round @click.native.prevent="handleLogin">
              Se connecter
            </el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      passwordType: 'password',
      loading: false,
      authedOrga: {},
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
      email: 'email',
      password: 'password'
    }
  },
  async created() {
    this.loginForm.email = await this.$localforage.getItem('login')
  },
  methods: {
    handleLogin() {

    }
  }
}
</script>

<style lang="scss">
  .login-page {
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
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .el-button.cta {
      width: 100%;
      font-size: 1.1em;
      line-height: 1.5em;
    }
  }
</style>

<style lang="scss" scoped>
  .login-page {
    display: flex;
    .register-container, .login-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      &.orga-list {
        align-items: flex-start;
      }
      .wrapper {
        padding: 10px 25px;
        text-align: center;
        margin: 0 auto;
      }
    }
    .register-container {
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
    .login-container {
      width: calc(100%*(2/3));
      overflow: scroll;
      .wrapper {
        /*width: calc(100%/3);*/
        max-width: 800px;
        min-width: 400px;
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
        .chooseOrga-btn {
          margin-bottom: 10px;
          &.central {
            display: block;
            margin: 10px auto 20px auto;
          }
        }
        .el-button.cta {
          margin-bottom: 30px;
        }
      }
    }
  }
</style>
