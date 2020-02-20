<template>
  <div>
    <b-card no-body title="main">

      <b-card-header header-tag="nav">
        <b-nav card-header tabs fill>
          <b-nav-item to="/" exact exact-active-class="active">Form</b-nav-item>
          <b-nav-item to="/chart" exact exact-active-class="active">Chart</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body>
        <router-view />
      </b-card-body>

    </b-card>
  </div>
</template>

<script>
  export default {
    name: "RoomMain",
    components: {
    },
    data: () => ({
    }),
    methods: {
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
