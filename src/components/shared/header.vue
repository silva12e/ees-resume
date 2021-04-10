<template>
  <div class="header">
    <h1 class="title">
      <Typer @onComplete="$emit('onComplete')" text="About me">
      </Typer>
    </h1>
  </div>
</template>
<script>
  import Typer from "@/components/shared/typer";

  export default {
    name: 'Header',
    components: { Typer },
    data: function() {
      return {}
    },
    props: ['text'],
    mounted() {},
    methods: {}
  }
</script>
<style>
</style>
