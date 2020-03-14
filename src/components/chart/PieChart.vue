<template>
  <div>
    <svg :width="width" :height="height">
      <g id="pie" :transform="`translate(${width / 2},${height / 2})`">
        <g v-for="(v, k) in okData"
           :key="k"
        >
          <path
              :d="a(v)"
              :fill="co(v.index)"
          />
          <text
              :transform="`translate(${a.centroid(v)})`"
              text-anchor="middle"
              font-size="10px">
            {{v.data.y}}
          </text>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
  import {pie, arc} from 'd3-shape'
  import {scaleOrdinal} from 'd3-scale'
  import {schemeCategory10} from 'd3-scale-chromatic'
  import {range} from 'd3-array'
  //import * as d3 from 'd3'

  export default {
    name: "PieChart",
    data() {
      return {
        oriData: [
          {"x": "雨露计划", "y": 20},
          {"x": "金融扶贫", "y": 20},
          {"x": "产业扶贫", "y": 70},
          {"x": "基础设施", "y": 40}
        ],
        width: 450,
        height: 350,
        pie: pie().value(d => d.y)
      }
    },
    computed: {
      okData() {
        return this.pie(this.oriData)
      },
      a() {
        return arc().innerRadius(0).outerRadius(100);
      },
      co() {
        return scaleOrdinal().domain(range(0, this.okData.length)).range(schemeCategory10)
      }
    },
  }
</script>

<style scoped>

</style>
