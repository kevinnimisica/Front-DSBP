import Vue from 'vue'
import Vuex from 'vuex'
import {Authentication} from '../Integration/authentication.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
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
          context.commit("athenticate", {auth: true, user: credentials.username}),
          resolve()
        })
        .catch(()=>{
          context.commit(),
          reject()
        }) ;
      });
    },
    signUp(context, infromation){
      return new Promise((resolve, reject)=>{
        Authentication.signUp(infromation.username, infromation.email, infromation.password)
        .then(resolve())
        .catch(reject())
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
