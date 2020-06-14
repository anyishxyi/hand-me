<template>
  <section class="cards">
    <EventCard></EventCard>
    <EventCard></EventCard>
  </section>
</template>

<script>
import EventCard from './EventCard'

export default {
  name: 'ListEvents',
  components: {
    EventCard
  },
  data(){}
}
</script>

<style>
.cards {
  width: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  -webkit-justify-content: center;
  max-width: 820px;
  padding-top: 20px;
}
</style>
