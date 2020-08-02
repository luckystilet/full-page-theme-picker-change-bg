export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    testAction_BB(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve('done BB!')
        },2000)
      }).then(r=>{
        return r
      })
    }
  },
  getters: {},
  modules: {}
}
