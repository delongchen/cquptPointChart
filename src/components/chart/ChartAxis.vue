<template>
  <g>
    <g
        id="axis_x"
        class="axis axis--x"
        :transform="`translate(0,${h})`"
    >
      <text
          :x="w"
          y="26"
          dy=".71em"
          style="fill: #2c3e50; text-anchor: end"
      >{{ a.x.text }}</text>
    </g>

    <!-- y axis -->
    <g class="axis axis--y" id="axis_y">
      <text
          x="-16"
          y="-16"
          dy=".71em"
          style="text-anchor: start; fill: #2c3e50"
      >{{ a.y.text }}</text>
    </g>
  </g>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "ChartAxis",
    computed: {
      ...mapGetters({
        h: 'getChartHeight',
        w: 'getChartWidth',
        a: 'getCurrentAxis'
      })
    }
  }
</script>

<style scoped>

</style>
