<template>
  <div class="about">
    <div class="about-header">
      <Header @onComplete="onComplete()" text="About me"></Header>
    </div>
      <div class="about-body">
        <div class="main">
          <div class="about-card">
            <div class="about-card-header">
              <div class="about-card-header-img">
                <img class="about-img" src="https://placebeard.it/640x360" alt="">
              </div>
              <div class="about-card-header-title">
                <h2 class="title">Hello there...</h2>
              </div>
            </div>
            <div class="about-text">
              Find empty spot in cupboard and sleep all day meowing chowing and wowing and find empty spot in cupboard and sleep all day gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye pelt around the house and up and down stairs chasing phantoms but tweeting a baseball cat mojo . Yowling nonstop the whole night to pet a cat, rub its belly, endure blood and agony, quietly weep, keep rubbing belly push your water glass on the floor. And sometimes switches in french and say "miaou" just because well why not. What the heck just happened, something feels fishy pet me pet me don't pet me. Toy mouse squeak roll over flex claws on the human's belly and purr like a lawnmower sleep everywhere, but not in my bed. Lick human with sandpaper tongue lick the other cats or rub face on everything.
            </div>
          </div>
        </div>
      </div>
     <div class="skills">
       <skills></skills>
     </div>
  </div>
</template>

<script>
  import Header from "@/components/shared/header";
  import Skills from "@/components/pages/skills/skills.component";

  export default {
    name: 'About',
    components: { Skills, Header },
    data() {
      return {
        currentTab: 0,
        showSkillsSection: false,
        showFrameworksSection: false
      };
    },
    methods: {
      switchTab(index) {
        this.currentTab = index;
      },
      onComplete() {}
    }
  }
</script>

<style lang="scss">
  .about {
    display: flex;
    width: 100vw;
    flex-direction: column;
    min-height: 100vh;
  }

  .about-header {
    margin: 30px;
  }

  .about-body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    flex-direction: column;
  }

  .about-card {
    background: #fcfcfc;
    border-radius: 10px;
    margin: 20px;
    min-width: 50vw;
    min-height: 300px;
    max-width: 300px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  .about-img {
    width: 250px;
    border-radius: 10px;
    position: relative;
    margin-left: -30px;
    top: -20px;
    height: 200px;
    box-shadow: 10px 10px 10px 1px #888888;
  }

  .about-text {
    margin: 20px;
  }

  .about-card-header {
    display: flex;
  }

  .about-card-header-title {
    align-self: flex-end;
  }

  .skills {
    margin: 20px;
  }
</style>
