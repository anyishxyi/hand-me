<template>
  <div class="d-flex justify-content-center">
    <table class="table table-dark w-50">
      <thead>
        <tr>
          <th scope="col" v-for="(item, index) in heads" :key="index">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in body" :key="index">
          <th scope="row">{{item.id}}</th>
          <td>{{item.title}}</td>
          <td>{{item.startDate}}</td>
          <td>{{item.endDate}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  data: () => {
    return {};
  },
  props: {
    heads: Array,
    body: Array
  }
};
</script>

<style scoped>
</style>