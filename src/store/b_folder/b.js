import bb from './bb_folder/bb'

export default {
  namespaced: true,
  state: {
    test: 30
  },
  mutations: {},
  actions: {
    testAction_B(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve('done B!')
        },2000)
      }).then(r=>{
        return r
      })
    }
  },
  getters: {},
  modules: {bb}
}
