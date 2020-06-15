<template>
  <el-dialog
    :visible.sync="modalOpened"
    :width="width"
    :show-close="false"
    custom-class="general-modal"
    @close="modalClose"
  >
    <svg-icon class="close-modal-icon" icon-class="close" @click="modalOpened = false" />
    hello
  </el-dialog>
</template>

<script>
export default {
  props: {
    modalVisible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '33%'
    },
    event: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      modalOpened: false
    }
  },
  watch: {
    modalVisible: function(newVal) {
      this.modalOpened = newVal
    }
  },
  methods: {
    modalClose() {
      this.$emit('eventModalClose')
    },
  }
}
</script>

<style>

</style>
