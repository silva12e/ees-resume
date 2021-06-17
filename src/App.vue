<template>
  <div id="app" class="has-navbar-fixed-top">
    <Navbar isNavbarVisible="showNavbar"></Navbar>
    <home></home>
    <about id="#about"></about>
    <Experience id="#experience"></Experience>
    <skills></skills>
  </div>
</template>
<script>
  import Navbar from './components/shared/navbar.component';
  import Home from "@/components/pages/home/home.component";
  import About from "@/components/pages/about/about.component";
  import Experience from "./components/pages/experience/experience.component";
  import Skills from "./components/pages/skills/skills.component";

export default {
  name: 'App',
  components: {Skills, Experience, About, Home, Navbar },
  data() {
    return {
      prevHeight: 0,
      showNavbar: false, // Use store
      offsetTop: 0
    };
  },
  created() {
    window.addEventListener('scroll', this.onScroll);
  },
  mounted() {},
  methods: {
    onScroll() {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      console.log(document.querySelector('.ees-about').clientTop)

      if (this.offsetTop >= document.querySelector('.ees-about')) {
        this.fadeNavbar(true)
      } else {
        this.fadeNavbar(false)
      }
    },
    fadeNavbar(showNavbar) {
      this.showNavbar = showNavbar;
    }
  },
}
</script>
<style lang="scss">
  #app {
    background: initial;
  }
</style>
