import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
import './styles/element-variables.scss'
import locale from 'element-ui/lib/locale/lang/fr'
import VueGeolocation from 'vue-browser-geolocation';
import LocalForage from 'localforage'

import '@/styles/index.scss' // global css

import store from './store'
import router from './router'
import './icons'

const moment = require('moment')
require('moment/locale/fr')

LocalForage.config({ driver: LocalForage.IndexedDB, name: 'Hand Me', version: 1.0, storeName: 'HandMe' })

Vue.config.productionTip = false

Vue.prototype.handleEvent = new Vue()

Vue.prototype.$localforage = LocalForage

Vue.use(VueGeolocation)

Vue.use(Element, { locale })

Vue.use(require('vue-moment'), {
  moment
})

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
