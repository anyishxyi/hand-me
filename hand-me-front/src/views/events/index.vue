<template>
  <div class="events-container">
    <div class="navbar navbar-default nav-color shadow">
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
        <div class="heading">
          <h1>RECHERCHER UN EVENEMENT</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lorem ut sapien volutpat, et fermentum mauris rutrum. Nulla metus lectus, bibendum eget eros sit amet, iaculis sagittis mauris. Fusce sed euismod ligula. Morbi pharetra viverra consectetur. Praesent egestas sollicitudin justo aliquet suscipit. Sed ut augue nec purus varius</p>
        </div>
        <div class="events_filter">
          <div class="local_cat">
            <Places
              class="localisation"
              id="from_address"
              classname="form-control"
              placeholder="Entrez le nom de votre ville"
              :placechanged="getAddress"
              :error="handleError"
            >
            </Places>
            <el-date-picker
              class="dates"
              v-model="dates"
              type="daterange"
              range-separator="A"
              start-placeholder="Date départ"
              end-placeholder="Date fin">
            </el-date-picker>
          </div>
        </div>
        <div class="events_list clear">

        </div>
      </div>
      <div class="right">
        <Maps />
      </div>
    </div>
    <!-- <div class="footer footer-fixed">
      <div class="left">
        <el-image :src="twitter" class="flag-size" lazy />
        <el-image :src="facebook" class="flag-size icon-right" lazy />
      </div>
      <div class="right"><el-image :src="france" class="flag-size" lazy /> Made in France, Paris copyright hand-me.fr 2020</div>
    </div> -->
  </div>
</template>

<script>
import Maps from '@/components/maps/Maps'
import Places from '@/components/places/Places'

export default {
  name: "EVENTSPAGE",
  components: { Places, Maps },
  data(){
    return {
      dates: '',
      localisation: '',
      category: '',
      from_address:{},
      to_address:{}
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      console.log('events page')
    },
    getAddress(from_address) {
      this.address = from_address;
    },
    handleError(error){
      alert(error)
    }
  }
}
</script>

<style lang="scss" scoped>

.navbar {
  height: 60px;
  border: none;
  z-index: 100;
  transition: background-color 1s ease 0s;
  top: 0;
  position: fixed;
  width: 100%;
  background-color: #222020;

  .right-menu {
    float: right;
    height: 100%;
    line-height: 60px;
    margin-right: 40px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 1.1em;
      vertical-align: text-bottom;

      &.lang {
        font-size: 1.7em;
      }

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }

    .btn_connexion {
      color: blue($color: #000000);
    }
  }
}

.events-container {
  width:100%;
  display: flex;
  flex-flow: column;
  height: 100%;
  color: #333333;
  .nav-color {

  }
}

.container {
  width:100%;
  margin-top:60px;
  // display:table;

  .left {
    text-align:justify;
    float:left;
    width:45%;
    margin: 45px;

    .events_filter {

      .local_cat {
        .localisation {
          float:left;
          width:50%;
        }
        .dates {
          float: right;
          width: 47%;
          margin-left: 10px;
        }
      }
    }

    .events_list {

    }
  }
  .right {
    text-align:justify;
    float:right;
    height: 700px;
    width: 45%;
  }
}

.footer-fixed {
   bottom: 0;
   position: fixed;
}

.clear {
  clear:both;
}

</style>
