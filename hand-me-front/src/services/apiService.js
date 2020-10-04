import axios from 'axios'

let apiClient = axios.create({
  baseURL: `https://backend.hand-me.fr:8443/gpe/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  setClientSecured(token) {
    apiClient = axios.create({
      baseURL: `https://backend.hand-me.fr:8443/gpe/`,
      withCredentials: false,
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-type': 'application/json'
      }
    })
  },
  async orgaLogin(userData) {
    return apiClient.post('/authen/login_organization', userData)
  },
  async userLogin(userData) {
    return apiClient.post('/authen/login_particular', userData)
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
