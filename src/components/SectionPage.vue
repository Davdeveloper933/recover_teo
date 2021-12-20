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
            v-if="true"
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
    <Sections :key="sections.length" :sections="sections"/>
  </v-col>
  </v-row>
  </v-container>
</template>

<script>
import Sections from "./Sections";
import { mapMutations } from 'vuex'
import History from "./Menus/History";
import CreateSectionModal from "./Modals/CreateSectionModal";
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
    this.$store.dispatch('getProjectHistory',this.$route.params.id)
  },
  mounted() {
    const history = this.$store.state.history
    const isThereSectionsInLocalStore = JSON.parse(localStorage.getItem(`sections-${this.$route.params.id}`))
    if (!history) {
      this.sections = isThereSectionsInLocalStore
    }else {
      this.sections = JSON.parse(history[history.length-1].value)
    }
    console.log(history)
  },
  computed: {
    // sections() {
    //      return JSON.parse(localStorage.getItem(`sections-${this.$route.params.id}`))
    // }
    history() {
      return this.$store.state.history
    }
  },
  methods:{
    ...mapMutations(['add','remove','saveSectionsToLocalStorage']),
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
      const sections = JSON.stringify(this.sections)
      const currentDate = new Date().toString()
      form_data.append('project_id',project_id)
      form_data.append('value',sections)
      form_data.append('create_at',currentDate)
      form_data.append('on',1)
      this.$store.dispatch('createProjectHistory',form_data)
      console.log(currentDate)
    },
    selectHistory (index) {
      this.activeHistoryIndex = index
      this.sections = JSON.parse(this.history[index].value)
    }
  }
}
</script>

<style scoped>

</style>
