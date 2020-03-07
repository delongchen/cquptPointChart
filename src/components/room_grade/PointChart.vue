<template>
  <div id="chartContainer">
    <ChartSelector />
    <!-- chart -->
    <svg :width="containerWidth" :height="defaultHeight">
      <g :transform="`translate(${m.left},${m.top})`">
        <ChartTitle />
        <ChartAxis />
        <ChartPoints/>
        <ChartLines />
      </g>
    </svg>
    <chart-tips />
    <chart-tool-bar />
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import {ChartComponents} from "@/components/chart";

  export default {
    name: "PointChart",
    components: {
      ...ChartComponents
    },
    computed: {
      ...mapGetters({
        defaultHeight: 'getPageHeight',
        containerWidth: 'getPageWidth',
        grade_settings: 'grade_settings',
        m: 'getMargin'
      }),
    },
    methods: {
      ...mapActions([
        'setNowWidth',
        'mount_axis_y'
      ]),
    },
    mounted() {
      this.setNowWidth(document.getElementById('chartContainer').offsetWidth);
      this.mount_axis_y();
    }
  }
</script>

<style scoped>

</style>
