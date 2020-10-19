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
// import axios from 'axios';
//import { mapState } from 'vuex'

import { mapSettings } from "@/constants/mapSettings";

export default {
  components: { GoogleMapLoader, GoogleMapMarker },
  props: {
    isHome: {
      type: Boolean,
      default: false
    },
    events: {
      type: Array,
      default: () => []
    }
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
  methods: {},
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
