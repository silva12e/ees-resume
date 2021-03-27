<template>
  <div class="home">
    <div class="home-container">
      <div class="home-title">
        <transition name="fade">
          <h1 v-if="showTitle" class="title ees-home-title">
            <vue-typer :pre-type-delay='200' :type-delay='70' @completed="onComplete(0)" text='Ernesto Silva' :repeat="0"></vue-typer>
          </h1>
        </transition>
      </div>
      <div class="home-subtitle">
        <h2 class="subtitle is-spaced ees-home-subtitle">
          <vue-typer :pre-type-delay='200' :type-delay='70' v-if="showSubtitle" @completed="onComplete(1)" text='Software Development' :repeat="0"></vue-typer>
        </h2>
      </div>
      <div class="home-social">
        <transition name="bounce">
          <div v-show="showSocialMediaIcons" class="ees-home-social-container">
            <div class="ees-home-social-icons">
              <img class="ees-home-social-icon" src="../../../assets/icons/instagram-rounded.png"/>
              <img class="ees-home-social-icon" src="../../../assets/icons/linked-rounded.png"/>
              <img class="ees-home-social-icon" src="../../../assets/icons/GitHub-Mark-120px-plus.png"/>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data: function() {
      return {
        showTitle: false,
        showSubtitle: false,
        showSocialMediaIcons: false,
        appTitle: 'Ernesto Silva',
        appSubtitle: 'Fullstack Software development'
      }
    },
    mounted() {
      this.showTitle = true;
    },
    methods: {
      scrollToMain() {
        this.$emit('scrollToMain');
      },
      onComplete: function(index) {
        switch (index) {
          case 0:
            this.showSubtitle = true;
            break;
          case 1:
            this.showSocialMediaIcons = true
            setTimeout(() => {
              this.showScrollButton = true;
              this.$emit('showNavbar');
            },500)
            break;
          default:
            this.showScrollButton = true;
            break;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    background: #FFF;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home-container {
    min-height: 300px;
  }

  .home-title,
  .home-subtitle {
    text-align: center;
    margin: 20px;
    min-height: 50px;
  }

  .ees-home-title,
  .ees-home-subtitle {
    color: #fff;
  }

  .ees-home-subtitle {
    margin-bottom: 0;
  }

  .ees-home-social-icon {
    height: 45px;
    width: 45px;
  }

  .ees-home-social-icon {
    margin: 4px;
  }

  .ees-home-social-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-height: 60px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .bounce-enter-active {
    animation: bounce-in 300ms;
  }
  .bounce-leave-active {
    animation: bounce-in 300ms reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
