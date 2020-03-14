<template>
  <b-form-group
      class="mb-0"
      label="Text input with formatter (on input)"
      label-for="input-formatter"
      description="We will convert your name to lowercase instantly"
  >
    <b-form-input
        id="input-formatter"
        v-model="message.num_class"
        placeholder="Enter your name" />
  </b-form-group>
</template>

<script>
  export default {
    name: "FormClass",
    computed: {
      message() {
        return this.$store.state['form'].message
      }
    }
  }
</script>

<style scoped>

</style>
