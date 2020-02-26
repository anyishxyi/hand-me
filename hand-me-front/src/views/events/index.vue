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
          <div class="local_cat">
            <el-input
              class="localisation"
              placeholder="Type something"
              prefix-icon="el-icon-search"
              v-model="localisation">
            </el-input>
            <el-input
              class="category"
              placeholder="Type something"
              prefix-icon="el-icon-search"
              v-model="category">
            </el-input>
          </div>
          <div class="block clear">
            <el-date-picker
              class="dates"
              v-model="dates"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </div>
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
      dates: '',
      localisation: '',
      category: ''
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
  // display:table;

  .left {
    text-align:justify;
    float:left;
    width:40%;

    .events_filter {

      .local_cat {
        .localisation {
          float:left;
          width:50%;
        }
        .category {
          float: right;
          width:50%;
        }
      }

      .dates {
        width: 100%;
      }
    }

    .events_list {

    }
  }
  .right {
    text-align:justify;
    float:right;
    height: 700px;
    width: 60%;
  }
}

.clear {
  clear:both;
}
</style>
