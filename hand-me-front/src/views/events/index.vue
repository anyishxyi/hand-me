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
      <div class="left">
        <div class="events_filter">

        </div>
        <div class="events_list">

        </div>
      </div>
      <div class="right">
        <Maps />
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
  display: flex;
  flex-flow: column;
  height: 100%;
}

.container {
  width:100%;
  margin-top:60px;
  display:table;

  .left {
    text-align:justify;
    float:left;
    width:40%;
  }
  .right {
    text-align:justify;
    float:right;
    height: 700px;
    width: 60%;
  }
}
</style>
