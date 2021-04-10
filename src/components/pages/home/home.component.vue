<template>
  <div class="home">
    <div class="home-container">
      <background></background>
      <div class="home-title">
        <transition name="fade">
          <h1 v-if="showTitle" class="title ees-home-title">
            <Typer
                text="Ernesto Silva"
                @onComplete="onComplete(0)">
            </Typer>
          </h1>
        </transition>
      </div>
      <div class="home-subtitle">
        <h2 v-if="showSubtitle" class="subtitle is-spaced ees-home-subtitle">
          <Typer
              text="Full-stack Software developer"
              @onComplete="onComplete(1)">
          </Typer>
        </h2>
      </div>
      <div class="home-social">
        <transition name="fade">
          <ul v-show="showSocialMediaIcons"
              class="ees-home-social-container">
            <li><a class="icon-link" href="#"><i class="fab fa-linkedin-in icon linkedin"></i></a></li>
            <li><a class="icon-link" href="#"><i class="fab fa-github icon github"></i></a></li>
            <li><a class="icon-link" href="#"><i class="fab fa-instagram instagram icon"></i></a></li>
          </ul>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
 import Typer from '@/components/shared/typer';
 import Background from "@/components/shared/background";

 export default {
    name: 'Home',
    components: { Typer, Background },
    comments: { Typer },
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

<style lang="scss">
  .home {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-45deg, #8ccb60, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
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
    color: #3b5999 !important;
  }

  .ees-home-subtitle {
    margin-bottom: 0;
  }

  .icon:hover {
    text-decoration: none;
  }

  .ees-home-social-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-link {
    text-decoration: none !important;
  }
  .ees-home-social-container li {
    list-style: none;
  }

  .ees-home-social-container li a {
    width: 80px;
    height: 80px;
    background-color: #fff;
    text-align: center;
    line-height: 80px;
    font-size: 35px;
    margin: 0 10px;
    display: block;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    border: 3px solid #fff;
    z-index: 1;
  }

  .ees-home-social-container li a .icon {
    position: relative;
    color: #262626;
    transition: .5s;
    z-index: 3;
    text-decoration: none;
  }

  .ees-home-social-container li a:hover .icon {
    color: #fff;
    transform: rotateY(360deg);
  }

  .ees-home-social-container li a:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f00;
    transition: .5s;
    z-index: 2;
  }

  .ees-home-social-container li a:hover:before {
    top: 0;
  }

  .ees-home-social-container li:nth-child(1) a:before{
    background: #23a6d5;
  }

  .ees-home-social-container li:nth-child(2) a:before{
    background: #8ccb60;
  }

  .ees-home-social-container li:nth-child(3) a:before {
    background: #ee7752;
  }

  .ees-home-social-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-height: 60px;
    margin-top: 40px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
