<template>
  <b-form-group
      label-cols-sm="4"
      label-cols-lg="1"
      description="学号"
      label="专业: "
      label-for="major-select"
  >
    <b-form-select
        id="major-select"
        :options="$store.getters['form/major']"
        v-model="$store.state['form'].message.num_major">
      <template v-slot:first>
        <b-select-option :value="null">ALL</b-select-option>
      </template>
    </b-form-select>
  </b-form-group>
</template>

<script>
  export default {
    name: "FormMajor"
  }
</script>

<style scoped>

</style>
