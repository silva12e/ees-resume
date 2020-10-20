<template>
  <div class="home">
    <section class="hero is-fullheight">
      <div class="hero-body has-text-centered">
        <div class="container ees-title-container">
          <transition name="fade">
            <h1 v-if="showTitle" class="title ees-home-title">
              Ernesto Silva
            </h1>
          </transition>
          <transition name="fade">
            <h2 v-show="showTitle" class="subtitle ees-home-subtitle">
              Interactive software development resume
            </h2>
          </transition>
          <transition name="fade">
            <section v-show="showScrollButton" class="down-arrow">
              <a @click="scrollToMain()"><span></span></a>
            </section>
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data: function() {
      return {
        showTitle: false,
        showScrollButton: false,
        appTitle: 'Ernesto Silva',
        appSubtitle: 'Fullstack Software development'
      }
    },
    mounted() {
      this.showTitle = true;

      setTimeout(() => this.showScrollButton = true, 1000);
    },
    methods: {
      scrollToMain() {
        this.$emit('scrollToMain');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    background: rgb(253,223,71);
    background: linear-gradient(90deg, rgba(253,223,71,1) 0%, rgba(69,215,182,1) 80%, rgba(23,213,209,1) 100%);
  }
  .ees-home-title {
    margin-top: 40px;
    color: #FFF;
  }

  .ees-home-subtitle {
    color: #FFF;
  }

  .ees-title-container {
    padding-bottom: 40px;
  }
  .down-arrow a span {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 46px;
    height: 46px;
    margin-left: -23px;
    border: 1px solid #fff;
    border-radius: 100%;
    box-sizing: border-box;
  }
  .down-arrow a span::after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: '';
    width: 16px;
    height: 16px;
    margin: -12px 0 0 -8px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    box-sizing: border-box;
  }
  .down-arrow a span::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 44px;
    height: 44px;
    box-shadow: 0 0 0 0 rgba(255,255,255,.1);
    border-radius: 100%;
    opacity: 0;
    -webkit-animation: sdb03 3s infinite;
    animation: sdb03 3s infinite;
    box-sizing: border-box;
  }
  @-webkit-keyframes sdb03 {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      box-shadow: 0 0 0 60px rgba(255,255,255,.1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sdb03 {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      box-shadow: 0 0 0 60px rgba(255,255,255,.1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
