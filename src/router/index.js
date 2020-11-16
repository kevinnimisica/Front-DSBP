import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store";


Vue.use(VueRouter)


const ifAuthenticated = (to, from, next) => {
  if (!store.getters["isAuthenticated"]) {      
    store
        .then(() => next())
        .catch(() => next("/login"));
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
]

const router = new VueRouter({
  routes
})

export default router
