<template>
  <div>
    <b-toast :id="id" variant="warning" solid>
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
    name: "StuToast",
    data() {
      return {
        id: 'stu-toast'
      }
    },
    computed: {
      self() {
        return this.$store.getters['toast/getToastsOf'](this.id);
      }
    }
  }
</script>

<style scoped>

</style>
