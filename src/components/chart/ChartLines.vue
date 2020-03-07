<template>
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
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "ChartLines",
    computed: {
      ...mapGetters({
        line_setting: 'line_settings',
        chartHeight: 'getChartHeight',
        m: 'getMargin',
        lines: 'linesInfo'
      })
    }
  }
</script>

<style scoped>

</style>
