<template>
  <div>
  <v-menu
  >
    <template v-slot:activator="{ on, attrs }">
  <v-row class="icons__wrapper"
         v-bind="attrs"
         v-on="on"
  >
    <v-btn class="icon-btn px-0 plus"
           :max-width="'32px'"
           :min-width="'32px'"
    >
      <img :src="require(`@/assets/img/icons/plus.svg`)" alt="">
    </v-btn>
<!--    <v-menu-->
<!--        bottom-->
<!--        :close-on-content-click="false"-->
<!--        open-on-click-->
<!--        class="mt-10"-->
<!--    >-->
<!--      <template v-slot:activator="{ on, attrs }">-->
<!--      <v-btn class="icon-btn px-0 gear"-->
<!--             :max-width="'32px'"-->
<!--             :min-width="'32px'"-->
<!--             color="#5E7DEC"-->
<!--             v-bind="attrs"-->
<!--             v-on="on"-->
<!--      >-->
<!--        <img :src="require(`@/assets/img/icons/gear-circle.svg`)" alt="">-->
<!--      </v-btn>-->
<!--      </template>-->
<!--      <section-settings />-->
<!--    </v-menu>-->
    <div class="dropdown-wrapper"
         @mouseover="active = true"
         @mouseleave="active = false"
    >
            <v-btn class="icon-btn px-0 gear"
                   :max-width="'32px'"
                   :min-width="'32px'"
                   color="#5E7DEC"
                   v-bind="attrs"
                   v-on="on"
            >
              <img :src="require(`@/assets/img/icons/gear-circle.svg`)" alt="">
            </v-btn>
      <section-settings
          v-if="active"
          v-click-outside="onClickOutside"
          :settings="settings"
      />
    </div>
    <v-btn class="icon-btn px-0 doc"
           :max-width="'32px'"
           :min-width="'32px'"
           color="#307BC1"
    >
      <img :src="require(`@/assets/img/icons/doc.svg`)" alt="">
    </v-btn>
    <v-btn class="icon-btn px-0 chevron"
           :max-width="'32px'"
           :min-width="'32px'"
           color="#FEAC0D"
    >
      <img :src="require(`@/assets/img/icons/chevron.svg`)" alt="">
    </v-btn>
    <v-btn class="icon-btn px-0 trash"
           :max-width="'32px'"
           :min-width="'32px'"
           color="#EC665E"
    >
      <img :src="require(`@/assets/img/icons/trash.svg`)" alt="">
    </v-btn>
  </v-row>
    </template>
  </v-menu>
  </div>
</template>

<script>
import SectionSettings from "./Menus/SectionSettings";
import {bus} from "../main";

export default {
  name: "IconsGroup",
  components: {SectionSettings},
  data () {
    return {
      active: false,
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
  },
  methods: {
    onClickOutside() {
      if (this.active) {
        this.active = false
      }
    },
    showIcons () {
      this.active = !this.active
      bus.$emit('hover:icons',this.active)
    }
  }
}
</script>

<style scoped>

</style>