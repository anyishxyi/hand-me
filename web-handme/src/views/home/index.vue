<template>
  <div class="dashboard-container">
    <!-- <component :is="currentRole" /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {}
  },
  computed: {
    ...mapGetters([])
  },
  created() {}
}
</script>
