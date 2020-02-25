<template>
  <div>
    <p>Form</p>
    <b-button @click="getOne">GET</b-button>
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
      async getOne() {
        await this.$store.dispatch('parseRoomInfo', './new_data.json');
        await this.$router.push('chart')
      }
    }
  }
</script>

<style scoped>

</style>
