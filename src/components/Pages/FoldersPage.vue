<template>
  <v-container
      class="section__container"
  >
    <v-row
        class="ma-0 folders d-flex flex-row"
        color="transparent"
        background-color="transparent"
        :transition="false"
    >
      <v-col
          class="col-5 folders__wrap"

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
        <v-list
            :key="folders.length"
            color="transparent"
            class="pa-0 list-group"
            :expand="false"
        >
        <draggable
            class="list-group"
            :move="checkMove"
            @end="dragEnd"
            :list="folders"
            :disabled="!enabled"
            ghost-class="ghost"
            @start="dragging = true"
            :group="{ name: 'folders', pull: 'clone', put: true }"
        >
        <v-list-group
            class="mt-3 pa-0 ma-0 justify-space-between folders__wrap__item"
            v-for="(folder,index) in folders"
            :key="folder.id"
            @mouseover="hoverOnTab = index"
            @mouseleave="hoverOnTab = false"
            :append-icon="''"
            active-class="tab-active"
            @click="clickOnFolder(index)"
        >
          <template
              v-slot:activator
          >
            <v-list-item-content
              class="flex-nowrap justify-space-between overflow-visible"
            >
          <h2 class="folders__wrap__item__title">{{ folder.name }}</h2>
          <div>
            <chevron-back/>
          </div>
          <folder-options-icons
              v-show="hoverOnTab === index"
              :id="folders[index].id"
              @remove-folder="removeFolder(folder)"
          />
            </v-list-item-content>
          </template>
        </v-list-group>
        </draggable>
        </v-list>
      </v-col>
<!--      <v-col class="folders__tab">-->

<!--      </v-col>-->
      <v-col
          class="pa-0 folders__tab white--text"
          v-if="folders[index]"
      >
        <div class="folders__tab__content">
            <v-row
                class="ma-0 justify-space-between"
            >
              <h2 class="folders__wrap__title"
                  v-if="!editing"
                  @click="enableEditing(index)"
              >
                <span>{{ folders[index].name }}</span>
              </h2>
              <input type="text" class="edit__input" @blur="saveEdit(index)" v-model="title" v-if="editing">
              <v-dialog
                  v-model="openCreateModal"
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
                <create-form-modal
                    :id="folders[index].id"
                    :open-create-modal="openCreateModal"
                    @close-modal="closeModal"
                ></create-form-modal>
              </v-dialog>
            </v-row>
          <project-item
              :key="folders[index].id"
              :id="folders[index].id"
              :open-create-modal="openCreateModal"
              :open-edit-modal="openEditModal"
          ></project-item>
        </div>
      </v-col>
    </v-row>
    </v-container>
</template>

<script>
import ChevronBack from "../SVG/ChevronBack";
import PlusSVG from "../SVG/PlusSVG";
import CreateFormModal from "../Modals/CreateFormModal";
import FolderOptionsIcons from "../Icons/FolderOptionsIcons";
import draggable from "vuedraggable";
import axios from "axios";
import ProjectItem from "../ProjectItem";
export default {
  name: "FoldersPage",
  display: "Two Lists",
  order: 1,
  components: {
    ProjectItem,FolderOptionsIcons, CreateFormModal, PlusSVG, ChevronBack,draggable},
  data () {
    return {
      openCreateModal:false,
      openEditModal:false,
      hoverOnTab: false,
      hoverOnTabContent: false,
      title: null,
      newTitle: null,
      editing:false,
      dragging: false,
      enabled: true,
      index: 0,
      showFolders:0,
      list2: [
        {
          title:'wowow'
        }
      ],
      panels: [1,2,3,4],
      draggedFolder: null,
      draggableFolder: null
    }
  },
  mounted() {
    this.getFolders()
    console.log(this.folders)
  },
  computed: {
    tabs () {
      return this.$store.state.tabs
    },
    customization () {
      return this.$store.state.customization
    },
    projects () {
      return this.$store.state.projects
    },
    folders() {
        return this.$store.state.folders
    }
  },
  methods: {
    getFolders () {
      axios.get(`https://apigen.teo-crm.com/api/folder/index/`,{
        method: "GET"
      })
          .then((data) => {
            this.$store.commit('getFolders',data.data)
            console.log(this.folders)
          })
    },
    clickOnFolder (index) {
      this.index = index
      this.showFolders = index
    },
    closeModal() {
      this.openCreateModal = false
    },
    addFolder() {
      let form_data = new FormData()
      form_data.append('name','Новая папка')
      form_data.append('sort',this.folders.length+1)
      axios.post('https://apigen.teo-crm.com/api/folder/create/',form_data,{
      },{
        method:"POST",
      })
      .then(() => {
        this.getFolders()
      })
    },
    updateFolder (folder,form_data) {
      axios.post(`https://apigen.teo-crm.com/api/folder/update?id=${folder.id}/`,form_data,{
        method:"POST"
      })
          .then(() => {
            this.getFolders()
          })
    },
    removeFolder(folder) {
      axios.post(`https://apigen.teo-crm.com/api/folder/delete?id=${folder.id}/`,{
        method:"POST"
      })
          .then(() => {
            this.getFolders()
          })
    },
    enableEditing: function(index){
      if (!this.title) {
        this.title = this.folders[index].name
      }
      this.folders[index].name = this.title
      this.newTitle = this.folders[index].name
      this.editing = true;
    },
    disableEditing: function(){
      this.title = null;
      this.editing = false;
    },
    saveEdit: function(index){
      // However we want to save it to the database
      this.folders[index].name = this.title
      let form_data = new FormData()
      form_data.append('name',this.title)
      this.updateFolder(this.folders[index],form_data)
      this.disableEditing();
    },
    dragEnd() {
      const folderIds = []
      let isDraggableElementIsFolder
      this.folders.forEach((folder) => {
        folderIds.push(folder.id)
      })
      if (this.draggableFolder) {
        isDraggableElementIsFolder = folderIds.includes(this.draggableFolder.id)
      }

      if (isDraggableElementIsFolder) {
        let form_data = new FormData()
        let form_data2 = new FormData()
        form_data.append('sort',this.draggedFolder.sort)
        form_data2.append('sort',this.draggableFolder.sort)
        this.updateFolder(this.draggableFolder,form_data)
        this.updateFolder(this.draggedFolder,form_data2)
        console.log(this.folders)
      }
    },
    checkMove(evt){
      this.draggableFolder = evt.relatedContext.element
      this.draggedFolder = evt.draggedContext.element
      // this.removeProject(draggedProject.id)
      // console.log('value' ,this.draggableFolder)
      if (this.draggableFolder) {
        return true
      }
      return false
    },
}
}
</script>

<style scoped>

</style>
