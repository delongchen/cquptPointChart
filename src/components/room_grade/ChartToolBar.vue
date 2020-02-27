<template>
  <b-container>
    <b-button @click="changeAxis">平均成绩-综合素质</b-button>
  </b-container>
</template>

<script>
  export default {
    name: "ChartToolBar",
    methods: {
      changeAxis() {
        this.$store.dispatch('setAxisX', x => 2 * x)
      }
    }
  }
</script>

<style scoped>

</style>
