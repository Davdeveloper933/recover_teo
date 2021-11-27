import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: null,
    sections: [],
    selectedItem: null
  },
  mutations: {
      initialiseStore(state) {
          if (localStorage.getItem('sections')) {
              state.sections = JSON.parse(localStorage.getItem('sections'))
          }
      },
      remove(state,index) {
          state.sections.splice(index,1)
      },
      add(state,item) {
          state.sections.push(item)
      },
      saveSectionsToLocalStorage(state) {
          localStorage.setItem('sections',JSON.stringify(state.sections))
      },
      updateFields(state,sections) {
          state.sections = sections
          localStorage.setItem('sections',JSON.stringify(state.sections))
      },
      saveFieldPositions(state,config) {
        state.selectedItem.layout = config
        localStorage.setItem('sections',JSON.stringify(state.sections))
      },
      setSelectedItem(state,selectedIndex) {
          // state.selectedItem = state.sections.find((item,index) => index === selectedIndex)
          state.selectedItem = state.sections[selectedIndex]
      }
  },
  actions: {
  },
  modules: {
  }
})
