<template>
  <div class="about">
    <div class="about__header">
      <Header
          @onComplete="onComplete()"
          text="About me">
      </Header>
    </div>
    <div class="about__avatar-container">
      <img
          class="about__avatar-container__img"
          src="https://placebeard.it/640x360"
          alt="">
    </div>
    <div class="about__description">
      <p>HI! My name is Ernesto Silva and I absolutely love being a Software Developer. I have over 5 years of experience in Client side, API, DEVOPS experience and have been really lucky to have worked on some amazing products.
        I am always looking for a new challenge to expand my expertise in Software Developer and I cannot wait to hear about your project!</p>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/shared/header";

  export default {
    name: 'About',
    components: { Header },
    data() {
      return {
        currentTab: 0,
        showSkillsSection: false,
        showFrameworksSection: false
      };
    },
    methods: {
      onComplete() {}
    }
  }
</script>

<style lang="scss">
  .about {
    display: flex;
    flex-direction: column;
    margin: 20px;
    height: 100vh;

    &__header {
      color: black !important;
      width: 100%;
    }

    &__avatar-container {
      align-self: center;
      margin-top: 20px;

      &__img {
        border-radius: 5%;
      }
    }

    &__description {
      align-self: center;
      margin: 20px;
    }

    .vue-typer .custom.char.typed {
      color: #000;
    }

    .vue-typer .custom.char.selected {
      color: #000;
    }
  }
</style>
