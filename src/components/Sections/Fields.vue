<template>
  <v-col class="fields pt-4">
    <v-row color="#3C3F4F" class="pb-4 justify-space-between align-center">
<!--      <v-row class="d-flex justify-space-between">-->
<!--        <v-col cols="24">-->
            <v-col class="d-flex align-center">
        <v-icon color="white">{{ icons.mdiFormatListBulleted }}</v-icon>
        <v-toolbar-title class="white--text fields__title">
          {{ selectedSection.name }}
          <span class="fields__translation" v-if="selectedSection.translation">({{ selectedSection.translation }})</span>
        </v-toolbar-title>
            </v-col>
<!--        </v-col>-->
        <v-spacer></v-spacer>
        <v-col
            class="col-xl-2 d-flex justify-end align-start"
        >
          <v-btn
              color="transparent"
              elevation="0"
              class="fields__btn icon-btn chevron"
              @click="expandIcons = !expandIcons"
              :min-width="'10px'"
              :width="'10px'"
              v-click-outside="clickOutside"
          >
          <img :src="require(`@/assets/img/icons/chevron.backward.svg`)"
               class="icons"
               alt="arrow-left"
               :class="{'rotated': expandIcons}"
          >
          </v-btn>
          <div
              class="overflow-hidden"
              style="line-height: 0;display: inline-table;"
          >
          <transition name="slide-fade">
              <ExpandableIcons v-if="expandIcons" class="mr-2" />
          </transition>
          </div>
          <v-btn
              class="fields__btn icon-btn px-0"
              elevation="0"
          >
            <img :src="require(`@/assets/img/icons/bomb.svg`)" class="icons" alt="">
          </v-btn>
          <v-dialog
              v-model="dialog"
              persistent
              :max-width="'77%'"
              :width="'100%'"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  class="fields__btn icon-btn pa-0"
                  elevation="0"
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon class="icons">
                  mdi-plus
                </v-icon>
              </v-btn>
            </template>
            <create-field-modal :selected-section="selectedSection" @close-modal="closeModal" />
          </v-dialog>
        </v-col>
    </v-row>
    <LayoutTest :key="selectedIndex" :sections="sections" :selected-section="selectedSection" :selected-index="selectedIndex" />
  </v-col>
</template>

<script>
import { mdiFormatListBulleted } from '@mdi/js';
import LayoutTest from "../VueLayoutTest";
import {mapMutations} from "vuex";
import ExpandableIcons from "../Icons/ExpandableIcons";
import CreateFieldModal from "../Modals/CreateFieldModal";

export default {
  name: "Fields",
  components: {CreateFieldModal, ExpandableIcons, LayoutTest},
  props:['selectedSection','selectedIndex','sections'],
  data () {
    return {
      dialog:false,
      icons: {
        mdiFormatListBulleted
      },
      title: null,
      expandIcons:false
    }
  },
  computed:{
    // sections () {
    //   return JSON.parse(localStorage.getItem('sections'))?
    //       JSON.parse(localStorage.getItem('sections')):this.$store.state.sections
    // }
  },
  methods:{
    ...mapMutations(['updateFields','setSelectedItem','saveSectionsToLocalStorage','addField','addFieldsOfCurrentSection']),
    addFieldToFields () {
      const field = {
        component: "Layout",
        props: {
          orientation: "horizontal"
        },
        children:[
          {
            component: "Item",
            display: {
              weight: 1
            },
            props: {
              content: this.title
            }
          }
        ]
      }
      const currentField = {
        id: this.selectedSection.id,
        title: this.title
      }
      this.addFieldsOfCurrentSection(currentField)
      this.sections[this.selectedIndex].layout.children.push(field)
      this.setSelectedItem(this.selectedIndex)
      // this.addField(field)
      this.updateFields(this.sections)
      this.dialog = false
    },
    clickOutside () {
      this.expandIcons = false
    },
    closeModal() {
      this.dialog = false
    },
  }
}
</script>

<style scoped>

</style>
