<template>
  <div id="testP">
    <svg width="500" height="500">
      <g>
        <circle
            r="30"
            :fill="col"
            cx="60"
            cy="60"
            id="testCircle"
            @mouseover="click"
            @mouseout="event => {event.target.style.fill = col}"
        ></circle>
        <b-popover target="testCircle" triggers="hover">
          <template v-slot:title>Test</template>
        </b-popover>
      </g>
    </svg>
  </div>
</template>

<script>
  export default {
    name: "TestPage",
    data: () => ({
      col: 'green'
    }),
    methods: {
      click(event) {
        event.target.style.fill = 'red'
      }
    }
  }
</script>

<style scoped>

</style>
