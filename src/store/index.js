import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: null,
    sections: [],
    tabs: [],
    fields:[],
    selectedItem: null
  },
  mutations: {
      initialiseStore(state) {
          if (JSON.parse(localStorage.getItem('sections'))) {
              state.sections = JSON.parse(localStorage.getItem('sections'))
          }
      },
      initialiseFields(state) {
          if (JSON.parse(localStorage.getItem('fields'))) {
              state.fields = JSON.parse(localStorage.getItem('fields'))
          }
      },
      remove(state,index) {
          state.sections.splice(index,1)
      },
      add(state,item) {
          state.sections.push(item)
      },
      addField(state,field) {
          state.selectedItem.layout.children.push(field)
      },
      addTab(state,tab) {
          state.tabs.push(tab)
      },
      removeTab(state,index) {
          state.tabs.splice(index,1)
      },
      saveSectionsToLocalStorage(state) {
          localStorage.setItem('sections',JSON.stringify(state.sections))
      },
      updateFields(state,sections) {
          state.sections = sections
          localStorage.setItem('sections',JSON.stringify(state.sections))
      },
      saveFieldPositions(state,config) {
        state.selectedItem.layout.children = config
        localStorage.setItem('sections',JSON.stringify(state.sections))
      },
      setSelectedItem(state,selectedIndex) {
          // state.selectedItem = state.sections.find((item,index) => index === selectedIndex)
          state.selectedItem = state.sections[selectedIndex]
      },
      addFieldsOfCurrentSection (state,field) {
          state.fields.push(field)
          localStorage.setItem('fields',JSON.stringify(state.fields))
      }
  },
  actions: {
  },
  modules: {
  }
})
