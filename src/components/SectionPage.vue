<template>
  <v-container
      class="section__container"
  >
  <v-row
      class="ma-xl-0"
  >
  <v-col
      cols="12"
      class="section"
  >
    <v-row class="section__top-buttons d-flex align-center">
      <v-dialog
          v-model="dialog"
          persistent
          :max-width="'74%'"
          :width="'100%'"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              class="white--text add-button btns"
              color="#3C3F4F"
              elevation="0"
              v-bind="attrs"
              v-on="on"
          >
            Добавить раздел
            <v-icon
                class="add-button__icon"
            >
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
          <create-section-modal :sections="sections" @close-modal="closeModal"/>
      </v-dialog>
      <v-btn
          class="white--text generate-button btns"
          color="#3C3F4F"
          elevation="0"
      >
        Сгенерировать
      </v-btn>
      <div
          class="dropdown-wrapper"
          @mouseleave="active = false"
          @mouseover="active = true"
      >
        <v-btn
            class="eye-button btns"
            color="#3C3F4F"
            elevation="0"
        >
          <img :src="require(`@/assets/img/icons/clock.arrow.svg`)" alt="">
        </v-btn>
        <transition name="fade">
        <History
            v-if="active"
            :history="history"
            @click-on-history="selectHistory"
        />
        </transition>
      </div>
      <v-btn
          class="eye-button btns"
          color="#3C3F4F"
          elevation="0"
          @click="saveProjectHistory"
      >
        <img :src="require(`@/assets/img/icons/save.svg`)" alt="">
      </v-btn>
    </v-row>
    <Sections :sections="sections" />
  </v-col>
  </v-row>
  </v-container>
</template>

<script>
import Sections from "./Sections";
import { mapMutations,mapActions } from 'vuex'
import History from "./Menus/History";
import CreateSectionModal from "./Modals/CreateSectionModal";
import axios from "axios";
export default {
  name: "SectionPage",
  components: {CreateSectionModal, History, Sections},
  data () {
    return {
      title:null,
      dialog: false,
      active:false,
      activeHistoryIndex:null,
      sections: []
    }
  },
  created() {
    const localStorageSection = JSON.parse(localStorage.getItem(`sections-${this.$route.params.id}`))
    const id = this.$route.params.id
    this.getProjectHistory(id)
    if (!localStorageSection) {
      localStorage.setItem(`sections-${this.$route.params.id}`,'[]')
      this.sections = localStorageSection
    }else {
      this.sections = localStorageSection
    }

    console.log(this.sections)
  },
  mounted() {
    // this.getSections()
  },
  watch:{

  },
  computed: {
    // sections () {
    //     const parsedStorage = JSON.parse(localStorage.getItem(`sections-${this.$route.params.id}`))
    //     return parsedStorage
    // },
    history() {
      console.log(this.$store.state.history)
      return this.$store.state.history
    }
  },
  methods:{
    ...mapMutations(['add','remove','saveSectionsToLocalStorage']),
    ...mapActions(['getProjectHistory','createProjectHistory']),
    // getSections () {
      // this.getProjectHistory(this.$route.params.id)
      // const history = this.$store.state.history
      // if (this.history) {
      //   this.sections = JSON.parse(this.history[this.history.length-1].value)
      //   console.log(this.history)
      // }else {
      //   this.sections = JSON.parse(localStorage.getItem(`sections-${this.$route.params.id}`))
      // }
    // },
    // addItem() {
    //   this.add({
    //     section: this.title,
    //     id: Math.ceil(Math.random()*1000000),
    //     translation: 'Translation',
    //     layout: {
    //       component: "Layout",
    //       props: {
    //         orientation: "vertical"
    //       },
    //       children: []
    //     }
    //   })
    //   this.saveSectionsToLocalStorage()
    //   console.log('updated sections',this.sections)
    //   this.dialog = false
    // },
    closeModal() {
      this.dialog = false
    },
    saveProjectHistory () {
      let form_data = new FormData()
      const project_id = this.$route.params.id
      const sections = this.sections
      const currentDate = new Date().toString()
      const id = this.$route.params.id
      form_data.append('project_id',project_id)
      form_data.append('value',JSON.stringify(sections))
      form_data.append('create_at',currentDate)
      form_data.append('on',1)
      this.createProjectHistory(form_data,id)
      const history = this.history
      localStorage.setItem(`sections-${this.$route.params.id}`,history[history.length-1].value)
      this.sections = JSON.parse(localStorage.getItem(`sections-${this.$route.params.id}`))
      console.log(currentDate)
    },
    selectHistory (index) {
      this.activeHistoryIndex = index
      // localStorage.setItem(`sections-${this.$route.params.id}`,this.history[index].value)
      // this.$store.commit('changeSectionsBySelectingHistory',JSON.parse(this.history[index].value))
      this.sections = JSON.parse(this.history[this.activeHistoryIndex].value)
      console.log('sections=',this.sections)
      console.log('current index',this.activeHistoryIndex)
    },
    createProjectHistory (form_data,id) {
      axios.post(`https://apigen.teo-crm.com/api/history/create`,form_data,{
        method: "POST"
      })
          .then(()=>{
            this.$store.dispatch('getProjectHistory',id)
          })
    },
  }
}
</script>

<style scoped>

</style>
