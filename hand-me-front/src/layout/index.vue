<template>
  <div class="app-wrapper">
    <div class="main-container">
      <!-- <div :class="{'fixed-header':fixedHeader}">
        <navbar />
      </div> -->
      <navbar />
      <app-main />
    </div>
  </div>
</template>
<script>
import { AppMain, Navbar } from './components'

import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar
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
