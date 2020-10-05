<template>
  <GeneralModal
    :modal-visible="visibility"
    width="600px"
    @eventModalClose="beforeClose"
  >
    <div class="header">

    </div>
    <div class="content">
      {{}}
    </div>
    <div class="actions">

    </div>
  </GeneralModal>
</template>

<script>
import GeneralModal from '@/components/GeneralModal'

export default {
  name: 'ShowEvent',
  components: { GeneralModal },
  props: {
    visibility: {
      type: Boolean,
      default: false
    },
    event: {
      type: Object,
      required: true
    },
  },
  data() {
    return {}
  },
  methods: {
    beforeClose(newVal) {
      this.$emit('eventToggleDisplayEvent', newVal)
    },
    confirm() {
      this.$emit('confirm')
    },
  }
}
</script>

<style lang="scss" scoped>
.general-modal {
  .close-modal-icon {
    position: absolute;
    right: -19px;
    top: -17px;
    font-size: 38px;
    cursor: pointer;
  }
  .subfooter {
    position: absolute;
    margin-top: 30px;
    width: 100%;
    margin-left: -20px;
    .subfooter-button {
      display: block;
      background: #3574e4;
      width: 100%;
      margin-top: 15px;
      padding: 15px;
      color: white;
      text-align: center;
      border-radius: 5px;
      font-size: 25px;
      font-weight: 600;
      box-shadow: 0px 1px 4px 0px #5d5d5d;
      &:hover {
        cursor: pointer;
        box-shadow: 0px 1px 4px 0px #676767;
        background: #4082f7;
      }
    }
  }
}
</style>
