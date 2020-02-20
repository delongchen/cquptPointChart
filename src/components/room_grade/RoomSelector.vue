<template>
  <b-container>
    <b-list-group>
      <b-list-group-item
          v-for="(v, k) in getContainer"
          :key="k"
          button
          @click="al(v)"
      >{{ v['data'] }}</b-list-group-item>
    </b-list-group>
    <b-button @click="getOne">get</b-button>
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
      getOne() {
        this.$store.dispatch('parseRoomInfo', './test.json')
      },
      al(i) {
        this.$store.dispatch('alertError', i)
      }
    }
  }
</script>

<style scoped>

</style>
