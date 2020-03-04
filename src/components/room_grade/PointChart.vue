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
        >
          <text
              :x="chartWidth"
              y="26"
              dy=".71em"
              style="fill: #2c3e50; text-anchor: end"
          >{{ o.title }} x</text>
        </g>


        <!-- y axis -->
        <g class="axis axis--y" id="axis_y">
          <text
              x="-16"
              y="-16"
              dy=".71em"
              style="text-anchor: start; fill: #2c3e50"
          >{{ o.title }}</text>
        </g>


        <!-- points group -->
        <g id="points_group">
          <circle
            v-for="(v, k) in o.rooms"
            class="points"
            :key="k"
            :id="`popover-${k}`"
            :r="v.infos.r"
            :fill="v.infos.color"
            :cx="sx(fx(v.infos))"
            :cy="sy(fy(v.infos))"
            @mouseleave="event => {
              event.target.style.fill = v.infos.color;
              line_setting.show = false;
            }"
            @mouseenter="event => {
              event.target.style.fill = v.infos.grade;
              line_setting.show = true;
              mount_lines(v.infos);
            }"
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

        <!-- lines -->
        <g>
          <g>
            <line
                id="line_x"
                x1="0"
                :y1="lines.y"
                :x2="lines.x - lines.r"
                :y2="lines.y"
                :stroke-width="line_setting.width"
                :stroke="line_setting.color"
                v-show="line_setting.show"
            />
            <text
                :x="-m.left"
                :y="lines.y"
                v-show="line_setting.show"
            >{{ lines.ty }}</text>
          </g>

          <g>
            <line
                id="line_y"
                :x1="lines.x"
                :y1="chartHeight"
                :x2="lines.x"
                :y2="lines.y + lines.r"
                :stroke-width="line_setting.width"
                :stroke="line_setting.color"
                v-show="line_setting.show"
            />
            <text
                :x="lines.x"
                :y="chartHeight + m.left"
                v-show="line_setting.show"
            >
              {{ lines.tx }}
            </text>
          </g>
        </g>
      </g>
    </svg>
    <chart-tool-bar />
  </div>
</template>

<script>
  import {transformOf} from "@/utils/d3_helper";
  import {mapGetters, mapActions} from 'vuex'

  import ChartToolBar from "@/components/room_grade/ChartToolBar";

  export default {
    name: "PointChart",
    components: {
      ChartToolBar
    },
    data() {
      return {
        grade_settings: {
          red: {variant: 'danger', show: true},
          yellow: {variant: 'warning', show: true},
          blue: {variant: 'info', show: true},
          green: {variant: 'success', show: true}
        },
        line_setting: {
          show: false,
          color: "#000",
          width: "1px"
        },
        lines: {
          x: 0,
          y: 0,
          r: 0,
          tx: 0,
          ty: 0
        }
      }
    },
    computed: {
      ...mapGetters({
        o: 'getCurrentObj',
        defaultHeight: 'getPageHeight',
        containerWidth: 'getPageWidth',
        chartHeight: 'getChartHeight',
        chartWidth: 'getChartWidth',
        m: 'getMargin',
        sx: 'scale_x',
        sy: 'scale_y',
        fx: 'fx',
        fy: 'fy'
      }),
    },
    methods: {
      transformOf,
      ...mapActions([
        'setNowWidth',
        'mount_axis_y'
      ]),
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
      },
      mount_lines(info) {
        let tx = this.fx(info),
          ty = this.fy(info),
          x = this.sx(tx),
          y = this.sy(ty);

        this.lines.r = info.r;
        this.lines.x = x;
        this.lines.y = y;
        this.lines.tx = tx;
        this.lines.ty = ty;
      }
    },
    mounted() {
      this.setNowWidth(document.getElementById('chartContainer').offsetWidth);
      this.mount_axis_y();
    }
  }
</script>

<style scoped>

</style>
