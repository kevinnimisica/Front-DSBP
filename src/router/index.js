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
    meta: { title: 'Login' }
},
{
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    meta: { title: 'Login' }
},
{
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
    meta: { title: 'About' },
    beforeEnter: ifAuthenticated,
},
{
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
    meta: { title: 'Home' },
    beforeEnter: ifAuthenticated,
},
{
  path: "/search",
  name: "search",
  component: () => import("../components/Search.vue"),
  meta: { title: 'Search' }
},
{
  path: "/patients",
  name: "patients",
  component: () => import("../components/Patients.vue"),
  meta: { title: 'Patients' }
},
{
  path: "/alarms",
  name: "alarms",
  component: () => import("../components/Alarms.vue"),
  meta: { title: 'Alarms' }
}
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  next()
});
export default router
