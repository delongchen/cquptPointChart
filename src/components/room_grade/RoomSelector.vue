<template>
  <b-container>
    <b-list-group>
      <b-list-group-item
          v-for="(v, k) in getContainer"
          :key="k"
          button
          @click="setCurrent(k)"
          :active="getCurrentId === k"
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
        'getContainer',
        'getCurrentId'
      ])
    },
    methods: {
      setCurrent(k) {
        if (k !== this.getCurrentId) {
          this.$store.commit('setCurrent', k);
        }
        this.$router.push("chart");
      },
      clean() {
        this.$store.commit('cleanContainer');
        this.$router.push("/")
      }
    }
  }
</script>

<style scoped>

</style>
