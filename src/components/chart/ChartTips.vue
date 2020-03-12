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
            @click="showStuBts(stu)"
        >{{ stu['name_stu'] }}</b-button>
      </div>
    </b-popover>
  </div>
</template>

<script>
  const toastId = "stu-toast";
  export default {
    name: "ChartTips",
    computed: {
      o() {
        return this.$store.getters['getCurrentObj']
      }
    },
    methods: {
      showStuBts(stu) {
        const payload = {stu, id: toastId, doShow: () => {this.$bvToast.show(toastId);}};
        this.$store.dispatch('toast/showToast', payload);
      }
    }
  }
</script>

<style scoped>

</style>
