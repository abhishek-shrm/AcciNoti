<template>
  <div class="block">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/header'

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";



@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>