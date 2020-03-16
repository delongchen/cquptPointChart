<template>
  <div>
    <b-form style="text-align: left">
      <form-stu-id />
      <form-class />
      <form-college />
      <form-major />
    </b-form>
    <b-button
        @click="$store.dispatch('parseRoomInfo', () => {$router.push('chart')})"
        variant="info"
    >GET</b-button>
  </div>
</template>

<script>
  import FormStuId from "@/components/form/FormStuId";
  import FormClass from "@/components/form/FormClass";
  import FormCollege from "@/components/form/FormCollege";
  import FormMajor from "@/components/form/FormMajor";

  export default {
    name: "RoomForm",
    components: {
      FormClass,
      FormCollege,
      FormStuId,
      FormMajor
    }
  }
</script>

<style scoped>

</style>
