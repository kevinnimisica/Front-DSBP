import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store";


Vue.use(VueRouter)


const ifAuthenticated = (to, from, next) => {
  if (store.getters["isAuthenticated"]) {      
    next()
    return;
  } else {
    next('/login')
  }
  next();
};

const routes = [
  {
    path: "/",
    redirect: "login",
},
{
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
},
{
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
    beforeEnter: ifAuthenticated,
},
{
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
    beforeEnter: ifAuthenticated,
},
{
  path: "/search",
  name: "search",
  component: () => import("../components/Search.vue")
},
{
  path: "/patients",
  name: "patients",
  component: () => import("../components/Patients.vue")
},
{
  path: "/alarms",
  name: "alarms",
  component: () => import("../components/Alarms.vue")
}
]

const router = new VueRouter({
  routes
})

export default router
