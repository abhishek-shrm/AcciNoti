<template>
  <section>
    <div class="block">
      <h1 class="title is-4">Emergency Contacts</h1>
    </div>
    <table class="table is-striped is-bordered">
      <thead>
        <tr>
          <th><strong>Service</strong></th>
          <th><strong>Contact No.</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p>NATIONAL EMERGENCY NUMBER</p></td>
          <td><p><strong>112</strong></p></td>
        </tr>
        <tr>
          <td><p>POLICE</p></td>
          <td><p><strong>100</strong></p></td>
        </tr>
        <tr>
          <td><p>FIRE</p></td>
          <td><p><strong>101</strong></p></td>
        </tr>
        <tr>
          <td><p>AMBULANCE</p></td>
          <td><p><strong>102</strong></p></td>
        </tr> 
        <tr>
          <td><p>Disaster Management Services</p></td>
          <td><p><strong>108</strong></p></td>
        </tr>
        <tr>
          <td><p>Women Helpline</p></td>
          <td><p><strong>1091</strong></p></td>
        </tr>
        <tr>
          <td><p>Domestic Abuse</p></td>
          <td><p><strong>181</strong></p></td>
        </tr>
        <tr>
          <td><p>Aids Helpline</p></td>
          <td><p><strong>1097</strong></p></td>
        </tr>            
        <tr>
          <td><p>Anti Poison New Delhi</p></td>
          <td><p><strong>1066 or 011-1066</strong></p></td>
        </tr>  
        <tr>
          <td><p>LPG Leak Helpline</p></td>
          <td><p><strong>1906</strong></p></td>
        </tr>                                            
      </tbody>
    </table>     
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
  table{
    margin:10px 2em;
    text-align:justify;
  }
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>