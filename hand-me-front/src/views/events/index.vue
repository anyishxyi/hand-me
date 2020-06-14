<template>
  <div class="events-container">
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
