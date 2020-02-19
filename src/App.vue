<template>
  <div id="app">
    <p v-for="(v, k) in li" :key="k">{{ v }}: {{ k }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    li: [1, 43, 54, 54]
  })
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
