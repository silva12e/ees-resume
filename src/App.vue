<template>
  <div id="app">
    <home></home>
    <about id="#about"></about>
    <transition name="bounce">
      <Navbar v-if="showNavbar"></Navbar>
    </transition>
  </div>
</template>
<script>
  import Navbar from './components/shared/navbar.component';
  import Home from "@/components/pages/home/home.component";
  import About from "@/components/pages/about/about.component";
  const DEFAULT_TRANSITION = 'fade';

export default {
  name: 'App',
  components: {About, Home, Navbar },
  data() {
    return {
      prevHeight: 0,
      showNavbar: false,
      transitionName: DEFAULT_TRANSITION,
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === 'slide') {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        }

          this.transitionName = transitionName || DEFAULT_TRANSITION;
          next();
      });
  },
  mounted() {
    setTimeout(() => this.showNavbar = true, 3300)
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
}
</script>
<style lang="scss">
  #app {
    background: initial;
  }

  .slide-left-enter-active,
  .slide-left-leave-active,
.slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(2em, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-2em, 0);
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
