<template>
  <span class="interval-selection shadow-button">
    <el-dropdown @command="changeTimeframe">
      <span class="el-dropdown-link">
        <span v-if="newTimeframe === 7">1 Semaine</span>
        <span v-if="newTimeframe === 30">1 Mois</span>
        <span v-if="newTimeframe === 365">1 An</span>
        <!-- <span v-if="newTimeframe === 0">Historique</span> -->
        <i class="el-icon-arrow-down el-icon--right" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :command="7" :disabled="newTimeframe === 7">1 Semaine</el-dropdown-item>
        <el-dropdown-item :command="30" :disabled="newTimeframe === 30">1 mois</el-dropdown-item>
        <el-dropdown-item :command="365" :disabled="newTimeframe === 365">1 An</el-dropdown-item>
        <!-- <el-dropdown-item :command="0" :disabled="newTimeframe === 0">Historique</el-dropdown-item> -->
      </el-dropdown-menu>
    </el-dropdown>
  </span>
</template>

<script>
export default {
  name: 'ChangeTimeframe',
  props: {
    timeframe: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      newTimeframe: 0
    }
  },
  created() {
    this.newTimeframe = this.timeframe
  },
  methods: {
    changeTimeframe(newTimeframe) {
      this.$emit('eventChangeTimeframe', newTimeframe)
      this.newTimeframe = newTimeframe
    }
  }
}
</script>

<style lang="scss" scoped>
  .interval-selection {
    display: inline-block;
    height: 40px;
    margin-right: 15px;
    min-width: 100px;
    background: white;
    .el-dropdown {
      padding: 0px 10px;
      font-size: 18px;
      color: #424242;
      .el-dropdown-link {
        float: left;
      }
      .el-icon-arrow-down.el-icon--right {
        font-weight: bold;
        font-size: 14px;
        margin-left: 10px;
      }
    }
  }
</style>
