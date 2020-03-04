<template>
  <div>
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
      getOne() {
        this.$store
          .dispatch('parseRoomInfo', './new_data.json')
          .then(() => {
            this.$router.push('chart')
        })
      }
    }
  }
</script>

<style scoped>

</style>
