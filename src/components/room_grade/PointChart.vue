<template>
  <div id="chartContainer">
    <b-button-toolbar>
      <b-button-group class="m-2">
        <b-button
            v-for="(v, k) in grade_settings"
            :key="k"
            :variant="(v.show ? '' : 'outline-') + v.variant"
            @click="v.show = !v.show"
        >{{o.gradeCounter[k]}}</b-button>
      </b-button-group>

      <b-button-group class="m-2">
        <b-button variant="primary" @click="setAllPoints(true, '')">Reset</b-button>
      </b-button-group>

      <b-button-group class="m-2">
        <b-button id="ob"> Only ></b-button>
        <b-popover target="ob" triggers="hover">
          <b-button-group>
            <b-button
                v-for="(v, k) in grade_settings"
                :key="k"
                :variant="v.variant"
                @click="only(k)"
            ></b-button>
          </b-button-group>
        </b-popover>
      </b-button-group>
    </b-button-toolbar>

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
            @mouseleave="event => {event.target.style.fill = v.infos.color}"
            @mouseenter="event => {event.target.style.fill = v.infos.grade}"
            v-show="grade_settings[v.infos.grade].show"
          >
            <b-popover
                placement="auto"
                no-fade
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
      grade_settings: {
        red: {variant: 'danger', show: true},
        yellow: {variant: 'warning', show: true},
        blue: {variant: 'info', show: true},
        green: {variant: 'success', show: true}
      },
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
      },
      setAllPoints(status) {
        for (let i in this.grade_settings)
          if (
            Object.prototype.hasOwnProperty.call(this.grade_settings, i)
            &&
            this.grade_settings[i].show !== status
          )
            this.grade_settings[i].show = status
      },
      only(tag) {
        for (let i in this.grade_settings)
          if (
            Object.prototype.hasOwnProperty.call(this.grade_settings, i)
            &&
            i !== tag && this.grade_settings[i].show
          ) this.grade_settings[i].show = false;

        if (!this.grade_settings[tag].show) this.grade_settings[tag].show = true;
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
