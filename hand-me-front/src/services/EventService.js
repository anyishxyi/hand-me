// Add a service then call it for exemple like that :

/**

/views/events/index

import EventService from '@/services/EventService'


created() {
EventService.getEvents()
  .then( resp => {
    this.events = response.data
  })
  .catch(error =>{
    console.error(error.response)
  })
}
 */
import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  }
}
