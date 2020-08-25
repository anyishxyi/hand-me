import colorPalette from "@/constants/ColorPalette";

const {
  WATER,
  // TRANSIT,
  // ROAD_LOCAL,
  ROAD_ARTERIAL_STROKE,
  ROAD_ARTERIAL_FILL,
  ROAD_HIGHWAY_STROKE,
  ROAD_HIGHWAY_FILL,
  // POI,
  LANDSCAPE,
  // ADMIN_STROKE,
  ADMIN_FILL,
  TEXT_STROKE,
  TEXT_FILL,
  COLOR_POINT,
  COLOR_SELECTED_POINT,
  COLOR_POINT_FILL
} = colorPalette;

const POINT_MARKER_ICON_CONFIG = {
  path: "M 0, 0 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",
  strokeOpacity: 0.7,
  strokeWeight: 4,
  strokeColor: COLOR_POINT,
  fillColor: COLOR_SELECTED_POINT,
  fillOpacity: 0.7,
  scale: 1
};

const LINE_SYMBOL_CONFIG = {
  path: "M 0,-2 0,2",
  strokeOpacity: 1,
  strokeWeight: 2,
  scale: 1
};

const LINE_PATH_CONFIG = {
  clickable: false,
  geodesic: false,
  strokeOpacity: 0,
  strokeColor: COLOR_POINT_FILL,
  icons: [
    {
      icon: LINE_SYMBOL_CONFIG,
      repeat: "10px"
    }
  ]
};

const mapSettings = {
  clickableIcons: true,
  streetViewControl: true,
  panControlOptions: false,
  gestureHandling: "cooperative",
  backgroundColor: LANDSCAPE,
  mapTypeControl: false,
  zoomControlOptions: {
    style: "SMALL"
  },
  zoom: 8,
  minZoom: 3,
  maxZoom: 12,
  styles: [
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": TEXT_FILL
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": TEXT_STROKE
        },
        {
          "lightness": 13
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      // "stylers": [{ visibility: "off" }]
      "stylers": [
          {
            "color": ADMIN_FILL
          }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{ visibility: "off" }]
      // "stylers": [
      //   {
      // //     "color": ADMIN_STROKE
      //   },
      //   {
      //     "lightness": 14
      //   },
      //   {
      //     "weight": 1.4
      //   }
      // ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "color": LANDSCAPE
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{ visibility: "off" }]
      // "stylers": [
      //   {
      //     "color": POI
      //   },
      //   {
      //     "lightness": 5
      //   }
      // ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": ROAD_HIGHWAY_FILL
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": ROAD_HIGHWAY_STROKE
        },
        {
          "lightness": 25
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": ROAD_ARTERIAL_FILL
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": ROAD_ARTERIAL_STROKE
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{ visibility: "off" }]
      // "stylers": [
      //   {
      //     "color": ROAD_LOCAL
      //   }
      // ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{ visibility: "off" }]
      // "stylers": [
      //   {
      //     "color": TRANSIT
      //   }
      // ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": WATER
        }
      ]
    }
  ]
};

export { mapSettings, LINE_PATH_CONFIG, POINT_MARKER_ICON_CONFIG };
