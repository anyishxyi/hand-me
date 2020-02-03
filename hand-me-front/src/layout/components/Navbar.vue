<template>
  <div class="navbar">
    <!-- <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" /> -->
    <div class="right-menu">
      <!-- <search id="header-search" class="right-menu-item" /> -->
      <!-- <lang-select class="right-menu-item lang hover-effect" /> -->
      <!-- <span class="right-menu-item hover-effect"><svg-icon icon-class="logout" @click="openLogout" /></!-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  async created() {
    await this.init()
  },
  methods: {
    init() {
      // eslint-disable-next-line no-console
      console.log('navbar')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #33333D;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .change-orga {
    line-height: 60px;
    color: #fff;
    cursor: pointer;

    .el-input__inner {
      background: transparent;
    }
  }

  .hamburger-container {
    line-height: 60px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

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
