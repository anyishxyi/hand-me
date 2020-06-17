"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("./styles/element-variables.scss");

var _fr = _interopRequireDefault(require("element-ui/lib/locale/lang/fr"));

var _vueBrowserGeolocation = _interopRequireDefault(require("vue-browser-geolocation"));

var _localforage = _interopRequireDefault(require("localforage"));

require("@/styles/index.scss");

var _store = _interopRequireDefault(require("./store"));

var _router = _interopRequireDefault(require("./router"));

require("./icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import x5GMaps from 'x5-gmaps'
// global css
var moment = require('moment');

require('moment/locale/fr');

_localforage["default"].config({
  driver: _localforage["default"].IndexedDB,
  name: 'Hand Me',
  version: 1.0,
  storeName: 'HandMe'
});

_vue["default"].config.productionTip = false;
_vue["default"].prototype.handleEvent = new _vue["default"]();
_vue["default"].prototype.$localforage = _localforage["default"]; // Vue.use(x5GMaps, 'AIzaSyAe1WPBLhSasHA1CvdEpkbOqqGOTB4d3pM')

_vue["default"].use(_vueBrowserGeolocation["default"]);

_vue["default"].use(_elementUi["default"], {
  locale: _fr["default"]
});

_vue["default"].use(require('vue-moment'), {
  moment: moment
});

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  store: _store["default"],
  router: _router["default"]
}).$mount('#app');