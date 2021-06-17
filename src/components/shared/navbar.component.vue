<template>
  <div class="ees-navbar">
    <nav v-if="isNavbarVisible" class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item ees-logo" href="#">
          Ernesto Silva
        </a>

        <a role="button"
          v-on:click="toggleMenu"
          v-bind:class="{ 'is-active': isNavbarActive }"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="eesNavbarTarget">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
          id="eesNavbarTarget"
          v-bind:class="{ 'is-active': isNavbarActive }"
          class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item">
            Home
          </a>

          <a class="navbar-item">
            About
          </a>

          <a class="navbar-item">
            Projects
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
  export default {
    props: ['isNavbarVisible'],
    name: 'Navbar',
    data: function() {
      return {
        isNavbarActive: false,
      }
    },
    methods: {
      toggleMenu() {
        this.isNavbarActive = !this.isNavbarActive;
      }
    },
    mounted() {}
  }
</script>
<style lang="scss" scoped>
.ees-navbar {
  .navbar {
    background: transparent;
  }

  .navbar-item {
    transition:all 300ms ease-out;

    &::after{
      content:"";
      height:0;
      width:100%;
      background-color:#fefefe;
      display: block;
      position: absolute;
      z-index:-1;
      bottom:0;
      left:0;
      transition:all 300ms ease;
    }

    &:hover::after {
      height: 100%;
    }
  }

  .navbar-burger,
  .navbar-item {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    &:hover {
      color: inherit;
    }
  }

  @media only screen and (max-width: 1023px) {
    .navbar-menu {
      animation: navAnimOpen .2s ease-in-out;
    }

    .navbar-burger,
    .navbar-item {
      display: flex;
      color: black;
      &::after{
        content:"";
        height:0;
        width:0;
      }

      .ees-logo {
        color: #FFFFFF;
      }
    }
  }

  @keyframes navAnimOpen {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}
</style>
