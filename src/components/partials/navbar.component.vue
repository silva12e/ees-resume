<template>
  <div class="ees-resume-navbar">
    <nav
      class="navbar is-primary"
      role="navigation"
      aria-label="main navigation">
      <div
        class="navbar-brand"
        v-on:click="toggleNavbar()">
        <h1 class="navbar-item">
          EES Resume
        </h1>
        <a v-bind:class="{ 'is-active' : isNavbarOpen }"
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
      <div  class="navbar-menu" v-bind:class="{ 'is-active' : isNavbarOpen }">
        <div
          class="navbar-start"
          v-bind:key="link.route"
          v-for="link in navigationLinks">
          <router-link
            class="navbar-item"
            v-bind:class="{'is-active': link.isActive }"
            v-bind:to="link.route">
            <span v-on:click="updateNavigation(link)">{{ link.page }}</span>
          </router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons is-rounded">
              <span class=" ees-button-social  is-primary">
                <img src="../../assets/icons/icons8-github-48.png"/>
              </span>
              <span class="ees-button-social is-primary">
                <img src="../../assets/icons/icons8-linkedin-circled-48.png"/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>

  </div>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Navbar',
    data: function() {
      return {
        isNavbarOpen: false,
        navigationLinks: [
          {
            id: 0,
            route: '/',
            page: 'about me',
            isActive: this.isLinkActive('/')
          },
          {
            id: 1,
            route: '/projects',
            page: 'projects',
            isActive: this.isLinkActive('/projects')
          },
          {
            id: 2,
            route: '/skills',
            page: 'skills',
            isActive: this.isLinkActive('/skills')
          },
        ]
      }
    },
    computed: mapState({
      links: state => state.navbarLinks
    }),
    methods: {
      toggleNavbar() {
        this.isNavbarOpen = !this.isNavbarOpen;
      },
      updateNavigation(link) {
       this.navigationLinks.forEach((navLink) =>
         navLink.isActive = link === navLink.route);
      },
      isLinkActive(url) {
        return this.$route.fullPath === url;
      }
    },
    mounted() {}
  }
</script>
<style scoped>
  .ees-button-social {
    padding: 0;
  }
  .navbar-start {
    margin: 0;
  }
  .navbar-item > a {
    color: #FFF;
  }

  .navbar-item:hover{
    animation: navbarGenie .2s ease-in;
    text-decoration: none;
    color: black !important;
  }

  @keyframes navbarGenie {
    0% {
      display: none;
      opacity: 0;
    }
    1% {
      display: block;
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
