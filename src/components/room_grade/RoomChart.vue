<template>
  <b-container>
    <point-chart />
  </b-container>
</template>

<script>
  import PointChart from "@/components/room_grade/PointChart";
  export default {
    name: "RoomChart",
    components: {
      PointChart
    },
    data: () => ({

    }),
  }
</script>

<style scoped>

</style>
