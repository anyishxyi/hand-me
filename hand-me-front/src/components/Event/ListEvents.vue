<template>
  <section class="cards">
    <EventCard></EventCard>
    <EventCard></EventCard>
    <EventCard></EventCard>
    <EventCard></EventCard>
    <EventCard></EventCard>
  </section>
</template>

<script>
import EventCard from './EventCard'

export default {
  name: 'ListEvents',
  // props: {
  //   events: {
  //     type: Array,
  //     required: true
  //   },
  // },
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
  width: 100%;
  justify-content: center;
  -webkit-justify-content: center;
  max-width: 820px;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
}
</style>
