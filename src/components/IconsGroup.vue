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
    <v-dialog
        v-model="dialog"
        persistent
        :max-width="'74%'"
        :width="'100%'"
    >
      <template v-slot:activator="{ on, attrs }">
    <div class="dropdown-wrapper"
         @mouseover="active = true"
         @mouseleave="active = false"
         v-bind="attrs"
         v-on="on"
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
      </template>
      <section-edit-modal :sections="sections" @close-modal="closeModal"/>
    </v-dialog>
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
    <v-dialog
        v-model="removeSectionDialog"
        persistent
        max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
    <v-btn class="icon-btn px-0 trash"
           :max-width="'32px'"
           :min-width="'32px'"
           color="#EC665E"
           v-bind="attrs"
           v-on="on"
    >
      <img :src="require(`@/assets/img/icons/trash.svg`)" alt="">
    </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Подтвердите удаление раздела
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="green darken-1"
              text
              @click="removeSectionDialog = false"
          >
            Отмена
          </v-btn>
          <v-btn
              color="green darken-1"
              text
              @click="$emit('remove-section')"
          >
            Удалить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    </template>
  </v-menu>
  </div>
</template>

<script>
import SectionSettings from "./Menus/SectionSettings";
import {bus} from "../main";
import SectionEditModal from "./Modals/SectionEditModal";

export default {
  name: "IconsGroup",
  components: {SectionEditModal, SectionSettings},
  props:['sections'],
  data () {
    return {
      active: false,
      dialog:false,
      removeSectionDialog:false,
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
    },
    closeModal() {
      this.dialog = false
    },
  }
}
</script>

<style scoped>

</style>
