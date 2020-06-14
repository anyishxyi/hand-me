<template>
  <section class="cards">
    <Event></Event>
  </section>
</template>

<script>
import Event from '../event'

export default {
  name: 'Events',
  components: {
    Event
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
}
</style>
