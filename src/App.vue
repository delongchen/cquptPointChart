<template>
  <div id="app">
    <d-header />
    <router-view />
  </div>
</template>

<script>
  import DHeader from "@/components/DHeader";
export default {
  name: 'App',
  components: {
    DHeader
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
