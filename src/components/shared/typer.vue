<template>
  <div class="typer">
    <vue-typer
        :pre-type-delay='200'
        :type-delay='100'
        @completed="onComplete()"
        :text="text"
        initial-action='typing'
        :pre-erase-delay='3000'
        :erase-delay='200'
        erase-style='select-all'
        :erase-on-complete='false'
        caret-animation='smooth'
        :repeat="repeat">
    </vue-typer>
  </div>
</template>
<script>
export default {
  name: 'Typer',
  data: function() {
    return {}
  },
  props: {
    text: {
      type: String
    },
    repeat: {
      type: Number,
      default: undefined
    }
  },
  mounted() {},
  methods: {
    onComplete() {
      this.$emit('onComplete');
    }
  }
}
</script>
<style>
  .vue-typer .custom.char.typed {
    color: #FFF;
  }
  .vue-typer .custom.char.selected {
    color: #FFF;
  }

  .vue-typer .custom.caret {
    animation: rocking 1s ease-in-out 0s infinite;
  }
  .vue-typer .custom.caret.typing {
    background-color: #FFF;
  }
  .vue-typer .custom.caret.selecting {
    display: inline-block;
    background-color: #FFF;
  }
</style>
