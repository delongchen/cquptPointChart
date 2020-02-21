<template>
  <div>
    <p v-for="(v, k) in o.rooms" :key="k">{{ v }}</p>
  </div>
</template>

<script>
  import * as d3 from 'd3'
  import {mapGetters} from 'vuex'

  export default {
    name: "PointChart",
    data: () => ({
      width: 500,
      height: 270,
      d: d3
    }),
    computed: {
      ...mapGetters({
        o: 'getCurrentObj'
      })
    }
  }
</script>

<style scoped>

</style>
