<template>
  <b-container>
    <b-list-group>
      <b-list-group-item
          v-for="(v, k) in getContainer"
          :key="k"
          button
          @click="setCurrent(k)"
      >{{ k }}: {{ v.title }}</b-list-group-item>
    </b-list-group>
    <b-button @click="clean">clean</b-button>
  </b-container>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "RoomSelector",
    computed: {
      ...mapGetters([
        'getContainer'
      ])
    },
    methods: {
      setCurrent(k) {
        this.$store.commit('setCurrent', k);
        this.$router.push("chart");
      },
      clean() {
        this.$store.commit('cleanContainer')
      }
    }
  }
</script>

<style scoped>

</style>
