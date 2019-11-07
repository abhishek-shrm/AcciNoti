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
          <table v-for="one in dispList" :key="one.name" class="table is-striped is-bordered">
            <tbody>
              <tr>
                <td><p><strong>Name</strong></p></td>
                <td><p>{{one.name}}</p></td>
              </tr>
              <tr>
                <td><p><strong>Address</strong></p></td>
                <td><p>{{one.address}}</p></td>
              </tr>
              <tr>
                <td><p><strong>Distance</strong></p></td>
                <td><p>{{one.distance}}m</p></td>
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

// import axios from 'axios';

export default {
  data(){
    return{
      modalHead:'',
      dispList:'',
      hospitalList:[
        {
          name:'Nirmal Hospital',
          address:'100 Feet Road, Khushk, New Delhi, Delhi, 110036',
          distance:'2082'
        },
	      {
	      	name:'Chauhan Hospital',
	      	address:'Bakhtawarpur More, Tigipur Village, New Delhi, Delhi, 110036',
	      	distance:'2306'
	      },
	      {
	      	name:'Prasuti Grih Hospital',
	      	address:'Garhi Bakhtawarpur, New Delhi, Delhi, 110036',
	      	distance:'2603'
	      },
	      {
	      	name:'Moji Ram Lions Charitable Eye Hospital',
	      	address:'Bakhtawarpur Road, Palla Mazra, Akbarpur Village, New Delhi, Delhi, 110036',
	      	distance:'2895'
	      },
	      {
	      	name:'Government Veterinary Hospital',
	      	address:'Singhola, New Delhi, Delhi, 110040',
	      	distance:'3361'
	      },
	      {
	      	name:'A7 Raja Harish Chander Hospital ',
	      	address:'Sector B4, Narela, New Delhi, Delhi, 110040',
	      	distance:'4969'
	      }
      ],
      policeList:[
        {
      		name:'Assistant Commissioner of Police',
      		address:'Main GT Karnal Road, Alipur, New Delhi, Delhi, 110036',
      		distance:'3083'
      	},
      	{
      		name:'Alipur Police Station',
      		address:'"Main GT Karnal Road, Alipur, New Delhi, Delhi, 110036',
      		distance:'3141'
      	},
      	{
      		name:'Palla Police Post',
      		address:'Palla Village Road, Palla Village, New Delhi, Delhi, 110036',
      		distance:'3515'
      	},
      	{
      		name:'Police Post',
      		address:'Pocket 1, Sector B4, Narela, New Delhi, Delhi, 110040',
      		distance:'4581'
      	},
      	{
      		name:'Police Help Center Sindhu Border',
      		address:'Grand Trunk Road, Sector 53, Kundli Industrial Area, Haryana, 131028',
      		distance:'4625'
      	}
      ]
    }
  },
  created(){
    this.$store.commit('setLocation');
  },
  mounted(){
    // axios.post('https://outpost.mapmyindia.com/api/security/oauth/token',{
    //   'grant_type': 'client_credentials',
    //   'client_id':'-------------',
    //   'client_secret':'--------------'
    // },{
    //     headers:{'Content-Type': 'application/x-www-form-urlencoded'}
    // }).then(res=>{
    //   console.log(res.data);
    // });
  },
  methods: {
    modalActive(modalHeading){
      document.querySelector('.modal').classList.add('is-active');
      this.modalHead='Near By '+modalHeading;
      if(modalHeading=='Hospitals'){
        this.dispList=Array.from(this.hospitalList);
      }else if(modalHeading=='Police Stations'){
        this.dispList=Array.from(this.policeList);
      }
    },
    modalClose(){
      document.querySelector('.modal').classList.remove('is-active');
      this.dispList=null;
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
    margin-left: 0.5em;

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