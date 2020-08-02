import Vue from 'vue'
import Vuex from 'vuex'

import a from './a_folder/a'
import b from './b_folder/b'
import axios from 'axios'

 Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    test: 10
  },
  mutations: {},
  actions: {
    testAction_MAIN(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve('done! MAIN')
        },2000)
      }).then(r=>{
        console.log("r == ", r )
      })
    }
  },
  getters: {},
  modules: {a,b}
})

export default store
