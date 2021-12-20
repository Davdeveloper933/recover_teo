<template>
  <div
      class="create-field-modal white--text"
      ref="create_field_modal"
      @click="onClickOutside"
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
      <h2 class="create-section-modal__title">Создание поля</h2>
      <v-btn
          class="white--text save-btn generate-button btns"
          color="#3C3F4F"
          elevation="0"
      >
        Сохранить
      </v-btn>
    </v-row>
    <div class="d-flex justify-space-between align-baseline">
      <div class="name pa-0 col-9">
        <v-row class="align-baseline mb-5 justify-space-between mx-0">
          <v-col class="flex-column col-6 px-0">
            <label class="create-section-modal__label create-section-modal__subtitle">
              Наименование (на русском)
            </label>
            <v-text-field
                color="#3C3F4F"
                class="custom-input pt-0"
                placeholder="Введите"
                v-model="nameInRussian"
            >
            </v-text-field>
          </v-col>
          <v-col class="flex-column col-6 px-3">
            <div>
              <label class="create-section-modal__label create-section-modal__subtitle">
                Наименование (на английском)
              </label>
              <v-text-field
                  color="#3C3F4F"
                  class="custom-input pt-0"
                  placeholder="Введите"
                  v-model="nameInEnglish"
              >
              </v-text-field>
            </div>
            <div class="name-translate d-flex align-center">
              <translate-s-v-g/>
              <span>name</span>
            </div>
          </v-col>
        </v-row>
        <v-row class="mb-12 ma-0">
          <v-col
              class="modules py-0 pl-0 col-12"
          >
            <h2 class="create-section-modal__subtitle mb-2">Модули</h2>
            <v-row
                class="ma-0 modules__inner"
            >
              <!--            <v-row class="ma-0 modules__inner__first">-->
              <v-col class="col-4 pr-8 pa-0 modules__item">
                <v-row
                    class="mx-0 mt-0 align-center flex-nowrap justify-space-between"
                    v-for="(item,index) in modules.column1"
                    :key="index"
                >
                  <span>{{ item.title }}</span>
                  <v-switch
                      class="custom-switch"
                      v-model="item.switch"
                      inset
                      color="#232532"
                  ></v-switch>
                </v-row>
              </v-col>
              <v-col class="col-4 pr-8 pl-8 pa-0 modules__item">
                <v-row
                    class="mx-0 mt-0 align-center flex-nowrap justify-space-between"
                    v-for="(item,index) in modules.column2"
                    :key="index"
                >
                  <span>{{ item.title }}</span>
                  <v-switch
                      class="custom-switch"
                      v-model="item.switch"
                      inset
                      color="#232532"
                  ></v-switch>
                </v-row>
              </v-col>
              <v-col class="col-4 pl-8 pa-0 modules__item">
                <v-row
                    class="mx-0 mt-0 align-center flex-nowrap justify-space-between"
                    v-for="(item,index) in modules.column3"
                    :key="index"
                >
                  <span>{{ item.title }}</span>
                  <v-switch
                      class="custom-switch"
                      v-model="item.switch"
                      inset
                      color="#232532"
                  ></v-switch>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div>
        <div class="pa-0 localization-block expanded"
        >
          <div class="mb-5">
            <label class="create-section-modal__label create-section-modal__subtitle">
              i18n
            </label>
            <v-text-field
                color="#3C3F4F"
                class="custom-input pt-0"
                placeholder="Введите"
            >
            </v-text-field>
          </div>
          <v-row class="align-baseline mb-5 ma-0 justify-space-between">
            <v-col class="align-baseline ma-0 col-6 pr-2 pa-0">
              <label class="create-section-modal__subtitle">
                Этап
              </label>
              <v-select
                  :items="items"
                  color="#3C3F4F"
                  class="custom-select"
                  placeholder="Выберите"
              >
              </v-select>
            </v-col>
            <v-col class="align-baseline ma-0 pa-0 col-6">
              <label class="create-section-modal__subtitle">
                Размер
              </label>
              <v-select
                  :items="items"
                  color="#3C3F4F"
                  class="custom-select"
                  placeholder="Выберите"
              >
              </v-select>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col class="align-baseline ma-0 pa-0 col-12">
              <label class="create-section-modal__subtitle">
                Меню
              </label>
              <v-select
                  :items="items"
                  color="#3C3F4F"
                  class="custom-select"
                  placeholder="Выберите"
              >
              </v-select>
            </v-col>
          </v-row>
          <v-row class="ma-0" >
            <v-col class="align-baseline ma-0 pa-0 col-12"

            >
              <v-menu
                  offset-y
                  :close-on-content-click="false"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      color="#3C3F4F"
                      v-bind="attrs"
                      v-on="on"
                      width="100%"
                      class="white--text field-type__btn"
                      :class="{'dropdown-opened': dropDownIsOpened}"
                      @click="dropDownIsOpened = !dropDownIsOpened"
                  >
                    Тип поля
                    <chevron-down/>
                  </v-btn>
                </template>
                <field-type-dropdown :items="dropdownItems" @click="onClick"></field-type-dropdown>
              </v-menu>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <div class="extrasettings-wrap">
      <v-btn
          color="#3C3F4F"
          width="100%"
          elevation="0"
          class="white--text field-type__btn ma-0"
          :class="{'dropdown-opened': settingsDropDownIsOpened}"
          @click="settingsDropDownIsOpened = !settingsDropDownIsOpened"
      >
        Дополнительные настройки
        <chevron-down/>
      </v-btn>
      <div class="extrasettings-panel"
           :class="{'expanded pt-6': settingsDropDownIsOpened}"
      >
        <v-row class="ma-0 flex-column">
          <v-col class="mb-5 align-baseline ma-0 col-4 pa-0">
            <label class="create-section-modal__subtitle">
              Размер внутри связи
            </label>
            <v-select
                :items="items"
                color="#232532"
                class="custom-select"
                placeholder="Выберите"
            >
            </v-select>
          </v-col>
          <v-col class="mb-5 align-baseline ma-0 col-12 pa-0">
            <label class="create-section-modal__subtitle">
              Columns вставка
            </label>
            <textarea
                class="mt-1 empty-area white--text d-block"
                placeholder="Введите"
            >
            </textarea>
          </v-col>
          <v-col class="mb-5 align-baseline ma-0 col-12 pa-0">
            <label class="create-section-modal__subtitle">
              Дополнительные параметры
            </label>
            <textarea
                class="mt-1 empty-area white--text d-block"
                placeholder="Введите"
            >
            </textarea>
          </v-col>
          <v-col class="mb-5 align-baseline ma-0 col-12 pa-0">
            <label class="create-section-modal__subtitle">
              Стили div
            </label>
            <textarea
                class="mt-1 empty-area white--text d-block"
                placeholder="Введите"
            >
            </textarea>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import TranslateSVG from "../SVG/TranslateSVG";
import ChevronDown from "../SVG/ChevronDown";
import FieldTypeDropdown from "../Dropdowns/FieldTypeDropdown";
import {mapMutations} from "vuex";
export default {
  name: "CreateFieldModal",
  components: {FieldTypeDropdown, ChevronDown, TranslateSVG},
  props:['selectedSection'],
  data () {
    return {
      items: ['item1','item2','item3'],
      nameInRussian:null,
      nameInEnglish:null,
      getCustomization: null,
      dropdownItems: [
        {
          title:'Текст',
          switch:false
        },
        {
          title:'Связь со справочником',
          switch:false
        },
        {
          title:'Связь со справочником (теги)',
          switch:false
        },
        {
          title:'Связь со справочником тегами (Свободный ввод)',
          switch:false
        },
        {
          title:'Тэги свободный ввод',
          switch:false
        },
        {
          title:'Дата',
          switch:false
        },
        {
          title:'Дата и время',
          switch:false
        },
        {
          title:'Выпадающий список',
          switch:false
        },
        {
          title:'Номер',
          switch:false
        },
        {
          title:'Файл',
          switch:false
        },
        {
          title:'Номер',
          switch:false
        },
        {
          title:'Файл',
          switch:false
        },
      ],
      dropDownIsOpened: false,
      settingsDropDownIsOpened: false,
      modules: {
        column1: [
          {
            title: 'Обязательное или нет',
            switch:false
          },
          {
            title:`Показывать в таблице”`,
            switch:false
          },
          {
            title:'Редактируемое поле в таблице',
            switch:false
          },
          {
            title:'Модуль Штрих код',
            switch:false
          },
          {
            title:'Модуль QR',
            switch:false
          },
        ],
        column2: [
          {
            title:'Скрытое',
            switch:false
          },
          {
            title:'Не добавлять во вью',
            switch:false
          },
          {
            title:'Скрыть поле при добавлении во вью',
            switch:false
          },
          {
            title: 'Пустышка',
            switch:false
          },
          {
            title:'На фоне регистрацию',
            switch:false
          },
        ],
        column3: [
          {
            title:'Уникальное',
            switch:false
          },
          {
            title:'Модуль карты',
            switch:false
          },
          {
            title:'Авто пополнение справочника',
            switch:false
          },
          {
            title:'Свой контент',
            switch:false
          },
          {
            title:'Подсказка из бд',
            switch:false
          },
        ]
      },
    }
  },
  mounted() {
    this.$parent.$el.classList.add('create-section-modal-styles')
    console.log(this.$parent.$el)
  },
  methods: {
    ...mapMutations(['updateFields','setSelectedItem','saveSectionsToLocalStorage','addField','addFieldsOfCurrentSection']),
    addFieldToFields () {
      const field = {
        component: "Layout",
        props: {
          orientation: "horizontal"
        },
        children:[
          {
            component: "Item",
            display: {
              weight: 1
            },
            props: {
              content: {
                name: this.nameInRussian,
                translation: this.nameInEnglish
              }
            }
          }
        ]
      }
      const currentField = {
        id: this.selectedSection.id,
        title: this.title
      }
      this.addFieldsOfCurrentSection(currentField)
      this.sections[this.selectedIndex].layout.children.push(field)
      this.setSelectedItem(this.selectedIndex)
      // this.addField(field)
      this.updateFields(this.sections)
      this.dialog = false
    },
    onClickOutside (e) {
      if (e.target.className !== 'field-type__btn') {
        this.dropDownIsOpened = false
      }
      console.log(e.target.className !== 'field-type__btn')
    },
    onClick (e) {
      if (e.target.className === 'field-type-dropdown') {
        this.dropDownIsOpened = true
      } else {
        this.dropDownIsOpened = false
      }

    },
    onClickOutsideSettings () {
      this.settingsDropDownIsOpened = false
    }
  }
}
</script>

<style scoped>

</style>
