<template>
  <b-form-group
      label-cols-sm="4"
      label-cols-lg="1"
      description="只输前四位是搜索年级哦"
      label="学号:"
      label-for="stu-id-input"
  >
    <b-form-input
        id="stu-id-input"
        placeholder="2017214770"
    ></b-form-input>
  </b-form-group>
</template>

<script>
  export default {
    name: "FormStuId"
  }
</script>

<style scoped>

</style>
