<template>
  <div>
    <b-button @click="$store.dispatch('parseRoomInfo', () => {$router.push('chart')})">GET</b-button>
    <b-form style="text-align: left">
      <form-class />
      <form-college />
    </b-form>
    <p>{{ $store.state['form'].message }}</p>
  </div>
</template>

<script>
  import FormClass from "@/components/form/FormClass";
  import FormCollege from "@/components/form/FormCollege";

  export default {
    name: "RoomForm",
    components: {
      FormClass,
      FormCollege
    }
  }
</script>

<style scoped>

</style>
