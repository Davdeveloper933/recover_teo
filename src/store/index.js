import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: null,
    items: [
        {
            icon:'list.svg',
            title:'Заказ'
        },
        {
            icon:'list.svg',
            title:'Единица измерения'
        },
        {
            icon:'list.svg',
            title:'Справочник'
        },
        {
            icon:'list.svg',
            title:'Касса'
        }
    ],
  },
  mutations: {
      remove(state,index) {
          state.items.splice(index,1)
      },
      add(state,item) {
          state.items.push(item)
      },
      getConfigFromLayout(state,newConfig) {
          state.config = newConfig
          localStorage.setItem('config',JSON.stringify(state.config))
      }
  },
  actions: {
  },
  modules: {
  }
})
