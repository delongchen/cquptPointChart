<template>
  <b-form-group
      label-cols-sm="4"
      label-cols-lg="1"
      label="学院: "
      label-for="college-select"
      label-size="lg"
  >
    <template v-slot:description>
      o
    </template>
    <b-form-select
        id="college-select"
        size="lg"
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
