<template>
  <section v-bind:class="{ cards_home: isHome, cards: !isHome }">
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
      :isHome="isHome"
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
    isHome: {
      type: Boolean,
      default: false
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
.cards_home {
  display: inline-flex;
  margin: 0;
  padding: 0;
  text-align: left;
  width: 80%;
}
</style>
