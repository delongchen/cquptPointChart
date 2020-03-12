<template>
  <div>
    <b-popover
        v-for="(v, k) in o.rooms"
        :key="k"
        placement="auto"
        no-fade
        :target="`point-${k}`"
        :title="v.name"
        triggers="hover">
      <div :id="`point-bts-${k}`">
        <b-button
            v-for="(stu, sk) in v.list"
            :key="sk"
            block
            :variant="stu.gua ? 'outline-danger' : 'outline-success'"
            @click="$store.dispatch('toast/showToast')"
        >{{ stu['name_stu'] }}</b-button>
      </div>
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
    },
  }
</script>

<style scoped>

</style>
