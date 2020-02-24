<template>
  <div id="chartContainer">
    <!-- chart -->
    <svg :width="containerWidth" :height="defaultHeight">
      <!-- main group -->
      <g :transform="transformOf(m.left, m.top)">
        <!-- x axis -->
        <g
            id="axis_x"
            class="axis axis--x"
            :transform="transformOf(0, chartHeight)"
        ></g>
        <!-- y axis -->
        <g class="axis axis--y" id="axis_y"></g>
        <!-- points group -->
        <g id="points_group">
          <circle
            v-for="(v, k) in o.rooms"
            class="points"
            :key="k"
            :id="`popover-${k}`"
            :r="v.infos.r"
            :fill="v.infos.color"
            :cx="sx(v.infos.vx)"
            :cy="sy(v.infos.vy)"
            @mouseover="event => {event.target.style.fill = v.infos.grade}"
            @mouseout="event => {event.target.style.fill = v.infos.color}"
          >
            <b-popover
                placement="auto"
                no-fade="true"
                :target="`popover-${k}`"
                triggers="hover">
              <template v-slot:title>{{ v.name }}</template>
                <b-button
                    v-for="(stu, sk) in v.list"
                    :key="sk"
                    block
                    :variant="stu.gua ? 'outline-danger' : 'outline-success'"
                >{{ stu['name_stu'] }}</b-button>
            </b-popover>
          </circle>
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
      defaultHeight: 700,
      containerWidth: 1000,
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
      },
      sx() {
        return scaleLinear().domain([0, this.o.max.x]).range([0, this.chartWidth]);
      },
      sy() {
        return scaleLinear().rangeRound([0, this.chartHeight]).domain([this.o.max.y, 0]);
      }
    },
    methods: {
      transformOf,
      mount_axis() {
        select("#axis_x")
          .call(axisBottom(this.sx))
          .append('text')
          .attr('x', this.chartWidth)
          .attr('y', 26)
          .attr('dy', '.71em')
          .style('text-anchor', 'end')
          .style('fill', '#000')
          .text('寝室序号');

        select("#axis_y")
          .call(axisLeft(this.sy))
          .append('text')
          .attr('y', -16)
          .attr('x', -16)
          .attr('dy', '.71em')
          .style('text-anchor', 'start')
          .style('fill', '#000')
          .text('平均分');
      }
    },
    mounted() {
      this.containerWidth = document.getElementById('chartContainer').offsetWidth;
      this.mount_axis();
    }
  }
</script>

<style scoped>

</style>
