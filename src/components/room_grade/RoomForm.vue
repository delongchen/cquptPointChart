<template>
  <div>
    <b-button @click="$store.dispatch('parseRoomInfo', () => {$router.push('chart')})">GET</b-button>
  </div>
</template>

<script>
  export default {
    name: "RoomForm",
    data() {
      return {

      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
