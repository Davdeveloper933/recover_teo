<template>
  <div
      class="create-field-modal create-form-modal white--text"
      ref="create_field_modal"
  >
    <v-row class="create-section-modal__top mx-0 mb-5 mt-5 white--text justify-space-between align-baseline">
      <v-btn
          class="white--text back-btn justify-start"
          elevation="0"
          color="transparent"
          @click="$emit('close-modal')"
      >
        <img :src="require(`@/assets/img/icons/chevron.backward.svg`)" alt="">
        Назад
      </v-btn>
      <h2 class="create-section-modal__title">Настройки</h2>
      <v-btn
          v-if="openCreateModal"
          class="white--text save-btn generate-button btns"
          color="#3C3F4F"
          elevation="0"
          @click="projectCreate"
      >
        Создать
      </v-btn>
      <v-btn
          v-if="openEditModal"
          class="white--text save-btn generate-button btns"
          color="#3C3F4F"
          elevation="0"
          @click="projectUpdate"
      >
        Сохранить
      </v-btn>
    </v-row>
    <div class="d-flex flex-wrap justify-space-between align-center">
      <div class="col-6">
<!--          <v-row class="flex-column">-->
            <label class="main-menu__label">
              Стартовая страница
            </label>
        <v-text-field
            color="#3C3F4F"
            class="custom-input pt-0"
            placeholder="Введите"
            v-model="start_page"
        >
        </v-text-field>
<!--          </v-row>-->
        </div>
        <div class="col-6">
          <label class="main-menu__label">
            Наименование проекта (читаемое)
          </label>
          <v-text-field
              color="#3C3F4F"
              class="custom-input pt-0"
              placeholder="Введите"
              v-model="name"
              required
          >
          </v-text-field>
        </div>
        <div class="col-6">
          <label class="main-menu__label">
            Лого
          </label>
          <v-row class="ma-0 pa-0 align-baseline">
            <v-file-input
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Выберите файл"
                background-color="#3C3F4F"
                class="custom-file-input pt-0"
                :prepend-icon="''"
            ></v-file-input>
            <span class="no-files-chosen ml-5">Файл не выбран</span>
          </v-row>
        </div>
      </div>
    <div class="d-flex">
      <div class="col-6">
          <div class="section-settings-menu__wrap pt-0">
            <v-list
                class="section-settings-menu flex-row d-flex white--text"
                color="#3C3F4F"
                :min-width="'100%'"
            >
              <div class="col-12 pt-0" v-if="openCreateModal">
                <v-list-item
                    class="white--text d-flex flex-row align-center justify-space-between"
                    v-for="(item, index) in customization"
                    :key="index"
                >
                  <v-list-item-title class="section-settings-menu__title">{{ item.label }}</v-list-item-title>
                  <v-switch
                      class="custom-switch"
                      v-model="item.value"
                      inset
                      color="#232532"
                  ></v-switch>
                </v-list-item>
              </div>
              <div class="col-12 pt-0" v-if="openEditModal">
                <v-list-item
                    class="white--text d-flex flex-row align-center justify-space-between"
                    v-for="(item, index) in getCustomization"
                    :key="index"
                >
                  <v-list-item-title class="section-settings-menu__title">{{ item.label }}</v-list-item-title>
                  <v-switch
                      class="custom-switch"
                      v-model="item.value"
                      inset
                      color="#232532"
                  ></v-switch>
                </v-list-item>
              </div>
            </v-list>
          </div>
      </div>
      <div class="col-6">
        <v-row class="ma-0 main-menu__tabs flex-column">
        <label class="main-menu__label">
          Вкладки
        </label>
        <v-row class="align-center flex-nowrap mx-0 mb-0 mt-3 pa-0 justify-space-between">
          <v-text-field
              class="main-menu__tabs__input"
              placeholder="Наименование"
              v-model="tabTitle"
          ></v-text-field>
          <v-btn
              class="main-menu__tabs__btn"
              @click="addNewTab"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-row>
        <v-row class="flex-column ma-0"
               v-if="tabs.length"
        >
          <v-row
              class="align-center mb-4 main-menu__tabs__list ma-0 justify-space-between"
              v-for="(tab,index) in tabs"
              :key="index"
          >
            <div
                class="main-menu__tab mr-3"
            >
              <span class="main-menu__tab__title">{{ tab.title }}</span>
            </div>
            <v-btn
                class="main-menu__tabs__btn ma-0"
                color="#EC665E"
                @click="removeTab(index)"
            >
              <img :src="require(`@/assets/img/icons/trash.svg`)" alt="">
            </v-btn>
          </v-row>
        </v-row>
        <v-row class="align-center flex-nowrap mt-2 mb-0 mx-0 pa-0 justify-space-between">
          <v-text-field
              class="main-menu__tabs__input"
              placeholder="Раздел"
              v-model="selectTitle"
          ></v-text-field>
          <v-btn
              class="main-menu__tabs__btn"
              @click="addNewSelect"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-row>
        <v-row
            class="align-center mb-4 main-menu__tabs__list ma-0 justify-space-between"
            v-for="(tab,index) in tabSelects"
            :key="index"
        >
          <v-select
              :items="['item1','item2']"
              color="#3C3F4F"
              class="custom-select mr-3 mt-0"
              placeholder="Разделы"
          >
          </v-select>
          <v-btn
              class="main-menu__tabs__btn ma-0"
              color="#EC665E"
              @click="removeTabSelect(index)"
          >
            <img :src="require(`@/assets/img/icons/trash.svg`)" alt="">
          </v-btn>
        </v-row>
      </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import {mdiMenuDown} from "@mdi/js";
import {mapMutations} from "vuex";
import axios from "axios";

export default {
  name: "CreateFormModal",
  props: {
    id: {
      type:Number
    },
    projectId: {
      type:Number
    },
    openCreateModal: {
      type: Boolean
    },
    openEditModal: {
      type: Boolean
    }
  },
  data () {
    return {
      icons: {
        mdiMenuDown
      },
      tabTitle: null,
      selectTitle: null,
      name: null,
      link: null,
      start_page: "",
      label: null,
      value: null,
      project: null,
      getCustomization: null
    }
  },
  created() {
    if (this.openEditModal) {
      this.$store.dispatch('getProjects',this.id)
      const getProjects = this.$store.state.projects
      this.project = getProjects.find(project => project.id === this.projectId)
      this.getCustomization = JSON.parse(this.project.customization)
      this.name = this.project.name
      this.start_page = this.project.start_page
      console.log(this.getCustomization)
    }
    this.$store.dispatch('customizationProject')
  },
  mounted() {
    this.$parent.$el.classList.add('create-section-modal-styles')
    console.log(this.$parent.$el)
  },
  computed: {
    sections() {
      return this.$store.state.sections.map((section) => section.section)
    },
    tabs () {
      return this.$store.state.tabs
    },
    tabSelects () {
      return this.$store.state.tabSelects
    },
    customization () {
      return this.$store.state.customization
    },
    projects () {
      return this.$store.state.projects
    }
  },
  methods: {
    ...mapMutations(['addTab','removeTab','addTabSelect','removeTabSelect']),
    addNewTab () {
      if (this.tabTitle) {
        this.addTab({
          title: this.tabTitle
        })
      }
    },
    removeTab (index) {
      this.$store.commit('removeTab',index)
    },
    addNewSelect () {
      if (this.selectTitle) {
        this.addTabSelect('select')
      }
    },
    removeTabSelect (index) {
      this.$store.commit('removeTabSelect',index)
    },
    projectCreate () {
        let form_data = new FormData()
        const customization = this.customization
        form_data.append('name', this.name)
        form_data.append('sort', this.projects.length+1)
        form_data.append('folder_id', `${this.id}`)
        form_data.append('customization',JSON.stringify(customization))
        form_data.append('start_page', this.start_page)
        axios.post('https://apigen.teo-crm.com/api/project/create',form_data,
        {
          method: "POST"
        })
        .then(() => {
          this.$store.dispatch('getProjects',this.id)
          console.log(this.customization)
        })
        this.$emit('close-modal')
    },
    projectUpdate () {
      let form_data = new FormData()
      const customization = this.getCustomization
      const id = this.project.id
      form_data.append('name', this.name)
      form_data.append('folder_id', `${this.id}`)
      form_data.append('customization',JSON.stringify(customization))
      form_data.append('start_page', this.start_page)
      form_data.append('id', id)
      console.log(this.project)
      axios.post(`https://apigen.teo-crm.com/api/project/update?id=${id}`,form_data,
          {
            method: "POST"
          })
          .then(() => {
            this.$store.dispatch('getProjects',this.id)
            console.log(this.customization)
            this.$emit('close-modal')
          })
    },
  }
}
</script>

<style scoped lang="scss">
  .section-settings-menu {
    position: relative !important;
  }
</style>