<template>
  <div class="main-menu" ref="main_menu">
    <v-row class="justify-space-between align-center mb-6">
      <h2 class="main-menu__title">Настройки</h2>
      <v-btn
          class="white--text save-btn generate-button btns"
          color="#3C3F4F"
          elevation="0"
      >
        Сохранить
      </v-btn>
    </v-row>
    <v-row class="flex-column">
      <label class="main-menu__label">
      Стартовая страница
      </label>
      <v-select
          :items="sections"
          color="#3C3F4F"
          class="custom-select"
          placeholder="Выберите"
      >
      </v-select>
    </v-row>
    <v-row class="flex-column mt-6">
      <label class="main-menu__label">
        Наименование проекта (читаемое)
      </label>
      <v-text-field
          color="#3C3F4F"
          class="custom-input pt-0"
          placeholder="Введите"
      >
      </v-text-field>
    </v-row>
    <v-row class="flex-column mt-8">
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
    </v-row>
    <v-row class="flex-column">
    <section-settings
      :settings="settings"
    ></section-settings>
    </v-row>
    <v-row class="mt-8 main-menu__tabs flex-column">
      <label class="main-menu__label">
        Вкладки
      </label>
      <v-row class="align-center mx-0 mb-0 mt-3 pa-0 justify-space-between">
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
      <v-row class="align-center mt-2 mb-0 mx-0 pa-0 justify-space-between">
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
            :items="sections"
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
</template>

<script>
import { mdiMenuDown } from '@mdi/js';
import SectionSettings from "./SectionSettings";
import {mapMutations} from "vuex";
export default {
  name: "MainMenu",
  components: {SectionSettings},
  data () {
    return {
      icons: {
        mdiMenuDown
      },
      tabTitle: null,
      selectTitle: null,
      settings: [
        {
          title: 'is_i18n',
          switch2:false
        },
        {
          title: 'Не генерировать меню',
          switch2:false
        },
        {
          title: 'Отключить миграцию',
          switch2:false
        },
        {
          title: 'Добавить модуль регистрации',
          switch2:false
        },
        {
          title: 'Верхнее меню',
          switch2:false
        },
        {
          title: 'API',
          switch2:false
        },
        {
          title: 'Авто бекап',
          switch2:false
        },
        {
          title: 'Скрыть из конструктора',
          switch2:false
        },
        {
          title: 'АПИ мобилки',
          switch2:false
        },
      ]
    }
  },
  mounted() {
    this.$parent.$el.classList.add('main-menu-position')
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
  }
}
</script>

<style scoped>

</style>