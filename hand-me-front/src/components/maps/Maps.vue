<template>
  <GoogleMapLoader
    :mapConfig="mapConfig"
    :isHome="isHome"

  >
    <template slot-scope="{ google, map }">
      <GoogleMapMarker
        v-for="marker in markers"
        :position="{ lat: marker.lat, lng: marker.lng }"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
        />

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
     options: {
        position: { lat: 48.8534, lng: 2.3488 },
     },
    markers:[
       {
          "eventId": 0,
          "lat": 48.8534,
          "lng": 2.3488
      },
    ],
    
  }

 

},
  methods: {

  },
  /*  
  created() {
     axios
        .get(' https://backend.hand-me.fr:8443/gpe/event/search_events?titleCriteria=&categoryCriteria&descriptionCriteria&eventMakerCriteria&pageRequested=0',{})
         .then((response) => {
            this.markers = response.data.events;
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          }),

  
    data() {
    return {
      markers: [/*
        
      {
          "id": 2,
          "lat": 48.8534,
          "lng": 2.3488
      },
        
        {
        "id": 7,
            "eventTitle": "test geocode",
            "eventDescription": "test of create an event",
            "eventCreateDate": "2020-10-15T01:35:32.000+0000",
            "eventUpdateDate": "2020-10-15T01:35:32.000+0000",
            "eventPlace": "Paris place de la république",
            "eventDate": "2020-12-11T21:29:51.000+0000",
            "eventIsDeleted": false,
            "community": {
                "communityId": 7,
                "communityAdmin": "localhost@yopmail.com",
                "communityCreateDate": "2020-10-15T01:35:32.000+0000",
                "communityUpdateDate": "2020-10-15T01:35:32.000+0000",
                "communityIsDeleted": false
            },
            "category": {
                "categoryId": 1,
                "categoryDescription": "test de creation de categorie",
                "categoryCreateDate": "2020-08-19T19:58:03.000+0000",
                "categoryUpdateDate": "2020-08-19T19:58:03.000+0000",
                "categoryisDeleted": false,
                "categoryName": "test catégory"
            },
            "categoryName": null,
            "eventMakerEmail": "localhost@yopmail.com",
            "lng": 2.3640304,
            "lat": 48.8676635,
            "picture": null,
            "participants": [],
            "organizationsAsParticipants": []
        },
        {
            "eventId": 8,
            "eventTitle": "test",
            "eventDescription": "test",
            "eventCreateDate": "2020-10-15T22:19:01.000+0000",
            "eventUpdateDate": "2020-10-15T22:19:01.000+0000",
            "eventPlace": "2 rue herminie prod'homme 35000 Rennes",
            "eventDate": "2020-10-29T23:00:00.000+0000",
            "eventIsDeleted": false,
            "community": {
                "communityId": 8,
                "communityAdmin": "test@creation.fr",
                "communityCreateDate": "2020-10-15T22:19:01.000+0000",
                "communityUpdateDate": "2020-10-15T22:19:01.000+0000",
                "communityIsDeleted": false
            },
            "category": {
                "categoryId": 1,
                "categoryDescription": "test de creation de categorie",
                "categoryCreateDate": "2020-08-19T19:58:03.000+0000",
                "categoryUpdateDate": "2020-08-19T19:58:03.000+0000",
                "categoryisDeleted": false,
                "categoryName": "test catégory"
            },
            "categoryName": null,
            "eventMakerEmail": "test@creation.fr",
            "lng": -1.6952588,
            "lat": 48.1061178,
            "picture": null,
            "participants": [],
            "organizationsAsParticipants": []
        }
      ],
      
    };
    
  },

/*
  state: {
    markers: []
  },*/
  actions: {
    loadMarkers ({ commit }) {
      axios
        .get(' https://backend.hand-me.fr:8443/gpe/event/search_events?titleCriteria=&categoryCriteria&descriptionCriteria&eventMakerCriteria&pageRequested=0')
          .then(data => {
            console.log(data.data)
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
      return this.markers[0];
    }
  }
};
</script>
