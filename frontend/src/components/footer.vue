<template>
  <div class="block">
    <footer class="footer">
      <div class="content has-text-centered">
      <p style="margin-top:1.5em">Created By <strong>AnK</strong></p>
      </div>
    </footer>
  </div>
</template>

<script>

// import API from '../api' If using APIs remove this comment

export default {
  data(){
    return{

    }
  },
  methods: {

  },
  computed: {
    
  }
}
</script>

<style lang="scss" scoped>

  @import "~bulma/sass/utilities/_all";

  $footer-background-color: #F5F5F5;
  $footer-padding:1rem 1rem 3rem;

  .block>h1 {
    margin-top: 2em;
    text-align: center;
  }

  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>