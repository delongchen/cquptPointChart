<template>
  <b-form-group
      label-cols-sm="4"
      label-cols-lg="1"
      description="啊"
      label="学院: "
      label-for="college-select"
  >
    <b-form-select
        id="college-select"
        @change="$store.state['form'].message.num_major = null"
        :options="$store.state['form'].formData.college"
        v-model="$store.state['form'].message.num_college">
    </b-form-select>
  </b-form-group>
</template>

<script>
  export default {
    name: "FormCollege",
  }
</script>

<style scoped>

</style>
