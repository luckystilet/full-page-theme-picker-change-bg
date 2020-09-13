export default {
  state: {
    test: 20
  },
  mutations: {},
  actions: {
    testAction_A_2(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve('testAction_A_2')
        },1000)
      })
    },
    testAction_A({dispatch}){
      dispatch('testAction_A_2').then(r=>{
        console.log("testAction_A_2 r then == ", r )
      })
      // this.dispatch('testAction_B', {}).then(r=>{
      //   console.log("then from __A__ == ",  )
      // })
      
      
      dispatch('b/testAction_B', null, {root:true}).then(r=>{
        console.log("testAction_B in A", r )
      })
      
      dispatch('b/bb/testAction_BB', null, {root:true}).then(r=>{
        console.log("testAction_BB in A", r )
      })
      
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve('done! A')
        },2000)
      }).then(r=>{
        console.log("r == ", r )
      })
  

    }
    
    
  },
  getters: {},
  modules: {}
}
