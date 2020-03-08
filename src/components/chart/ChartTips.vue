<template>
  <div>
    <b-popover
        v-for="(v, k) in o.rooms"
        :key="k"
        placement="auto"
        no-fade
        :target="`point-${k}`"
        triggers="focus">
      <template v-slot:title>{{ v.name }}</template>
      <b-button
          v-for="(stu, sk) in v.list"
          :key="sk"
          block
          :variant="stu.gua ? 'outline-danger' : 'outline-success'"
          @click="makeToast"
      >{{ stu['name_stu'] }}</b-button>
    </b-popover>

    <b-toast id="my-toast" variant="warning" solid>
      <template v-slot:toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
          <strong class="mr-auto">Notice!</strong>
          <small class="text-muted mr-2">42 seconds ago</small>
        </div>
      </template>
      This is the content of the toast.
      It is short and to the point.
    </b-toast>
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
    methods: {
      makeToast() {
        this.$bvToast.show('my-toast')
      }
    }
  }
</script>

<style scoped>

</style>
