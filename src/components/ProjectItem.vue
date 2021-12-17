<template>
  <v-row class="mt-6 ma-0 folders__tab__content__task-container">
    <!--              <v-row class="ma-0 justify-space-between">-->
    <draggable
        class="list-group col-12 pa-0 d-flex flex-row flex-wrap ma-0 justify-space-between"
        :move="checkMove"
        @end="dragEnd"
        @start="dragging = true"
        :disabled="!enabled"
        :list="projects"
        :group="{ name: 'folders', put: false }"
    >
      <v-col class="mb-4 task__item pa-0"
             v-for="(project,index) in projects"
             :key="project.id"
             @mouseover="hoverOnTabContent = index"
             @mouseleave="hoverOnTabContent = false"
      >
        <div class="pb-3 d-flex align-start justify-space-between task__item__top">
          <div class="d-flex align-start">
                    <span>
                      <list-s-v-g class="icon"/>
                    </span>
            <h3 class="ml-3 task__title">{{ project.name }}</h3>
          </div>
          <transition name="fade">
            <folder-item-icons
                v-show="hoverOnTabContent === index"
                @remove-project="removeProject(project.id)"
                :id="id"
                :project-id="project.id"
            ></folder-item-icons>
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
</template>

<script>
import axios from "axios";
import FolderItemIcons from "./Icons/FolderItemIcons";
import ListSVG from "./SVG/ListSVG";
import draggable from "vuedraggable";

export default {
  name: "ProjectItem",
  components:{FolderItemIcons,ListSVG,draggable},
  props: {
    id: {
      type: Number
    },
    openCreateModal: {
      type: Boolean
    },
    selectedIndex: {
      type: Number
    }
  },
  data () {
    return {
      hoverOnTabContent: false,
      // projects: []
      dragging: false,
      enabled: true,
      draggedProject: null,
      draggableFolder: null
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
    folders() {
      return this.$store.state.folders
    },
  },
  created() {
    // this.getProjects(this.id)
    this.$store.dispatch('getProjects',this.id)
  },
  methods: {
    // ...mapActions(['getProjects']),
    // getProjects (id) {
    //   axios.get(`https://apigen.teo-crm.com/api/project/index?id=${id}`,{
    //     method: "GET"
    //   })
    //       .then((data) => {
    //         this.projects = data.data
    //       })
    // },
    removeProject (id) {
      axios.get(`https://apigen.teo-crm.com/api/project/delete?id=${id}`,{
        method: "GET"
      })
      .then(() => {
        this.$store.dispatch('getProjects',this.id)
      })
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

      if (this.draggedProject
      && isDraggableElementIsFolder) {
        let form_data = new FormData()
        form_data.append('name', this.draggedProject.name)
        form_data.append('folder_id', `${this.draggableFolder.id}`)
        this.projectUpdate(this.draggedProject,form_data)
        this.$store.dispatch('getFolders')
        console.log('project id',this.draggedProject.id)
        console.log('folder id',this.draggableFolder.id)
      }
      if (this.draggedProject && !isDraggableElementIsFolder) {
        let form_data = new FormData()
        let form_data2 = new FormData()
        form_data.append('sort', this.draggableFolder.sort)
        form_data2.append('sort', this.draggedProject.sort)
        this.projectUpdate(this.draggableFolder,form_data2)
        this.projectUpdate(this.draggedProject,form_data)
        this.$store.dispatch('getFolders')
        console.log(this.projects)
      }
    },
    checkMove(evt){
      // let move = false
      const folderIds = []
      let isDraggableElementIsFolder
      this.folders.forEach((folder) => {
        folderIds.push(folder.id)
      })

      this.draggableFolder = evt.relatedContext.element
      this.draggedProject = evt.draggedContext.element
      // this.removeProject(draggedProject.id)
      console.log('draggableFolder' ,this.draggableFolder)
      console.log('isDraggableElementIsFolder' ,isDraggableElementIsFolder)
      let move = false
      if (this.draggableFolder) {
        isDraggableElementIsFolder = folderIds.includes(this.draggableFolder.id)
        if (!isDraggableElementIsFolder) {
          move = true
        }
      }
      return move
    },
    log(){
      // const folder = evt.relatedContext.element
      // const draggedProject = evt.element
      // this.removeProject(draggedProject)
      // console.log(added)
    },
    projectUpdate (project,form_data) {
      axios.post(`https://apigen.teo-crm.com/api/project/update?id=${project.id}`,form_data,
          {
            method: "POST"
          })
          .then(() => {
            this.$store.dispatch('getProjects',this.id)
          })
    },
  }
}
</script>

<style scoped>

</style>