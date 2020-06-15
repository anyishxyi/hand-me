<template>
  <div class="events-container">
    <div class="container">
      <div class="left">
        <div class="heading">
          <h1>RECHERCHER UN EVENEMENT</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lorem ut sapien volutpat, et fermentum mauris rutrum. Nulla metus lectus, bibendum eget eros sit amet, iaculis sagittis mauris. Fusce sed euismod ligula. Morbi pharetra viverra consectetur. Praesent egestas sollicitudin justo aliquet suscipit. Sed ut augue nec purus varius</p>
        </div>
        <div class="events_filter">
          <Places
            class="localisation"
            id="from_address"
            classname="form-control"
            placeholder="Entrez le nom de votre ville"
            :placechanged="getAddress"
            :error="handleError"
          />
          <el-date-picker
            class="dates"
            v-model="dates"
            type="daterange"
            range-separator="A"
            start-placeholder="Date départ"
            end-placeholder="Date fin"
          />
        </div>
        <div class="events_info">
          {{events.length}} évènements
        </div>
        <div class="events_list clear">
          <ListEvents :events="events" />
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
import ListEvents from '@/components/event/ListEvents'

export default {
  name: "EVENTSPAGE",
  components: { Places, Maps, ListEvents },
  data(){
    return {
      dates: '',
      localisation: '',
      category: '',
      from_address:{},
      to_address:{},
      events: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.events = [
        {
          id: 0,
          title: 'aaaaa'
        },
        {
          id: 1,
          title: 'aaaaa'
        },
        {
          id: 2,
          title: 'aaaaa'
        },
        {
          id: 3,
          title: 'aaaaa'
        },
        {
          id: 4,
          title: 'aaaaa'
        },
      ]
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
}

.container {
  width:100%;
  margin-top:60px;

  .left {
    text-align:justify;
    float:left;
    width:45%;
    margin: 45px;

    .heading {
      font-size: 14px;
      color: #7E829B;
      letter-spacing: 0.14px;
    }

    .events_filter {
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

    .events_info {
      margin-top: 80px;
      margin-bottom: 10px;
      font-size: 18px;
      color: #444040;
      letter-spacing: 0.18px;
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
