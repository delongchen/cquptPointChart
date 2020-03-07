<template>
  <b-container>
    <b-button
        v-for="(v, k) in infos.li"
        :key="k"
        @click="$store.commit('setCurrentAxis', k)"
        variant="light"
        :pressed="k === infos.n"
    >
      {{ v.x.text }}-{{ v.y.text }}
    </b-button>
  </b-container>
</template>

<script>
  export default {
    name: "ChartToolBar",
    computed: {
      infos() {
        return this.$store.getters.getAxisInfos;
      }
    }
  }
</script>

<style scoped>

</style>
