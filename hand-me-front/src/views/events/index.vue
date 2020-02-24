<template>
  <div class="events-page">
    hello im events page
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      console.log('events page')
    }
  }
}
</script>

<style lang="scss" scoped>
.events-page {

}
</style>
