export default {
  state: {},
  mutations: {},
  actions: {
    getIndex({commit}, p){
      setTimeout(()=>{
        commit('setIndex', {index: 12})
      },0)
    }
  },
  getters: {},
  modules: {}
}
