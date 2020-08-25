import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://backend.hand-me.fr:8443/gpe/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
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
  }
}
