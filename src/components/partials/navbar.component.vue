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
    color: #FFF;
  }

  .float-nav.closed li {
    margin-bottom: 1.375em;
  }

  .navbar-burger span {
    color: #FFF;
  }

  .link {
    color: #fff !important;
    text-decoration: none;
    margin: 12px;
  }

  .link:hover {
    text-decoration: none;
  }

  .link {
    position:relative;
    text-decoration: none;
    color: gray;
    transition:color .15s ease-in-out;
  }

  .link:hover {
    background-size: 100% 100%;
    cursor: pointer;
  }

  .link:after {
    display:block;
    content:"";
    position: absolute;
    right:0;
    left:0;
    width:100%;
    height:3px;
    opacity:0;
    transform:translateY(-150%);
    transition:transform .200s ease-in-out, opacity .15s ease-in-out;
    background-color: #FFF;
  }

  .link.is-active,
  .link:active,
  .link:focus,
  .link:hover {
    color: #FFF;
  }

  .link.is-active:after,
  .link:active:after,
  .link:focus:after,
  .link:hover:after {
    transform:translateY(0);
    opacity:1;
  }
</style>
