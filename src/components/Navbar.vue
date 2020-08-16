<template>
  <div>
    <nav class="navbar"
         role="navigation"
         aria-label="main navigation">
      <div class="navbar-brand" v-on:click="toggleNavbar()">
        <a
          v-bind:class="{ 'is-active' : isNavbarOpen }"
            role="button"
           class="navbar-burger burger"
           aria-label="menu"
           aria-expanded="false"
           data-target="navbartarget">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu"
           v-bind:class="{ 'is-active' : isNavbarOpen }">
        <div class="navbar-end">
          <a class="navbar-item">
            <router-link to="/">About me</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/experience">Experience</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/skills">Skills</router-link>
          </a>
        </div>
      </div>
    </nav>

  </div>
</template>
<script>
  export default {
    name: 'Navbar',
    data: function() {
      return {
        isNavbarOpen: false
      }
    },
    methods: {
      toggleNavbar() {
        this.isNavbarOpen = !this.isNavbarOpen;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
  }
</style>
