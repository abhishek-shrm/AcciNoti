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
          name:'Sanjay Global Hospitals',
          address:'C-1971, Jahangir Puri, Main Road, New Subzi Mandi, Jahagipuri, Opposite K Block, New Delhi, Delhi, 110033',
          distance:'202'
        },
	      {
	      	name:'Babu Jagjivan Ram Hospital',
	      	address:'Jahangirpuri Road, Block A, Jahangirpuri, New Delhi, Delhi, 110033',
	      	distance:'451'
	      },
	      {
	      	name:'Sunil Ambulance Service',
	      	address:'Jahangirpuri Road, Block E4, Jahangirpuri, New Delhi, Delhi, 110033',
	      	distance:'452'
	      },
	      {
	      	name:'Sardar Lions Hospital',
	      	address:'Jahangir Puri, Jahangirpuri Road, New Delhi, Delhi, 110033',
	      	distance:'475'
	      },
	      {
	      	name:'SK Khim Pal Hospital',
	      	address:'Block E3, Jahangirpuri, New Delhi, Delhi, 110033',
	      	distance:'604'
	      },
	      {
	      	name:'Puneet Dental Hospital',
	      	address:'B 681 And 682, Jahangir Puri, New Delhi, Delhi, 110033',
	      	distance:'662'
	      },
	      {
	      	name:'Bansal Global Hospital',
	      	address:'Ramgarh, Bhalswa, Jahangpuri, New Delhi, Delhi, 110033',
	      	distance:'838'
	      },
	      {
	      	name:'Anand Maya International Hospital',
	      	address:'Block A, Ramgarh, New Delhi, Delhi, 110033',
	      	distance:'884'
	      },
	      {
	      	name:'Bhatia Hospital',
	      	address:'A 25, Ram Gardh Colony, GT Karnal Road, Vijay Nagar, Near GTK Bus Terminal & Janhagirpuri Metro Stat, New Delhi,       Delhi, 110033',
	      	distance:'891'
	      },
	      {
	      	name:'Veterinary Hospital',
	      	address:'Shani Bazar Road, Bishwnath Colony Bhalashwa Dairy, New Delhi, Delhi, 110042',
	      	distance:'1185'
	      }
      ],
      policeList:[
	      {
	      	name:'Police Help Centre',
	      	address:'K Block, Jahangir Puri, New Delhi, Delhi, 110033',
	      	distance:'34'
	      },
	      {
	      	name:'Police Help Centre',
	      	address:'Laldora Extension, Bhalswa Jahangir, New Delhi, Delhi, 110033',
	      	distance:'164'
	      },
	      {
	      	name:'Police Sahayata Kendra',
	      	address:'Block C2, Jahangirpuri, New Delhi, Delhi, 110033',
	      	distance:'500'
	      },
	      {
	      	name:'Police Sahayata Kendra',
	      	address:'Block I2, Jahangirpuri, New Delhi, Delhi, 110033',
	      	distance:'554'
	      },
	      {
	      	name:'Police Post A Block Jahangir Puri',
	      	address:'PS Mahindra Park, New Delhi, Delhi, 110033',
	      	distance:'583'
	      },
	      {
	      	name:'Police Sahayata Kendra',
	      	address:'Link Road, Block D, Jahangirpuri, New Delhi, Delhi, 110033',
	      	distance:'610'
	      },
	      {
	      	name:'Jahangirpuri Police Station',
	      	address:'North West District Jahangir Puri, New Delhi, Delhi, 110033',
	      	distance:'647'
	      },
	      {
	      	name:'Police Sahayata Kendra',
	      	address:'Dhobi Ghat Marg, DDA Flats Block G1, Sant Ravidas Nagar, Jahangirpuri, New Delhi, Delhi, 110033',
	      	distance:'776'
	      },
	      {
	      	name:'Mahendra Park Police Station',
	      	address:'Mahendra Park, Jahangirpuri, New Delhi, Delhi, 110033',
	      	distance:'906'
	      },
	      {
	      	name:'Police Booth Sahayta Kendra',
	      	address:'Sanjay Nagar, Jahangirpuri, New Delhi, Delhi, 110033',
	      	distance:'1136'
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