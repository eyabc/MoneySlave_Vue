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
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: views.Agenda
  },
  {
    path: '/user',
    name: 'User',
    component: views.User
  },
  {
    path: '/accout',
    name: 'Account',
    component: views.Account
  },
  {
    path: '/payment',
    mane: 'Payment',
    component: views.Payment
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
