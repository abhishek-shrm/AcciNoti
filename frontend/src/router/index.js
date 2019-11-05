import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component:()=>import('../views/home.vue'),
    children:[
      {
        path:'',
        name:"Home",
        component:()=>import('../components/homeComponent.vue')
      },
      {
        path:'sos',
        name:'SOS',
        component:()=>import('../components/sosComponent.vue')
      },
      {
        path:'about-us',
        name:'About',
        component:()=>import('../components/about-us.vue')
      },
      {
        path:'emergency-contact',
        name:'Emergency',
        component:()=>import('../components/emergContact.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
