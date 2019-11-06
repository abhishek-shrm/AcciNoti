<template>
  <section>
    <div class="pageHeader">
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a id="brand" class="navbar-item" href="/">
          AccidentAlert
          <img src="../assets/logo.png" width="112" height="52">
        </a>

        <a role="button" class="navbar-burger burger" @click="toggleClass" aria-label="menu" aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link :to="{name:'Home'}" @click="toggleClass" class="navbar-item" tag="a">Home</router-link>

          <router-link :to="{name:'About'}" @click="toggleClass" class="navbar-item" tag="a">About Us</router-link>

          <router-link :to="{name:'Emergency'}" @click="toggleClass" class="navbar-item" tag="a">Emergency Contacts</router-link>
        </div>
      </div>
    </nav>

    <flash-message class="myCustomClass"></flash-message>
    </div>
  </section>
</template>

<script>

// import API from '../api' If using APIs remove this comment

export default {
  data(){
    return{
      wnWidth:window.screen.width
    }
  },
  methods: {
    toggleClass() {
      document.querySelector('.navbar-burger').classList.toggle('is-active');
      document.querySelector('.navbar-menu').classList.toggle('is-active');
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>

  @import "~bulma/sass/utilities/_all";

  .block>h1 {
    margin-top: 2em;
    text-align: center;
  }
  #brand {
    padding: 0;
    padding-left: 1em;
  }
  #brand:hover{
    transform: scale(1.1);
  }
  .myCustomClass{
    margin-top: 4em;
  }
  .display-none{
    display:none !important;
  }

  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>
