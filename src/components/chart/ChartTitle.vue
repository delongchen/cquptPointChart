<template>
  <g>
    <text
        :x="w / 2"
        y="-20"
        fill="#2c3e50"
        font-size="16px"
        font-weight="700"
        text-anchor="middle"
    >{{ o.title }}</text>
  </g>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "ChartTitle",
    computed: {
      ...mapGetters({
        o: 'getCurrentObj',
        w: 'getChartWidth'
      })
    }
  }
</script>

<style scoped>

</style>
