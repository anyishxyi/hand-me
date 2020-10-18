<template>
  <GoogleMapLoader
    :mapConfig="mapConfig"
    :isHome="isHome"
    
  >
    <template slot-scope="{ google, map }">
      <GoogleMapMarker
       :key="index"
        v-for="(location, index) in locations"
        :position="{ lat: location.lat, lng: location.lng }"
        :clickable="false"
        :marker="location"
        @click="openInfoWindow(location);"
        :google="google"
        :map="map"
        />
        <gmap-info-window
        v-if="selectedLocation !== null"
        :position="{ lat: selectedLocation.lat, lng: selectedLocation.lng }"
        :opened="infoBoxOpen"
        @closeclick="infoBoxOpen = false;"
        >
        <div class="infoWindow" style="width: 300px;">
          <h2 id="infoWindow-location">{{ selectedLocation.name }}</h2>
          <button @click="closeInfoWindow();">Close</button>
        </div>
      </gmap-info-window>

    </template>
  </GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from "./GoogleMapLoader";
import GoogleMapMarker from "./GoogleMapMarker";
//import gmapsInfoWindow  from 'google-maps-api-loader';
import axios from 'axios';
//import { mapState } from 'vuex'

import { mapSettings } from "@/constants/mapSettings";

export default {
  components: {
    GoogleMapLoader,
    GoogleMapMarker,
 //   gmapsInfoWindow
  },
  props: {
    isHome: {
      type: Boolean,
      default: false
    }
  },


    mounted() {
        axios.get('https://backend.hand-me.fr:8443/gpe/event/search_events?titleCriteria=&categoryCriteria&descriptionCriteria&eventMakerCriteria&pageRequested=0')
        .then(response => {
            this.markers = response.data.events;
            console.log(response)
        })
        .catch((error) => console.log(error));
    },
    
  data: function() {
  return {
    zoom: 5,
    selectedLocation: null,
    infoBoxOpen: false,
    locations: [
      {
        Id: 1,
        name: "Oslo",
        lat: 59.923043,
        lng: 10.752839
      },
    ],
    
  }

 

},
  methods: {

   openInfoWindow(location) {
      console.log(location);
      this.selectedLocation = location;
      this.infoBoxOpen = true;
    },
    closeInfoWindow() {
      this.infoBoxOpen = false;
    }

  },
 
  actions: {
    loadMarkers ({ commit }) {
      axios
        .get(' https://backend.hand-me.fr:8443/gpe/event/search_events?titleCriteria=&categoryCriteria&descriptionCriteria&eventMakerCriteria&pageRequested=0')
          .then(data => {
          //  console.log(data.data)
            let markers = data.data
            commit('SET_MARKERS', markers)
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  mutations: {
    SET_MARKERS (state, markers) {
      state.markers = markers
    }
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter
      };
    },
    
    mapCenter() {
      return this.locations[0];
    }
  }
};
</script>
<style>
.vue-map-container {
  height: 640px;
}
</style>