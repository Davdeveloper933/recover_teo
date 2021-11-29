<template>
  <div class="section-settings-menu__wrap">
  <v-list
      class="section-settings-menu white--text"
      color="#3C3F4F"
      :min-width="'311px'"
  >
    <v-list-item
        class="white--text d-flex flex-row align-center justify-space-between"
        v-for="(item, index) in settings"
        :key="index"
    >
      <v-list-item-title class="section-settings-menu__title">{{ item.title }}</v-list-item-title>
      <v-switch
          class="custom-switch"
          v-model="item.switch2"
          inset
          color="#232532"
      ></v-switch>
    </v-list-item>
  </v-list>
  </div>
</template>

<script>
export default {
  name: "SectionSettings",
  data () {
    return {
      switch1: true,
      switch2:false,
      settings: [
        {
          title: 'Видимость поиска',
          switch2:false
        },
        {
          title: 'Скрыть кнопку добавить',
          switch2:false
        },
        {
          title: 'Скрыть кнопку добавить',
          switch2:false
        },
        {
          title: 'Убрать действия у columns',
          switch2:false
        },
        {
          title: 'Кнопка добавить в панели',
          switch2:false
        },
        {
          title: 'Печать',
          switch2:false
        },
        {
          title: 'Скрыть CRUD',
          switch2:false
        },
        {
          title: 'Не отображать в меню',
          switch2:false
        },
        {
          title: 'Копирование строк',
          switch2:false
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>