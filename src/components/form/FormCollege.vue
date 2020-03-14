<template>
  <b-form-group>

  </b-form-group>
</template>

<script>
  export default {
    name: "FormCollege",
    computed: {
      message() {
        return this.$store.state['form'].message
      }
    }
  }
</script>

<style scoped>

</style>
