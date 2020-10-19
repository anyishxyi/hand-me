<script>
//import { POINT_MARKER_ICON_CONFIG } from "@/constants/mapSettings";

export default {
  props: {
    google: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    },
    marker: {
      type: Object,
      required: true
    }
  },
  mounted() {
    const { Marker } = this.google.maps;

    new Marker({
      position: this.marker,
      marker: this.marker,
      map: this.map,
      icon:{ url: require('../../icons/png/pin.png')}
    });
  },
  // eslint-disable-next-line vue/require-render-return
  render() {}
};
</script>
