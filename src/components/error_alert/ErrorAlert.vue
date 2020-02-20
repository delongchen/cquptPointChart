<template>
  <div id="e">
    <b-alert
        variant="danger"
        :show="errored"
    >
      <h3>ERROR</h3>
      <hr />
      <p>{{ info }}</p>
      <b-button @click="cancelAlert">close</b-button>
    </b-alert>
  </div>
</template>

<script>
  export default {
    name: "ErrorAlert",
    computed: {
      errored() {
        return this.$store.getters.getError;
      },
      info() {
        return this.$store.getters.getErrorInfo;
      }
    },
    methods: {
      cancelAlert() {
        this.$store.dispatch("cancelErrorAlert")
      }
    }
  }
</script>

<style scoped>

</style>
