<template>
  <v-col class="fields pt-4">
    <v-row color="#3C3F4F" class="pb-4 justify-space-between align-baseline">
<!--      <v-row class="d-flex justify-space-between">-->
<!--        <v-col cols="24">-->
            <v-col class="d-flex align-center">
        <v-icon color="white">{{ icons.mdiFormatListBulleted }}</v-icon>
        <v-toolbar-title class="white--text fields__title">
          {{ selectedSection.section }}
          <span class="fields__translation">({{ selectedSection.translation }})</span>
        </v-toolbar-title>
            </v-col>
<!--        </v-col>-->
        <v-spacer></v-spacer>
        <v-col class="col-xl-2 d-flex justify-end">
          <v-btn
              color="transparent"
              elevation="0"
              class="fields__btn icon-btn chevron"
          >
          <img :src="require(`@/assets/img/icons/chevron.backward.svg`)" class="icons" alt="arrow-left">
          </v-btn>
          <v-btn
              class="fields__btn icon-btn px-0"
              elevation="0"
          >
            <img :src="require(`@/assets/img/icons/bomb.svg`)" class="icons" alt="">
          </v-btn>
          <v-dialog
              v-model="dialog"
              persistent
              max-width="400"
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
            <v-card>

              <v-card-title class="text-h5">
                Добавить раздел
              </v-card-title>
              <v-card-text>
                <v-text-field v-model="title" label="Введите название"></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                  Закрыть
                </v-btn>
                <v-btn
                    color="green darken-1"
                    text
                    @click="addFieldToFields"
                >
                  Сохранить
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
    </v-row>
    <LayoutTest :key="selectedSection.layout.children.length" :selected-section="selectedSection" :selected-index="selectedIndex" />
  </v-col>
</template>

<script>
import { mdiFormatListBulleted } from '@mdi/js';
import LayoutTest from "../VueLayoutTest";
import {mapMutations} from "vuex";

export default {
  name: "Fields",
  components: {LayoutTest},
  props:['selectedSection','selectedIndex'],
  data () {
    return {
      dialog:false,
      icons: {
        mdiFormatListBulleted
      },
      title: null
    }
  },
  computed:{
    sections () {
      return this.$store.state.sections
    }
  },
  methods:{
    ...mapMutations(['updateFields','setSelectedItem']),
    addFieldToFields () {
      // const selectedSection = this.sections.find((item,index) => index === this.selectedIndex)
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
      this.setSelectedItem(this.selectedIndex)
      this.sections.forEach((section,index) => {
        if (index === this.selectedIndex) {
          section.layout.children.push(field)
        }
      })
      this.updateFields(this.sections)
    }
  }
}
</script>

<style scoped>

</style>