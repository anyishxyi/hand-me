<template>
  <div class="app-wrapper">
    <!-- <div :class="{'fixed-header':fixedHeader}">
      <navbar />
    </div> -->
    <navbar />
    <app-main />
    <footer />
  </div>
</template>
<script>
// import { AppMain, Navbar } from './components'
/* eslint-disable vue/no-unused-components */
import { AppMain, Navbar, Footer } from './components'

import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Footer
  },
  computed: {
    ...mapState({
      fixedHeader: state => state.settings.fixedHeader
    })
  }
}

</script>

<style lang="scss" scoped>
  .app-wrapper {
    // @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
