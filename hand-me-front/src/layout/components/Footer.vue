<template>
  <div class="footer">
    test
  </div>
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {}
  },
  async created() {
    await this.init()
  },
  methods: {
    init() {
      console.log('footer')
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #232020;
}
</style>
