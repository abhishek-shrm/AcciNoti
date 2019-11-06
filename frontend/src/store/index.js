import Vue from "vue";
import Vuex from "vuex";
import createMutationsSharer from "vuex-shared-mutations";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lat:null,
    lng:null
  },
  mutations: {
    setLocation(state){
      if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(position=>{
          state.lat=position.coords.latitude;
          state.lng=position.coords.longitude;
        });
      }
    }
  },
  plugins:[createMutationsSharer({predicate:['setLocation']})],
  actions: {},
  modules: {}
});
