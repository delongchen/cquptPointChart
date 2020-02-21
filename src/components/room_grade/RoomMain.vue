<template>
  <div>
    <b-card no-body title="main">

      <b-card-header header-tag="nav">
        <b-nav card-header tabs fill>
          <b-nav-item to="/" exact exact-active-class="active">Selector</b-nav-item>
          <b-nav-item
              id="chart_button"
              to="/chart"
              exact
              exact-active-class="active"
              :disabled="isEmpty">Chart</b-nav-item>

          <b-popover
              target="chart_button"
              :disabled="!isEmpty"
              triggers="hover"
              placement="bottom">
            <template v-slot:title>Popover Title</template>
            I am popover <b>component</b> content!
          </b-popover>
        </b-nav>
      </b-card-header>

      <b-card-body>
        <router-view />
      </b-card-body>

    </b-card>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "RoomMain",
    components: {
    },
    data: () => ({
    }),
    methods: {
    },
    mounted() {
    },
    computed: {
      ...mapGetters({
        isEmpty: 'isContainerEmpty',
      })
    }
  }
</script>

<style scoped>

</style>
