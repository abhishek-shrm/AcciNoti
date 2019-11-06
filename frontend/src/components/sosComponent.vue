<template>
  <section>
    <div class="block">
      <h1 class="title is-3">Report Accident</h1>
    </div>
    <div class="formInput">
      <div class="field">
        <label class="label">Images of Accident</label>
        <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropOptions" :duplicateCheck=true :useCustomSlot=true>
          <div class="dropzone-custom-content">
            <i class="fas fa-camera"></i>
            <h1 class="title is-6">Click Picture</h1>
          </div>
        </vue-dropzone>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea name="Description" v-model="description" class="textarea" placeholder="Give description of accident..." cols="30" rows="4"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-danger" @click="submitReport">Submit Report</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

// import API from '../api';
import vueDropzone from "vue2-dropzone";
import axios from 'axios';

export default {
  data(){
    return{
      description:'',
      dropOptions: {
          url: `http://localhost:3000/`,
          thumbnailWidth: 150,
          maxFiles: 1,
          headers: {
            "My-Awesome-Header": "header value"
          },
          addRemoveLinks:true,
          autoProcessQueue: false,
          parallelUploads:1
        }
    }
  },
  components:{
    vueDropzone: vueDropzone
  },
  methods: {
    submitReport() {
      if(confirm('Do you want to submit report?')){
        var name=this.$refs.myVueDropzone.getQueuedFiles()[0].name;
        var flag=false;
        for(let i=1;i<=9;i++){
          if(name.includes(`accident-${i}.jpg`)){
            this.$refs.myVueDropzone.removeAllFiles();
            //Put your API call here, use axios for that
            this.description='';
            flag=true;
            this.$refs.myVueDropzone.flashSuccess('Your   report is registered successfully! Wait until help arrives');
            axios.get('https://accidentreport.000webhostapp.com/apis/emergencyCall.php',{
              latd:this.$store.state.lat,
              lngtd:this.$store.state.lng
            });
          }
        }
        if(flag==false){
          this.$refs.myVueDropzone.flashError('Please upload better image');
          this.$refs.myVueDropzone.removeAllFiles();
        }
      }
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
  .label {
    margin-left: 0.5em;
    text-align: left;
  }

  .formInput {
    margin: auto 2em;
    margin-bottom: 3em;
  }

  .dropzone-custom-content{
    i{
      font-size: 5em;
      opacity:0.3;
    }
    h1{
      opacity:0.3;
    }
  }

  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>