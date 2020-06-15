<template>
  <section class="cards">
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
      @click.native="handleShowEvent(event)"
    />

    <ShowEvent
      :event="eventClicked"
      :visibility="dialogEventVisible"
      @eventToggleDisplayEvent="toggleDisplayEventVisibility"
    />

  </section>
</template>

<script>
import EventCard from './EventCard'
import ShowEvent from './ShowEvent'

export default {
  name: 'ListEvents',
  props: {
    events: {
      type: Array,
      required: true
    },
  },
  components: {
    EventCard,
    ShowEvent
  },
  data(){
    return {
      eventClicked: {
        type: Object,
        default: {}
      },
      dialogEventVisible: false
    }
  },
  methods: {
    async handleShowEvent(event) {
      console.log('clicked')
      if (event) {
        this.eventClicked = event
        this.dialogEventVisible = true
      }
    },
    toggleDisplayEventVisibility(value) {
      if(!value) this.eventClicked = {}
      this.dialogEventVisible = value
    },
  }
}
</script>

<style>
.cards {
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  text-align: left;
}
</style>
