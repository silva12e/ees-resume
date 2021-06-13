<template>
  <div class="chart-container">
    <div class="chart-item subtitle" v-for="item in items" v-bind:key="item.id">
      <vue-ellipse-progress
          :emptyColor="'transparent'"
          :color="'#5270b3'"
          :fontColor="'#FFF'"
          :progress="item.strength"/>
      <span class="chart-item-title">{{ item.title }}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'chart',
    props: ['items'],
    data() {
      return {
        progress: 40
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style>
.chart-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.chart-item {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.chart-item-title {
  align-self: center;
  padding-top: 20px;
  color: #fff;
}
</style>
