import axios from 'axios'
import { authHeader } from './authHeader'

let apiClient = axios.create({
  baseURL: `https://backend.hand-me.fr:8443/gpe/`,
  withCredentials: false,
  headers: authHeader()
})

export default {
  async orgaLogin(userData) {
    return apiClient.post('/authen/login_organization', userData)
  },
  async userLogin(userData) {
    return apiClient.post('/authen/login_particular', userData)
  },
  async getHomeData() {
    return apiClient.get('/authen/home')
  },
  async registerParticular(userData) {
    return apiClient.post('/particular/create_particular', userData)
  },
  async registerAssociation(userData) {
    return apiClient.post('/organization/create_organization', userData)
  },
  async createEvent(eventData, myToken) {
    this.setClientSecured(myToken)
    return apiClient.post('/event/create_event', eventData)
  },
  async getEvents(searchData) {
                                    // &dateCriteria1=${searchData.dateFrom}
                                  // &dateCriteria2=${searchData.dateTo}
    return apiClient.get(`event/search_events?placeCriteria=${searchData.placeCriteria}
                                              &titleCriteria=${searchData.titleCriteria}
                                              &categoryCriteria=${searchData.categoryCriteria}
                                              &descriptionCriteria=${searchData.descriptionCriteria}
                                              &eventMakerCriteria=${searchData.eventMakerCriteria}
                                              &pageRequested=${searchData.pageRequested}`)
  }
}
