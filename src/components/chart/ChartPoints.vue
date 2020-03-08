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
        @mouseleave="leave(v.infos, $event)"
        @mouseenter="enter(v.infos, $event)"
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
    methods: {
      enter(info, event) {
        event.target.style.fill = info.grade;
        this.$store.dispatch('updateLinesInfo', info);
        this.$store.commit('showLines', true);
      },
      leave(info, event) {
        event.target.style.fill = info.color;
        this.$store.commit('showLines', false);
      }
    }
  }
</script>

<style scoped>

</style>
