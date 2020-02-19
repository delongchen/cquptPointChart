<template>
  <div id="app">
    <router-view></router-view>
    <room-grade></room-grade>
  </div>
</template>

<script>
  import RoomGrade from "@/components/RoomGrade";
export default {
  name: 'App',
  components: {
    RoomGrade
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
