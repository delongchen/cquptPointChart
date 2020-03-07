<template>
  <div>
    <b-popover
        v-for="(v, k) in o.rooms"
        :key="k"
        placement="auto"
        no-fade
        :target="`point-${k}`"
        triggers="hover">
      <template v-slot:title>{{ v.name }}</template>
      <b-button
          v-for="(stu, sk) in v.list"
          :key="sk"
          block
          :variant="stu.gua ? 'outline-danger' : 'outline-success'"
      >{{ stu['name_stu'] }}</b-button>
    </b-popover>
  </div>
</template>

<script>
  export default {
    name: "ChartTips",
    computed: {
      o() {
        return this.$store.getters['getCurrentObj']
      }
    }
  }
</script>

<style scoped>

</style>
