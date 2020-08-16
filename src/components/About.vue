<template>
  <div id="about-section" class="about">
    <section class="hero is-fullheight-with-navbar">
      <div class="container ees-about-me">
        <p class="title about-title">
          FullStack Software Development
        </p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about {
    background-color: #ECECEC;
  }
  .container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
  }
</style>
