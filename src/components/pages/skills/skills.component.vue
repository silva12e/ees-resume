<template>
  <div class="skills">
    <div class="skills_header">
      <Header
          @onComplete="onComplete()"
          :text="headerText">
      </Header>
    </div>


    <div class="skills__body">
      <div class="skills__bars">
        <div class="skills__item">
          <span class="skills__item-text">Web Development</span>
          <progress class=" skills__item-bar progress is-small is-primary" max="100">95%</progress>
        </div>
        <div class="skills__item">
          <span class="skills__item-text">Web Development</span>
          <progress class=" skills__item-bar progress is-small is-primary" max="100">95%</progress>
        </div>
        <div class="skills__item">
          <span class="skills__item-text">Web Development</span>
          <progress class=" skills__item-bar progress is-small is-primary" max="100">95%</progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/shared/header";
export default {
  name: "skills",
  components: {Header},
  data() {
    return {
      headerText:'Skills & Tools',
      Skills: [
        { id: 0, title: 'Web development', strength: 95 },
        { id: 1, title: 'Front-End/UI', strength: 90 },
        { id: 2, title: 'Back-End/API', strength: 70 },
        { id: 3, title: 'Devops', strength: 60 },
        { id: 4, title: 'Design', strength: 70 },
      ]
    }
  },
  methods: {
    onComplete(){}
  }
}
</script>

<style lang="scss">
.skills {
  display: flex;
  flex-direction: column;
  margin: 20px;

  &__header {
    color: black !important;
  }

  &__body {
    margin: 40px;
  }

  &__item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    &-bar {
      width: 30px;
    }
  }

  .vue-typer .custom.char.typed {
    color: #000;
  }

  .vue-typer .custom.char.selected {
    color: #000;
  }
}
</style>
