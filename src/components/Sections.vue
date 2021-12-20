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
        <v-menu
            :close-on-content-click="false"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-list
                :key="sections.length"
                color="transparent"
                class="pa-0 list-group"
            >
            <draggable
                :list="sections"
                :disabled="!enabled"
                class="list-group"
                ghost-class="ghost"
                :move="checkMove"
                @start="dragging = true"
                @end="onDragEnd"
            >
                <v-list-group
                    v-for="(item,index) in sections"
                    :key="index"
                    class="items__group"
                    active-class="bg-active"
                    @click="sectionIsClicked(index)"
                    v-bind="attrs"
                    v-on="on"
                    @mouseover="isHovered = index"
                    @mouseleave="isHovered = false"
                >
                  <template
                      v-slot:activator
                  >
                    <v-list-item-content

                    >
                      <v-list-item-title class="items__title">
            <span class="mr-2">
              <ListSVG class="items__icon"/>
            </span>
                        {{ item.name }} ({{ item.translation }})
                      </v-list-item-title>
                      <IconsGroup
                          v-if="isHovered === index"
                      />
                    </v-list-item-content>
                  </template>
                </v-list-group>
            </draggable>
            </v-list>
          </template>
        </v-menu>
      </v-col>

      <transition name="fade">
        <Fields v-if="showFields === index" :sections="sections" :selected-section="sections[index]" :selected-index="index" />
      </transition>
      </v-row>
    <Table :key="index" :selected-index="index"/>
  </v-row>
</template>

<script>
import Fields from "./Sections/Fields";
import Table from "./Sections/Table";
import IconsGroup from "./IconsGroup";
import ListSVG from "./SVG/ListSVG";
import {bus} from "../main";
import sectionItem from "../../mixins/sectionItem";
import draggable from "vuedraggable";
import {mapMutations} from "vuex";

export default {
  name: "Sections",
  components: {Table, Fields, IconsGroup,ListSVG,draggable},
  mixins:[sectionItem],
  props: ['sections'],
  data () {
    return {
      showFields:false,
      index: null,
      active:false,
      dragging: false,
      enabled: true
    }
  },
  created() {
    bus.$on('sectionIsClicked',(index)=> {
      this.index = index
      this.showFields = index
    })
    bus.$on('hover:icons',(data)=> {
      this.isHovered = data
    })
  },
  computed: {
    // sections () {
    //     return JSON.parse(localStorage.getItem(`sections-${this.$route.params.id}`))
    // },
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    },
  },
  methods: {
    ...mapMutations(['updateFields','saveSectionsToLocalStorage']),
    onClickOutside() {
      if (this.isHovered == null) {
        this.isHovered = true
      }
      this.isHovered = false
    },
    checkMove: function() {
      // window.console.log("Future index: " + e.draggedContext.element);
      // console.log(this.sections)
      // this.updateFields(this.sections)
      // this.saveSectionsToLocalStorage()
    },
    onDragEnd() {
      this.dragging = false
      console.log(this.sections)
      this.updateFields(this.sections)
      this.saveSectionsToLocalStorage()
    }
  }
}
</script>

<style scoped>
.ghost {
  opacity: 0.5;
}
.items__group {
  cursor: move !important;
}
</style>
