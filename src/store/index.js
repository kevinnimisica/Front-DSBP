import Vue from 'vue'
import Vuex from 'vuex'
import {Authentication} from '../Integration/authentication.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: true,
    username:""
  },
  mutations: {
    athenticate(state, data){
      state.isAuthenticated = data.auth;
      if(data.auth){
        state.username = data.user
      }
    }
  },
  actions: {
    login(context, credentials){
      return new Promise((resolve, reject)=>{
        Authentication.login(credentials.username, credentials.password)
        .then(()=>{
          context.commit("authenticate", {auth: true, user: credentials.username}),
          resolve()
        })
        .catch(()=>{
          context.commit(),
          reject()
        }) ;
      });
    }
  },
  modules: {
  },

  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    getUser: (state) => state.username,
  },
})
