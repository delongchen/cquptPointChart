<template>
  <div>
    <b-card no-body title="main">

      <b-card-header header-tag="nav">
        <b-nav card-header tabs fill>
          <b-nav-item to="/" exact exact-active-class="active"><BIconPencil /> Form</b-nav-item>

          <b-nav-item
              id="se_bt"
              to="/selector"
              exact
              exact-active-class="active"
              :disabled="isEmpty"
          >
            <BIconListUl />
            Selector
            <b-popover
                target="se_bt"
                :disabled="!isEmpty"
                triggers="hover"
                placement="bottom">
              <template v-slot:title>Nothing to show!</template>
              move to <b>Form</b> to get one
            </b-popover>
          </b-nav-item>

          <b-nav-item
              id="chart_button"
              to="/chart"
              exact
              exact-active-class="active"
              :disabled="isEmpty"><BIconGraphUp /> Chart</b-nav-item>
          <b-popover
              target="chart_button"
              :disabled="!isEmpty"
              triggers="hover"
              placement="bottom">
            <template v-slot:title>Nothing to show!</template>
            <p>move to <b>Selector</b> choose one</p>
            <p>or <b>Form</b> to get one</p>
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
  import {BIconListUl, BIconGraphUp, BIconPencil} from 'bootstrap-vue'

  export default {
    name: "RoomMain",
    components: {
      BIconListUl,
      BIconGraphUp,
      BIconPencil
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
