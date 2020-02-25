<template>
  <b-container id="app">
    <error-alert />
    <router-view />
  </b-container>
</template>

<script>
  import ErrorAlert from "@/components/error_alert/ErrorAlert";
export default {
  name: 'App',
  components: {
    ErrorAlert
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
