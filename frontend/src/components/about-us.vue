<template>
  <section>
    <div class="block">
      <h1 class="title is-4">About-us</h1>
    </div>
    <div class="card">
      <div class="card-content">
        <p>
          "Accident Call" is a life saving project which saves people's life by making Emergency services reach faster to their location. It also helps Police to come prepared to handle the situation better. This project is solely developed and created by <strong>AnK</strong> which is a collaboration between <strong>Abhishek Sharma</strong> and <strong>Kanishk Gupta</strong> .
        </p>
      </div>
    </div>
  </section>
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

  .block>h1 {
    margin-top: 2em;
    text-align: center;
  }
  .card {
    width: 300px;
    margin-bottom: 1.5em;
    border-radius: 25px 25px;
    display: inline-block;
    margin-left: 0.5em;
    text-align: justify;

    .card-content{
      i{
        margin-right: 5px;
        margin-left: 5px;
      }
    }
  }
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>