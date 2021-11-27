<template>
  <v-row class="sections d-block mt-16">
    <h2
        class="sections__title"
    >
      Разделы
    </h2>
    <v-row
        class="ma-0 justify-space-between flex-column flex-lg-row d-flex"
    >
      <v-col class="px-0 py-0 items">
        <v-list
            :key="sections.length"
            color="transparent"
            class="pa-0"
        >
          <v-list-group
              v-for="(item,index) in sections"
              :key="index"
              class="items__group"
              active-class="bg-active"
              @mouseover="isHovered = index"
              @mouseleave="isHovered = false"
              @click="sectionIsClicked(index)"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="items__title">
            <span class="mr-2">
              <ListSVG class="items__icon"/>
            </span>
                  {{ item.section }}
                </v-list-item-title>
              </v-list-item-content>
              <transition name="fade">
                <IconsGroup v-if="isHovered === index"/>
              </transition>
            </template>
          </v-list-group>
        </v-list>
      </v-col>
      <transition name="fade">
        <Fields v-if="showFields === index" :selected-section="sections[index]" :selected-index="index" />
      </transition>
      </v-row>
    <Table/>
  </v-row>
</template>

<script>
import Fields from "./Sections/Fields";
import Table from "./Sections/Table";
import IconsGroup from "./IconsGroup";
import ListSVG from "./SVG/ListSVG";
import {bus} from "../main";
import sectionItem from "../../mixins/sectionItem";

export default {
  name: "Sections",
  components: {Table, Fields, IconsGroup,ListSVG},
  // props:{
  //   index:{
  //     type:Number
  //   }
  // },
  mixins:[sectionItem],
  data () {
    return {
      showFields:false,
      index: null
    }
  },
  created() {
    bus.$on('sectionIsClicked',(index)=> {
      this.index = index
      this.showFields = index
    })
  },
  computed: {
    sections () {
        return this.$store.state.sections
    }
  }
}
</script>

<style scoped>

</style>