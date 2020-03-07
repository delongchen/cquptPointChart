<template>
  <g id="points_group">
    <circle
        v-for="(v, k) in o.rooms"
        class="points"
        :key="k"
        :id="`point-${k}`"
        :r="v.infos.r"
        :fill="v.infos.color"
        :cx="sx(fx(v.infos))"
        :cy="sy(fy(v.infos))"
        @mouseleave="event => {
              event.target.style.fill = v.infos.color;
              $store.commit('showLines', false);
            }"
        @mouseenter="event => {
              event.target.style.fill = v.infos.grade;
              $store.dispatch('updateLinesInfo', v.infos)
              $store.commit('showLines', true);
            }"
        v-show="grade_settings[v.infos.grade].show" />
  </g>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "ChartPoints",
    computed: {
      ...mapGetters({
        o: 'getCurrentObj',
        sx: 'scale_x',
        sy: 'scale_y',
        fx: 'fx',
        fy: 'fy',
        grade_settings: 'grade_settings'
      })
    },
  }
</script>

<style scoped>

</style>
