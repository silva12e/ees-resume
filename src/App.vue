<template>
  <div id="app">
    <home></home>
    <about id="#about"></about>
    <Experience id="#experience"></Experience>
    <skills></skills>
    <Navbar v-if="showNavbar"></Navbar>
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
      showNavbar: true, // Use store
    };
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss">
  #app {
    background: initial;
  }
</style>
