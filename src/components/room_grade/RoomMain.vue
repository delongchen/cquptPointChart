<template>
  <div>
    <h3>This is room main page</h3>
    <room-chart />
  </div>
</template>

<script>
  import RoomChart from "@/components/room_grade/RoomChart";

  export default {
    name: "RoomMain",
    components: {
      RoomChart
    }
  }
</script>

<style scoped>

</style>
