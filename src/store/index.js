import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: null,
    sections: [],
    tabs: [],
    tabSelects: [],
    fields:[],
    folders: [],
    projects: [],
    selectedItem: null,
    baseURL: 'https://apigen.teo-crm.com/',
    customization: [],
    updateCustomization: [],
    customizationSection: [],
    history:[]
  },
  mutations: {
      getFolders (state,data) {
          state.folders = data.sort((a,b)=> {
              return a.sort - b.sort
          })
      },
      getProjects (state,data) {
          state.projects = data.sort((a,b)=> {
              return a.sort - b.sort
          })
      },
      getSections (state) {
                state.sections = JSON.parse(state.history[state.history.length - 1].value)
      },
      changeSectionsBySelectingHistory(state,data) {
          state.sections = data
      },
      getCustomization (state,data) {
          state.customization = data
      },
      updateCustomization (state,data) {
          state.updateCustomization = data
      },
      getCustomizationSection (state,data) {
          state.customizationSection = data
      },
      getProjectHistory (state,data) {
          state.history = data
      },
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
      addTabSelect(state,tab) {
          state.tabSelects.push(tab)
      },
      removeTabSelect(state,index) {
          state.tabSelects.splice(index,1)
      },
      saveSectionsToLocalStorage(id) {
          localStorage.setItem(`sections-${JSON.stringify(id)}`,'[]')
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
      getFolders (context) {
          axios.get(`https://apigen.teo-crm.com/api/folder/index`,{
             method: "GET"
         })
              .then((data) => {
                  context.commit('getFolders',data.data)
              })
      },
      getProjects (context,id) {
          axios.get(`https://apigen.teo-crm.com/api/project/index?id=${id}`,{
              method: "GET"
          })
              .then((data) => {
                  context.commit('getProjects',data.data)
              })
      },
      customizationProject (context) {
          axios.get('https://apigen.teo-crm.com/api/customization-project/index')
              .then((customization) => {
                  context.commit('getCustomization',customization.data)
              })
      },
      updateCustomization (context,id) {
          axios.get(`https://apigen.teo-crm.com/api/customization-project/view?id=${id}`)
              .then((customization) => {
                  context.commit('updateCustomization',customization.data.customization)
              })
      },
      customizationSection (context) {
          axios.get('https://apigen.teo-crm.com/api/customization-section/index')
              .then((customization) => {
                  context.commit('getCustomizationSection',customization.data)
              })
      },
      createProjectHistory (context,form_data) {
          axios.post(`https://apigen.teo-crm.com/api/history/create`,form_data,{
              method: "POST"
          })
      },
      getProjectHistory (context,id) {
          axios.get(`https://apigen.teo-crm.com/api/history?id=${id}`,{
              method: "GET"
          })
              .then((history)=>{
                  context.commit('getProjectHistory',history.data)
              })
      }
  },
  modules: {
  }
})
