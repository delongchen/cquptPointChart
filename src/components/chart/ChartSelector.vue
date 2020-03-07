<template>
  <div>
    <b-button-toolbar>
      <b-button-group class="m-2">
        <b-button
            v-for="(v, k) in grade_settings"
            :key="k"
            :variant="(v.show ? '' : 'outline-') + v.variant"
            @click="v.show = !v.show"
        >{{o.gradeCounter[k]}}</b-button>
      </b-button-group>

      <b-button-group class="m-2">
        <b-button variant="primary" @click="resetPoints">Reset</b-button>
      </b-button-group>

      <b-button-group class="m-2">
        <b-button id="ob"> Only ></b-button>
        <b-popover target="ob" triggers="hover">
          <b-button-group>
            <b-button
                v-for="(v, k) in grade_settings"
                :key="k"
                :variant="v.variant"
                @click="only(k)"
            ></b-button>
          </b-button-group>
        </b-popover>
      </b-button-group>
    </b-button-toolbar>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "ChartSelector",
    computed: {
      ...mapGetters({
        o: 'getCurrentObj',
        grade_settings: 'grade_settings'
      })
    },
    methods: {
      resetPoints() {
        for (let i in this.grade_settings)
          if (
            Object.prototype.hasOwnProperty.call(this.grade_settings, i)
            &&
            !this.grade_settings[i].show
          ) this.$store.commit('showPoints', i);
      },
      only(tag) {
        for (let i in this.grade_settings)
          if (
            Object.prototype.hasOwnProperty.call(this.grade_settings, i)
            &&
            i !== tag && this.grade_settings[i].show
          ) this.$store.commit('disShowPoints', i);

        if (!this.grade_settings[tag].show)
          this.$store.commit('showPoints', tag);
      }
    }
  }
</script>

<style scoped>

</style>
