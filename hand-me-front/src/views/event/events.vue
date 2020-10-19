<template>
  <div class="events-container">
    <div class="container">
      <div class="left">
        <div class="heading">
          <h1>RECHERCHER UN EVENEMENT</h1>
          <p> Trouver les évènements qui conviennent dans votre ville</p>
        </div>
        <div class="events_filter">
          <Places
            class="localisation"
            id="address"
            classname="form-control"
            type="(cities)"
            placeholder="Entrez le nom de votre ville"
            @change="getPlace"
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
          <ListEvents :events="events" :isHome="false" />
        </div>
      </div>
      <div class="right">
        <Maps :isHome="false" />
      </div>
    </div>
  </div>
</template>

<script>
import Maps from '@/components/maps/Maps'
import Places from '@/components/places/Places'
import ListEvents from '@/components/Event/ListEvents'
import apiService from '@/services/apiService'

export default {
  name: "EVENTSPAGE",
  components: { Places, Maps, ListEvents },
  data(){
    return {
      dates: '',
      category: '',
      address:{},
      events: [],
      city: '',
      filters: {
        placeCriteria: '',
        titleCriteria: '',
        categoryCriteria: '',
        descriptionCriteria: '',
        eventMakerCriteria: '',
        dateFrom: null,
        dateTo: null,
        pageRequested: 0
      }
    }
  },
  async mounted() {
    await this.init()
  },
  methods: {
    async init() {
      const res = await apiService.getEvents(this.filters)
                                  .catch(error => {
                                    this.$notify.error({title: 'Error', message: 'Erreur lors de la connexion au serveur'});
                                    console.error(error)
                                    return
                                  })
      if(!res || !res.data || res.status !== 200) return

      this.events = res.data.events
      // console.log('this.events')
      // console.log(this.events)
    },
    getAddress(address) {
      this.address = address;
      console.log('this.address')
      console.log(this.address)
    },
    getPlace(place) {
      // console.log(place)
      if(!place) return
      this.filters.placeCriteria = place.split(',')[0]
      console.log('ville', this.filters.placeCriteria)
      this.init()
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
  height: 705px;

  .left {
    text-align:justify;
    float:left;
    width: 53%;
    margin-top: 20px;
    margin-left: 25px;
    margin-right: 0px;
    margin-bottom: 0px;

    .heading {
      font-size: 14px;
      color: #7E829B;
      letter-spacing: 0.14px;
      margin-right: 25px;
    }

    .events_filter {
      margin-right: 25px;
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

    .events_list {
      height: 500px;;
      overflow: scroll;
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
