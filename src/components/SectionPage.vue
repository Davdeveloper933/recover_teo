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
          :max-width="'90%'"
          :width="'90%'"
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
          <create-section-modal @close-modal="closeModal"/>
      </v-dialog>
      <v-btn
          class="white--text generate-button btns"
          color="#3C3F4F"
          elevation="0"
      >
        Сгенерировать
      </v-btn>
      <v-btn
          class="eye-button btns"
          color="#3C3F4F"
          elevation="0"
      >
        <img :src="require(`@/assets/img/icons/eye-slash-fill.svg`)" alt="">
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
        />
        </transition>
      </div>
      <v-btn
          class="eye-button btns"
          color="#3C3F4F"
          elevation="0"
      >
        <img :src="require(`@/assets/img/icons/save.svg`)" alt="">
      </v-btn>
    </v-row>
    <Sections :key="sections.length "/>
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
      active:false
    }
  },
  computed: {
    sections() {
         return this.$store.state.sections
    }
  },
  methods:{
    ...mapMutations(['add','remove','saveSectionsToLocalStorage']),
    addItem() {
      this.add({
        section: this.title,
        id: Math.ceil(Math.random()*1000000),
        translation: 'Translation',
        layout: {
          component: "Layout",
          props: {
            orientation: "vertical"
          },
          children: []
        }
      })
      this.saveSectionsToLocalStorage()
      console.log('updated sections',this.sections)
      this.dialog = false
    },
    closeModal() {
      this.dialog = false
    },
  }
}
</script>

<style scoped>

</style>