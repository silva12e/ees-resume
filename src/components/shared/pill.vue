<template>
  <div class="pill">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "pill",
  props: ['text']
}
</script>

<style scoped>
  .pill {
    margin: 12px;
    background: #3f4898;
    color: #ECECEC;
    padding: 10px;
    border-radius: 12px;
  }
</style>
