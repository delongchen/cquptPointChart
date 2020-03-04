<template>
  <b-container>
    <b-button
        v-for="(v, k) in bts"
        :key="k"
        @click="changeAxis(v)"
    >
      {{ v.title }}
    </b-button>
  </b-container>
</template>

<script>
  import {chartToolSet} from "@/chart/toolbar";

  export default {
    name: "ChartToolBar",
    data() {
      return {
        bts: chartToolSet
      }
    },
    methods: {
      changeAxis(o) {
        this.$store.dispatch('setAxisX', o.x);
        this.$store.dispatch('setAxisY', o.y);
      }
    }
  }
</script>

<style scoped>

</style>
