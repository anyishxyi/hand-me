<template>
  <div class="events-container">
    <div class="navbar navbar-default shadow">
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
        <el-button type="primary">
          <router-link :to="{path: '/login'}">
            Connexion
          </router-link>
        </el-button>
      </div>
    </div>
    <div class="container">
      <div class="box">
        <div class="box-row">
          <div class="box-cell left">
            <div class="events_filter">

            </div>
            <div class="events_list">

            </div>
          </div>
          <div class="box-cell right">
            <Maps />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Maps from '@/components/maps/Maps'

export default {
  components: {
    Maps
  },
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

.events-container {
  width:100%;
}

.container .box {
  width:100%;
  height:100%;
  margin-top:60px;
  display:table;
}
.container .box .box-row {
  display:table-row;
}
.container .box .box-cell {
  display:table-cell;
  padding:10px;
}
.container .box .box-cell.left {
  color:white;
  text-align:justify;
  width:40%;
}
.container .box .box-cell.right {
  text-align:justify
}
</style>
