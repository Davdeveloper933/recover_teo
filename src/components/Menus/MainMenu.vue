<template>
  <div class="main-menu">
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
          :items="items"
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
      <v-row class="ma-0 pa-0 align-center">
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
        ></v-text-field>
        <v-btn
          class="main-menu__tabs__btn"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-row>
      <v-row class="align-center main-menu__tabs__list ma-0 justify-space-between">
        <div class="main-menu__tab mr-3">
          <span class="main-menu__tab__title">Вкладка 1</span>
        </div>
        <v-btn
            class="main-menu__tabs__btn ma-0"
            color="#EC665E"
        >
          <img :src="require(`@/assets/img/icons/trash.svg`)" alt="">
        </v-btn>
      </v-row>
      <v-row class="align-center mt-6 mb-0 mx-0 pa-0 justify-space-between">
        <v-text-field
            class="main-menu__tabs__input"
            placeholder="Раздел"
        ></v-text-field>
        <v-btn
            class="main-menu__tabs__btn"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-row>
      <v-row class="align-center main-menu__tabs__list ma-0 justify-space-between">
        <v-select
            :items="items"
            color="#3C3F4F"
            class="custom-select mr-3 mt-0"
            placeholder="Разделы"
        >
        </v-select>
        <v-btn
            class="main-menu__tabs__btn ma-0"
            color="#EC665E"
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
export default {
  name: "MainMenu",
  components: {SectionSettings},
  data () {
    return {
      icons: {
        mdiMenuDown
      },
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
  }
}
</script>

<style scoped>

</style>