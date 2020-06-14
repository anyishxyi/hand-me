<template>
  <section class="cards">
    <EventCard v-for="event in events" :key="event.id" />
  </section>
</template>

<script>
import EventCard from './EventCard'

export default {
  name: 'ListEvents',
  props: {
    events: {
      type: Array,
      required: true
    },
  },
  components: {
    EventCard
  },
  data(){
    return {}
  }
}
</script>

<style>
.cards {
  /* width: 100%;
  justify-content: center;
  -webkit-justify-content: center;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap; */
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  text-align: left;
}
</style>
