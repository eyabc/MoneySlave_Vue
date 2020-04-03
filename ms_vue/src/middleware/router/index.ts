import Vue from 'vue'
import VueRouter from 'vue-router'
import * as views from "@/views";

Vue.use(VueRouter);

// TODO user 에 따라 route restrict
const routes = [
  {
    path: '/',
    name: 'Landing',
    component: views.Landing,
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: views.Schedule,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
