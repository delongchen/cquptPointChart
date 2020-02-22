<template>
  <div id="chartContainer">
    <svg
        :width="containerWidth"
        :height="defaultHeight">
      <g :transform="transformOf(m.left, m.top)">
        <g
            id="axis_x"
            class="axis axis--x"
            :transform="transformOf(0, chartHeight)"
        >
          <text
              style="text-anchor: end; fill: #000"
              dy=".71em"
              :x="chartWidth"
              y="26">
            i am x
          </text>
        </g>
        <g class="axis axis--y" id="axis_y">
          <text
              style="text-anchor: start; fill: #000"
              x="-16"
              y="-16"
              dy=".71em"
          >i am y</text>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
  import {transformOf} from "@/utils/d3_helper";
  import {mapGetters} from 'vuex'
  import {select} from 'd3-selection'
  import {axisBottom, axisLeft} from 'd3-axis'
  import {scaleLinear} from 'd3-scale'

  export default {
    name: "PointChart",
    data: () => ({
      m: {
        top: 80,
        right: 20,
        bottom: 40,
        left: 22
      },
      defaultHeight: 600,
      containerWidth: null
    }),
    computed: {
      ...mapGetters({
        o: 'getCurrentObj'
      }),
      chartWidth() {
        return this.containerWidth - this.m.left - this.m.right;
      },
      chartHeight() {
        return this.defaultHeight - this.m.top - this.m.bottom;
      }
    },
    methods: {
      mount_axis() {
        select("#axis_x").call(
          axisBottom(scaleLinear()
            .domain([0, this.o.max.x])
            .range([0, this.chartWidth])
          ));

        select("#axis_y").call(
          axisLeft(scaleLinear()
            .rangeRound([0, this.chartHeight])
            .domain([this.o.max.y, 0])
          ));
      },
      transformOf
    },
    mounted() {
      this.containerWidth = document.getElementById('chartContainer').offsetWidth;
      this.mount_axis();
    }
  }
</script>

<style scoped>

</style>
