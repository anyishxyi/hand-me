<template>
  <div class="navbar">
  <!-- <div class="navbar" :style="{ 'background': transparent }"> -->
    <!-- <svg-icon icon-class="handme" /> -->
    <div class="right-menu">
      <el-button type="text" @click="onhome">
        <router-link :to="{path: '/home'}">
          Accueil
        </router-link>
      </el-button>
      <el-button type="text" @click="onEvents">
        <router-link :to="{path: '/events'}">
          Evenements
        </router-link>
      </el-button>
      <el-button type="text">
        <router-link :to="{path: '/register'}">
          Inscription
        </router-link>
      </el-button>
      <el-button type="primary">
        <router-link :to="{path: '/login'}">
          Connexion
        </router-link>
      </el-button>
    </div>
  </div>
</template>

<script>
const OFFSET = 60

export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    }
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  async created() {
    await this.init()
  },
  methods: {
    init() {
      // eslint-disable-next-line no-console
      console.log('navbar')
    },
    onScroll () {
      if (window.pageYOffset < 0) {
        console.log('<0')
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
    openLogout() {
    },
    onLogin() {

    },
    onEvents() {

    },
    onSignUp() {

    },
    onhome() {

    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  // background: transparent !important;
  // box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .right-menu {
    float: right;
    height: 100%;
    line-height: 60px;
    margin-right: 40px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 1.1em;
      color: white;
      vertical-align: text-bottom;

      &.lang {
        font-size: 1.7em;
      }

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
