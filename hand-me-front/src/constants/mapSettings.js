import colorPalette from "@/constants/ColorPalette";

const {
 // WATER,
  // TRANSIT,
  // ROAD_LOCAL,
 // ROAD_ARTERIAL_STROKE,
 // ROAD_ARTERIAL_FILL,
 // ROAD_HIGHWAY_STROKE,
  //ROAD_HIGHWAY_FILL,
  // POI,
  LANDSCAPE,
  // ADMIN_STROKE,
  //ADMIN_FILL,
  //TEXT_STROKE,
  //TEXT_FILL,
  COLOR_POINT,
  COLOR_SELECTED_POINT,
  COLOR_POINT_FILL
} = colorPalette;

const POINT_MARKER_ICON_CONFIG = {
  path: "M 0, 0 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",
  strokeOpacity: 17,
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
  zoom: 11,
  minZoom: 3,
  maxZoom: 25,
  styles: [
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d6e2e6"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#cfd4d5"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7492a8"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dde2e3"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#cfd4d5"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dde2e3"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7492a8"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dde2e3"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#588ca4"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a9de83"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#bae6a1"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c6e8b3"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#bae6a1"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#41626b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": -45
            },
            {
                "lightness": 10
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c1d1d6"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#a6b5bb"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#9fb6bd"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": -70
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b4cbd4"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#588ca4"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#008cb5"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": -5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a6cbe3"
            }
        ]
    }
]
};

export { mapSettings, LINE_PATH_CONFIG, POINT_MARKER_ICON_CONFIG };
