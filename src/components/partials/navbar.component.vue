<template>
  <nav v-bind:class="{ 'closed': !isNavbarActive  }"
       class="float-nav"
       v-on:click="toggle()">
    <ul class="navbar-items">
      <li class="navbar-item">
        <a class="link" href="#">About me</a>
      </li>
      <li>
        <a class="link" href="#">Experience</a>
      </li>
      <li>
        <a class="link" href="#">Projects</a>
      </li>
      <li>
        <a class="link" href="#">Contact Information</a>
      </li>
    </ul>
    <div class="toggle  open">
      <a v-bind:class="{ 'is-active': isNavbarActive }"
         role="button"
         class="navbar-burger"
         aria-label="menu"
         aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'Navbar',
    data: function() {
      return {
        isNavbarActive: false
      }
    },
    methods: {
      toggle() {
        this.isNavbarActive = !this.isNavbarActive;
      }
    },
    mounted() {}
  }
</script>
<style scoped>
  .float-nav {
    border-radius: 20px;
    position: fixed;
    z-index: 1;
    bottom: 1.375em;
    right: 1.375em;
    overflow: hidden;
    width: 300px;
    height: 300px;
    padding: 1.375em;
    text-align: right;
    background: #000;
    border: 5px solid #000;
    box-shadow:
        0 1px 2px rgba(0,0,0,0.2),
        0 4px 10px rgba(0,0,0,0.15);
    transition: all 300ms cubic-bezier(.6,-0.3,.3,1.3);
  }
  .float-nav.closed {
    width: 0;
    height: 0;
    border: 5px solid #fff;
    border-radius: 50%;
  }

  .float-nav a {
    display: inline-block;
    color: #fff;
  }

  .float-nav > a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  .float-nav .toggle {
    position: absolute;
    bottom: 6px;
    right: 6px;
    width: 1.375em;
    height: 1.375em;
    font-size: 200%;
    line-height: 1.375em;
    font-weight: 300;
    text-align: center;
    transition: all 300ms;
  }

  .float-nav ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    opacity: 1;
    transition: all 300ms;
  }

  .float-nav.closed ul {
    opacity: 0;
  }

  .float-nav li {
    padding: 0.25em 0;
    margin-bottom: 0;
    transition: all 600ms;
    color: red;
  }

  .float-nav.closed li {
    margin-bottom: 1.375em;
  }

  .navbar-burger span {
    color: #FFF;
  }

  .link {
    margin: 12px;
  }
</style>
