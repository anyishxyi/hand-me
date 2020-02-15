import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import router from './router'
import './icons'

const moment = require('moment')
require('moment/locale/fr')

Vue.config.productionTip = false

Vue.prototype.handleEvent = new Vue()

Vue.use(Element)

Vue.use(require('vue-moment'), {
  moment
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
