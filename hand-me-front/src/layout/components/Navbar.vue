<template>
  <div class="navbar">
    <div class="right-menu">
      <el-button type="text">
        <router-link :to="{path: '/home'}">
          Accueil
        </router-link>
      </el-button>
      <el-button type="text">
        <router-link :to="{path: '/events'}">
          Evenements
        </router-link>
      </el-button>
      <el-button type="text">
        <router-link :to="{path: '/register'}">
          Inscription
        </router-link>
      </el-button>
      <el-button type="primary" class="btn_connexion">
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
