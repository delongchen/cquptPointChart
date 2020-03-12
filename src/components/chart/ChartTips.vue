<template>
  <div>
    <b-popover
        v-for="(v, k) in o.rooms"
        :key="k"
        placement="auto"
        no-fade
        :target="`point-${k}`"
        :title="v.name"
        @hidden="$bvToast.hide('stu-toast')"
        triggers="hover">
      <div :id="`point-bts-${k}`">
        <b-button
            v-for="(stu, sk) in v.list"
            :key="sk"
            block
            :variant="stu.gua ? 'outline-danger' : 'outline-success'"
            @click="showToast(stu)"
        >{{ stu['name_stu'] }}</b-button>
      </div>
    </b-popover>

    <b-toast id="stu-toast" :variant="infos.gua ? 'danger': 'success'" solid no-auto-hide>
      <template v-slot:toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img blank :blank-color="infos.gua? '#ff5555': '#42dc68'" class="mr-2" width="12" height="12"></b-img>
          <strong class="mr-auto">{{ infos['name_stu'] }}</strong>
          <small class="text-muted mr-2">{{ infos['num_stu'] }}</small>
        </div>
      </template>
      <div style="text-align: center">
        <h5>{{ aTitle.x.text }}: {{ fx(infos) }}</h5>
        <h5>{{ aTitle.y.text }}: {{ fy(infos) }}</h5>
      </div>
    </b-toast>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "ChartTips",
    data() {
      return {
        infos: {}
      }
    },
    computed: {
      o() {
        return this.$store.getters['getCurrentObj']
      },
      ...mapGetters({
        fx: 'fx',
        fy: 'fy',
        aTitle: 'getCurrentAxis'
      })
    },
    methods: {
      showToast(stu) {
        this.infos = stu;
        this.$bvToast.show('stu-toast');
      }
    }
  }
</script>

<style scoped>

</style>
