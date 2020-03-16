<template>
  <b-form-group
      label-cols-sm="4"
      label-cols-lg="1"
      description="班级号是8位哦"
      label="班级: "
      label-for="stu-class-input"
      label-size="lg"
  >
    <b-form-input
        id="stu-class-input"
        size="lg"
        v-model="message.num_class"
        placeholder="08041704" />
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
