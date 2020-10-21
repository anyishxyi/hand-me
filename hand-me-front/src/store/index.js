/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import axios from "axios"

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  modules,
  getters,
  state: {
    userData: null
  },
  mutations: {
    SET_USER_DATA(state, data) {
      state.userData = data
      console.log('state.userData :', state.userData)
      localStorage.setItem('userData', data)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token
    }
  },
  actions: {
    register_particular({ commit }, credentials) {
      return axios.post('https://backend.hand-me.fr:8443/gpe/particular/create_particular', credentials)
                  .then(({ data }) => {
                    console.log('user data is:', data )
                  })
    },
    register_association({ commit }, credentials) {
      return axios.post('https://backend.hand-me.fr:8443/gpe/particular/create_organization', credentials)
                  .then(({ data }) => {
                    console.log('orga data is:', data )
                  })
    },
    login_particular({ commit }, credentials) {
      return axios.post('https://backend.hand-me.fr:8443/gpe/authen/login_particular', credentials)
                  .then(({ data }) => {
                    console.log('data: ', data )
                    commit('SET_USER_DATA', data)
                  })
    },
    login_association({ commit }, credentials) {
      return axios.post('https://backend.hand-me.fr:8443/gpe/authen/login_organization', credentials)
                  .then(({ data }) => {
                    console.log('orga data is:', data )
                  })
    },
    getEvents({ commit }, filters) {
      return axios.get(`https://backend.hand-me.fr:8443/gpe/event/search_events?placeCriteria=${filters.placeCriteria}&titleCriteria=${filters.titleCriteria}&categoryCriteria=${filters.categoryCriteria}&descriptionCriteria=${filters.descriptionCriteria}&eventMakerCriteria=${filters.eventMakerCriteria}&pageRequested=${filters.pageRequested}`)
    },
    homeData({ commit }) {
      return axios.get(`https://backend.hand-me.fr:8443/gpe/authen/home`)
    }
  }
})
