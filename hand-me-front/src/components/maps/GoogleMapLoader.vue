<template>
  <div>
    <div class="google-map" v-bind:class="{ home: isHome, no_home: !isHome }" ref="googleMap" />
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
        :google="google"
        :map="map"
      />
    </template>
  </div>
</template>

<script>
// import GoogleMapsApiLoader from "google-maps-api-loader";
export default {
  props: {
    mapConfig: Object,
    isHome: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      google: null,
      map: null
    };
  },
  async mounted() {
    if(!this.map) {
      this.initializeMap();
    }
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;
      // eslint-disable-next-line no-undef
      this.map = new google.maps.Map(mapContainer, this.mapConfig);
    }
  }
};
</script>

<style scoped>
.google-map {
  width: 100%;
  min-height: 100%;
}
.home {
  height: 500px;
}
.no_home {
  height: 730px;
}
</style>
