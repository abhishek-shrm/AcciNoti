<template>
  <section>
    <div class="block">
      <div class="card">
        <div class="card-content">
          <h1 class="title is-5">To report an accident press SOS Button</h1>
          <router-link :to="{name:'SOS'}" class="button is-danger is-rounded is-large sos-button" tag="button">
            SOS
          </router-link>
         </div>
      </div>
    </div>
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{modalHead}}</p>
          <button class="delete" @click="modalClose" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <!-- Add your make API call in modalActive method so that
          on each click of button API can be called and result can be displayed in the form 
          of tables. Create loop through one table for each location. The modal is completely scrollable, it may not
          be visible on computer just push it to the repo and it will be deployed automatically. Website is working
          fine on mobile. -->
          <table class="table is-striped is-bordered">
            <tbody>
              <tr>
                <td><p><strong>Name</strong></p></td>
                <td><p>Dr Mittal S Dental and Orthodontic Hospital</p></td>
              </tr>
              <tr>
                <td><p><strong>Address</strong></p></td>
                <td><p>Mission Chowk Old, Mehlana Road, Rai Industrial Area, Haryana, 131029</p></td>
              </tr>
              <tr>
                <td><p><strong>Distance</strong></p></td>
                <td><p>2031m</p></td>
              </tr>                                         
            </tbody>
          </table>
          <table class="table is-striped is-bordered">
            <tbody>
              <tr>
                <td><p><strong>Name</strong></p></td>
                <td><p>Dr Mittal S Dental and Orthodontic Hospital</p></td>
              </tr>
              <tr>
                <td><p><strong>Address</strong></p></td>
                <td><p>Mission Chowk Old, Mehlana Road, Rai Industrial Area, Haryana, 131029</p></td>
              </tr>
              <tr>
                <td><p><strong>Distance</strong></p></td>
                <td><p>2031m</p></td>
              </tr>                                         
            </tbody>
          </table>
          <table class="table is-striped is-bordered">
            <tbody>
              <tr>
                <td><p><strong>Name</strong></p></td>
                <td><p>Dr Mittal S Dental and Orthodontic Hospital</p></td>
              </tr>
              <tr>
                <td><p><strong>Address</strong></p></td>
                <td><p>Mission Chowk Old, Mehlana Road, Rai Industrial Area, Haryana, 131029</p></td>
              </tr>
              <tr>
                <td><p><strong>Distance</strong></p></td>
                <td><p>2031m</p></td>
              </tr>                                         
            </tbody>
          </table>
          <table class="table is-striped is-bordered">
            <tbody>
              <tr>
                <td><p><strong>Name</strong></p></td>
                <td><p>Dr Mittal S Dental and Orthodontic Hospital</p></td>
              </tr>
              <tr>
                <td><p><strong>Address</strong></p></td>
                <td><p>Mission Chowk Old, Mehlana Road, Rai Industrial Area, Haryana, 131029</p></td>
              </tr>
              <tr>
                <td><p><strong>Distance</strong></p></td>
                <td><p>2031m</p></td>
              </tr>                                         
            </tbody>
          </table>
          <table class="table is-striped is-bordered">
            <tbody>
              <tr>
                <td><p><strong>Name</strong></p></td>
                <td><p>Dr Mittal S Dental and Orthodontic Hospital</p></td>
              </tr>
              <tr>
                <td><p><strong>Address</strong></p></td>
                <td><p>Mission Chowk Old, Mehlana Road, Rai Industrial Area, Haryana, 131029</p></td>
              </tr>
              <tr>
                <td><p><strong>Distance</strong></p></td>
                <td><p>2031m</p></td>
              </tr>                                         
            </tbody>
          </table>
          <table class="table is-striped is-bordered">
            <tbody>
              <tr>
                <td><p><strong>Name</strong></p></td>
                <td><p>Dr Mittal S Dental and Orthodontic Hospital</p></td>
              </tr>
              <tr>
                <td><p><strong>Address</strong></p></td>
                <td><p>Mission Chowk Old, Mehlana Road, Rai Industrial Area, Haryana, 131029</p></td>
              </tr>
              <tr>
                <td><p><strong>Distance</strong></p></td>
                <td><p>2031m</p></td>
              </tr>                                         
            </tbody>
          </table>
        </section>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="columns">
          <div class="column">
            <button class="button is-info" @click="modalActive('Hospitals')"><i class="fas fa-clinic-medical"></i>Hospitals<i class="fas fa-clinic-medical"></i></button>
          </div>
          <div class="column">
            <button class="button is-primary button-police" @click="modalActive('Police Stations')"><i class="fas fa-shield-alt"></i>Police Stations<i class="fas fa-shield-alt"></i></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

// import API from '../api' If using APIs remove this comment

export default {
  data(){
    return{
      modalHead:''
    }
  },
  methods: {
    modalActive(modalHeading){
      document.querySelector('.modal').classList.add('is-active');
      this.modalHead='Near By '+modalHeading;
    },
    modalClose(){
      document.querySelector('.modal').classList.remove('is-active');
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
  .sos-button{
    font-size: 3em !important;
    border-radius: 50% !important;
    padding:10px 20px !important;
  }
  .card {
    width: 300px;
    margin-bottom: 1em;
    border-radius: 25px 25px;
    display: inline-block;
    margin-left: 1em;

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