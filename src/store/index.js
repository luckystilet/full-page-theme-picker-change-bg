import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createLogger from 'vuex/dist/logger'
import modules from './modules'


Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production';

const initialState = ()=> ({
  index: 1
})

const store = new Vuex.Store({
  state: initialState(),
  mutations: {
    RESET(state) {
      const newState = initialState()
      Object.keys(newState).forEach(key => {
        state[key] = newState[key]
      })
    },
    setIndex(s,p){
      s.index = p.index
      console.log("-----------s.index == ", s.index )
    }
  },
  actions: {},
  getters: {},
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
