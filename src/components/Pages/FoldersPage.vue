<template>
  <v-container
      class="section__container"
  >
    <v-tabs
        class="ma-0 folders d-flex flex-row"
        color="transparent"
        background-color="transparent"
        vertical
        active-class="tab-active"
        :transition="false"
    >
      <v-col
          class="col-3 folders__wrap"

      >
        <div class="mb-2 d-flex align-center justify-space-between folders__wrap__top">
          <h2 class="folders__wrap__title">Папки</h2>
          <v-btn
              class="fields__btn plus-btn icon-btn pa-0 mr-0"
              elevation="0"
              @click="addFolder"
          >
           <plus-s-v-g/>
          </v-btn>
        </div>
        <draggable
            class="list-group"
            :list="folders"
            :disabled="!enabled"
            ghost-class="ghost"
            @start="dragging = true"
            group="people"
        >
        <v-tab
            class="mt-3 ma-0 justify-space-between folders__wrap__item"
            v-for="(item,index) in folders"
            :key="index"
            @mouseover="hoverOnTab = index"
            @mouseleave="hoverOnTab = false"
        >
          <h2 class="folders__wrap__item__title">{{ item.title }}</h2>
          <div>
            <chevron-back/>
          </div>
          <folder-options-icons v-if="hoverOnTab === index" />
        </v-tab>
        </draggable>
      </v-col>
<!--      <v-col class="folders__tab">-->

<!--      </v-col>-->
      <v-tab-item
          class="pa-0 folders__tab col white--text"
          v-for="(item,index) in folders"
          :key="index"
          :transition="false"
      >
        <div class="folders__tab__content">
            <v-row
                class="ma-0 justify-space-between"
            >
              <h2 class="folders__wrap__title"
                  v-if="!editing"
                  @click="enableEditing(index)"
              >
                <span >{{ folders[index].title }}</span>
              </h2>
              <input type="text" class="edit__input" @blur="saveEdit(index)" v-model="title" v-if="editing">
              <v-dialog
                  v-model="dialog"
                  persistent
                  :max-width="'60%'"
                  :width="'100%'"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      class="white--text save-btn generate-button btns"
                      color="#3C3F4F"
                      elevation="0"
                      v-bind="attrs"
                      v-on="on"
                  >
                    Создать
                  </v-btn>
                </template>
                <create-form-modal @close-modal="closeModal" />
              </v-dialog>
            </v-row>
            <v-row class="mt-6 ma-0 folders__tab__content__task-container" v-if="item.content.length">
<!--              <v-row class="ma-0 justify-space-between">-->
                <draggable
                    class="list-group col-12 pa-0 d-flex flex-row flex-wrap ma-0 justify-space-between"
                    :list="item.content"
                    group="people"
                >
                <v-col class="mb-4 task__item pa-0"
                       v-for="(content,index) in item.content"
                       :key="index"
                       @mouseover="hoverOnTabContent = index"
                       @mouseleave="hoverOnTabContent = false"
                >
                  <div class="pb-3 d-flex align-start justify-space-between task__item__top">
                    <div class="d-flex align-start">
                    <span>
                      <list-s-v-g class="icon"/>
                    </span>
                    <h3 class="ml-3 task__title">solda.mir-cnm.com</h3>
                      </div>
                    <transition name="fade">
                    <folder-item-icons v-if="hoverOnTabContent === index" />
                    </transition>
                  </div>
                  <v-expansion-panels
                      class="task__expansion-panel"
                  >
                    <v-expansion-panel

                    >
                      <v-expansion-panel-header
                          class="task__item__bottom ma-0"
                      >
                        <div class="d-flex">
                          <span class="sections-count counter mr-6">Разделы:  44</span>
                          <span class="fields-count counter">Поля:  384</span>
                        </div>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content class="ma-0 task__item__expanded">
                        <div class="tasks-area"></div>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                </draggable>
<!--              </v-row>-->
            </v-row>
        </div>
      </v-tab-item>
    </v-tabs>
    </v-container>
</template>

<script>
import ChevronBack from "../SVG/ChevronBack";
import ListSVG from "../SVG/ListSVG";
import PlusSVG from "../SVG/PlusSVG";
import CreateFormModal from "../Modals/CreateFormModal";
import FolderOptionsIcons from "../Icons/FolderOptionsIcons";
import FolderItemIcons from "../Icons/FolderItemIcons";
import draggable from "vuedraggable";
export default {
  name: "FoldersPage",
  display: "Two Lists",
  order: 1,
  components: {FolderItemIcons, FolderOptionsIcons, CreateFormModal, PlusSVG, ListSVG, ChevronBack,draggable},
  data () {
    return {
      dialog:false,
      hoverOnTab: false,
      hoverOnTabContent: false,
      title: null,
      newTitle: null,
      editing:false,
      dragging: false,
      enabled: true,
      list2: [
        {
          title:'wowow'
        }
      ],
      folders: [
        {
          id:1,
          title:'В работе',
          content: [
            {

            },
            {

            },
            {

            },
            {

            }
          ]
        },
        {
          id:2,
          title:'На сдаче',
          content: [
          ]
        },
        {
          id:3,
          title:'Завершенные',
          content: [
          ]
        },
        {
          id:4,
          title:'Тестовые',
          content: [
          ]
        },
        {
          id:5,
          title:'Прочее',
          content: [
          ]
        },
      ],
      panels: [1,2,3,4]
    }
  },
  methods: {
    closeModal() {
      this.dialog = false
    },
    addFolder() {
      this.folders.unshift({
        title:'Новая папка',
        content:[]
      })
    },
    removeFolder(index) {
      this.folders.splice(index,1)
    },
    enableEditing: function(index){
      if (!this.title) {
        this.title = this.folders[index].title
      }
      this.folders[index].title = this.title
      this.newTitle = this.folders[index].title
      this.editing = true;
    },
    disableEditing: function(){
      this.title = null;
      this.editing = false;
    },
    saveEdit: function(index){
      // However we want to save it to the database
      this.folders[index].title = this.title
      this.disableEditing();
    },
    add: function() {
      this.folders.push({
        title:'Новая папка',
        content:[]
      })
    },
  }
}
</script>

<style scoped>

</style>