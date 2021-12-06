<template>
  <div
      class="create-section-modal white--text"
      ref="create_section_modal"
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
    <h2 class="create-section-modal__title">Создание раздела</h2>
    <v-btn
        class="white--text save-btn generate-button btns"
        color="#3C3F4F"
        elevation="0"
    >
      Сохранить
    </v-btn>
  </v-row>
    <v-row class="justify-space-between mx-0">
      <v-col class="col-8 px-0">
        <v-row class="align-center mb-5 justify-space-between mx-0">
      <v-col class="flex-column col-6 px-0">
      <label class="create-section-modal__label create-section-modal__subtitle">
        Наименование (на русском)
      </label>
      <v-text-field
          color="#3C3F4F"
          class="custom-input pt-0"
          placeholder="Введите"
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
        >
        </v-text-field>
        </div>
      </v-col>
    </v-row>
        <v-row class="mb-12 ma-0">
        <v-col
            class="modules py-0 pl-0 col-12"
        >
          <h2 class="create-section-modal__subtitle mb-2">Модули</h2>
          <v-row
              class="ma-0 modules__inner first"
          >
<!--            <v-row class="ma-0 modules__inner__first">-->
            <v-col class="col-4 pr-8 pa-0 modules__item">
              <v-row
                  class="mx-0 mt-0 align-center flex-nowrap justify-space-between"
                  v-for="index in modulesToShow.column1"
                  :key="index"
              >
                <span>{{ modules.column1[index-1].title }}</span>
                <v-switch
                    class="custom-switch"
                    v-model="modules.column1[index-1].switch"
                    inset
                    color="#232532"
                ></v-switch>
              </v-row>
            </v-col>
            <v-col class="col-4 pr-8 pl-8 pa-0 modules__item">
              <v-row
                  class="mx-0 mt-0 align-center flex-nowrap justify-space-between"
                  v-for="index in modulesToShow.column2"
                  :key="index"
              >
                <span>{{ modules.column2[index-1].title }}</span>
                <v-switch
                    class="custom-switch"
                    v-model="modules.column2[index-1].switch"
                    inset
                    color="#232532"
                ></v-switch>
              </v-row>
            </v-col>
            <v-col class="col-4 pl-8 pa-0 modules__item">
              <v-row
                  class="mx-0 mt-0 align-center flex-nowrap justify-space-between"
                  v-for="index in modulesToShow.column3"
                  :key="index"
              >
                <span>{{ modules.column3[index-1].title }}</span>
                <v-switch
                    class="custom-switch"
                    v-model="modules.column3[index-1].switch"
                    inset
                    color="#232532"
                ></v-switch>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        </v-row>
      </v-col>
      <v-col class="col-4 px-0">
        <div
            class="d-flex justify-end align-center create-section-modal__localization__wrap"
            :class="{ 'expand-btn-collapsed': !isOpenA }"
        >
          <div
              class="expand-btn-expanded ml-2 mr-3"
              v-if="isOpenA"
              @click="isOpenA = !isOpenA"
          >
            <chevron-compact-s-v-g/>
          </div>
          <div
              class="mr-2"
              v-if="!isOpenA"
          >
            <chevron-compact-s-v-g/>
          </div>
          <div
              class="expand-btn-collapsed__text"
              v-if="!isOpenA"
              @click="isOpenA = !isOpenA"
          >
            <span>Вкладки</span>
          </div>
        <div class="pa-0 localization-block"
             :class="{'expanded': isOpenA}"
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
              Размер внутри связи
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
              Иконка
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
        </div>
        </div>
      </v-col>
    </v-row>
    <v-row class="ma-0 j align-center show-more-btn__wrapper"
           :class="{'mt-8': isOpenA}"
           v-click-outside="onClickOutside"
    >
      <v-col class="pa-0 col-8">
        <div class="align-center d-flex justify-center">
      <v-btn
          class="show-more-btn align-center"
          color="transparent"
          elevation="0"
          v-if="(modulesToShow.column1 < modules.column1.length ||
               modulesToShow.column2 < modules.column2.length
               || modulesToShow.column3 < modules.column3.length)
              || (modules.column1.length > modulesToShow.column1
               || modules.column2.length > modulesToShow.column2
               || modules.column3.length > modulesToShow.column3)
              && !expanded"
          @click="modulesToShow.column1 += modules.column1.length-3;
              modulesToShow.column2 += modules.column2.length-3;
              modulesToShow.column3 += modules.column3.length-3;
              expanded = true"
      >
        Показать больше
        <chevron-down/>
      </v-btn>
        </div>
      </v-col>
    </v-row>
    <h2 class="create-section-modal__subtitle mt-10 mb-2">Добавить масово поля</h2>
    <v-row class="ma-0 justify-space-between">
      <v-col class="modules py-0 pl-0 col-8">
        <v-row
            class="ma-0 modules__inner"
        >
          <v-col class="col-xl-3 pr-4 pa-0 modules__item">
            <v-row
                class="mx-0 mt-0 align-center flex-nowrap justify-space-between"
                v-for="(item,index) in addFields.column1"
                :key="index"
            >
              <span>{{ item }}</span>
              <v-switch
                  class="custom-switch"
                  v-model="switch2"
                  inset
                  color="#232532"
              ></v-switch>
            </v-row>
          </v-col>
          <v-col class="col-xl-3 pl-4 pr-4 pa-0 modules__item">
            <v-row
                class="mx-0 mt-0 align-center flex-nowrap justify-space-between"
                v-for="(item,index) in addFields.column2"
                :key="index"
            >
              <span>{{ item }}</span>
              <v-switch
                  class="custom-switch"
                  v-model="switch2"
                  inset
                  color="#232532"
              ></v-switch>
            </v-row>
          </v-col>
          <v-col class="col-md-5 col-xl-6 pl-4 pa-0">
            <h2 class="create-section-modal__subtitle mb-2">Создать поле</h2>
            <textarea class="empty-area white--text d-block"></textarea>
            <v-row class="ma-0 mt-4">
              <v-col class="col-md-5 col-xl-4 pa-0">
                <v-row
                    class="ma-0 align-center flex-nowrap justify-space-between"
                >
                  <span>Пациент</span>
                  <v-switch
                      class="custom-switch"
                      v-model="switch2"
                      inset
                      color="#232532"
                  ></v-switch>
                </v-row>
                <v-row
                    class="ma-0 align-center flex-nowrap justify-space-between"
                >
                  <span>Тип</span>
                  <v-switch
                      class="custom-switch"
                      v-model="switch2"
                      inset
                      color="#232532"
                  ></v-switch>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="col-4 pa-0">
        <div
            class="d-flex align-center justify-end create-section-modal__tabs__wrap"
            :class="{ 'expand-btn-collapsed': !isOpenB }"
            style="height: 100%"
        >
          <div
              class="mr-2"
              v-if="!isOpenB"
          >
            <chevron-compact-s-v-g/>
          </div>
        <div
            class="expand-btn-expanded ml-2 mr-3"
            v-if="isOpenB"
            @click="isOpenB = !isOpenB"
        >
          <chevron-compact-s-v-g/>
        </div>
          <div
              class="expand-btn-collapsed__text"
              v-if="!isOpenB"
              @click="isOpenB = !isOpenB"
          >
            <span>Вкладки</span>
          </div>
        <div class="create-section-modal__tabs" :class="{'expanded':isOpenB}">
        <h2 class="create-section-modal__subtitle mb-2">Вкладки</h2>
          <v-row class="mb-2 ma-0 justify-space-between align-center flex-nowrap">
  <!--          <v-col class="pa-0 col-11">-->
              <v-row class="pb-2 mr-2 ma-0 justify-space-between align-center create-section-modal__tabs__translation">
                <v-col class="col-6 pa-0">
                  <h2 class="create-section-modal__subtitle-regular">На английском</h2>
                </v-col>
                <v-col class="col-6 pa-0">
                  <h2 class="create-section-modal__subtitle-regular">На русском</h2>
                </v-col>
              </v-row>
  <!--          </v-col>-->
  <!--          <v-col class="pa-0 col-1">-->
              <v-btn
                  class="create-section-modal__btn mb-4"
                  @click="addTab"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
  <!--          </v-col>-->
          </v-row>
          <v-row
              class="mb-2 ma-0 justify-space-between align-center flex-nowrap"
              v-for="(tab,index) in tabs"
              :key="index"
          >
  <!--          <v-col class="pa-0 col-11">-->
              <v-row class="mr-2 ma-0 justify-space-between align-center">
                <v-col class="col-6 pr-2 pa-0">
                  <v-text-field
                      color="#232532"
                      class="create-section-modal__tabs__input pt-0"
                      placeholder="Введите"
                      v-model="nameInEnglish"
                  >
                  </v-text-field>
                </v-col>
                <v-col class="col-6 pa-0">
                  <v-text-field
                      color="#232532"
                      class="create-section-modal__tabs__input pt-0"
                      placeholder="Введите"
                      v-model="nameInRussian"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            <v-btn
                class="create-section-modal__btn ma-0"
                color="#EC665E"
                @click="removeTab(index)"
            >
              <img :src="require(`@/assets/img/icons/trash.svg`)" alt="">
            </v-btn>
  <!--          </v-col>-->
  <!--          <v-col class="pa-0 col-1 d-flex justify-end">-->

  <!--          </v-col>-->
          </v-row>
        </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ChevronDown from "../SVG/ChevronDown";
import ChevronCompactSVG from "../SVG/ChevronCompactSVG";
export default {
  name: "CreateSectionModal",
  components: {ChevronCompactSVG, ChevronDown},
  data () {
    return {
      items: ['item1','item2','item3'],
      tabs: [],
      nameInRussian: null,
      nameInEnglish: null,
      isOpenA: false,
      isOpenB: false,
      expanded:false,
      modulesToShow: {
        column1: 3,
        column2: 3,
        column3: 3
      },
      modules: {
            column1: [
              {
                title: 'Модуль Dyna',
                switch:false
              },
              {
                title:`Добавить “cheated_at, updated_at”`,
                switch:false
              },
              {
                title:'Пустышка',
                switch:false
              },
              {
                title:'Свой _columns',
                switch:false
              },
              {
                title:'Видимость поиска',
                switch:false
              },
              {
                title:'Модуль настроек',
                switch:false
              },
              {
                title:'Крыть кнопку добавить',
                switch:false
              },
              {
                title:'Свой form',
                switch:false
              },
              {
                title:'Справочник',
                switch:false
              },
            ],
            column2: [
              {
                title:'Модуль чата',
                switch:false
              },
              {
                title:'Создавать миграцию перед пользованием',
                switch:false
              },
              {
                title:'Скрыть панель у таблицы',
                switch:false
              },
              {
                title: 'Убрать действия у columns',
                switch:false
              },
              {
                title:'Большое модальное окно',
                switch:false
              },
              {
                title:'Модуль пользователей',
                switch:false
              },
              {
                title:'Кнопка добавить в панели',
                switch:false
              },
              {
                title:'Страница по каждую компанию',
                switch:false
              },
            ],
            column3: [
              {
                title:'Печать',
                switch:false
              },
              {
                title:'Редирект во внутрь после создания',
                switch:false
              },
              {
                title:'Модуль импорта',
                switch:false
              },
              {
                title:'Скрыть CRUD',
                switch:false
              },
              {
                title:'Не отображать в меню',
                switch:false
              },
              {
                title:'Модуль экспорта',
                switch:false
              },
              {
                title:'Копирование строк',
                switch:false
              },
              {
                title:'Добавит в API',
                switch:false
              }
            ]
          },
      addFields: {
        column1: [
            'Название',
            'Пациент',
            'Тип',
            'Сумма',
            'Услуга',
            'Статья',
            'Проект',
            'Статус',
            'Комментарий'
        ],
        column2: [
          'Название',
          'Пациент',
          'Тип',
          'Сумма',
          'Услуга',
          'Статья',
          'Проект',
          'Статус',
          'Комментарий'
        ]
      }
    }
  },
  mounted() {
    this.$parent.$el.classList.add('create-section-modal-styles')
    console.log(this.$parent.$el)
  },
  methods: {
    onClickOutside() {
      if(this.expanded) {
        this.modulesToShow.column1 = 3
        this.modulesToShow.column2 = 3
        this.modulesToShow.column3 = 3
        this.expanded = false
      }
      this.$emit('click-outside')
    },
    addTab() {
      this.tabs.push({
        nameInRussian: this.nameInRussian,
        nameInEnglish: this.nameInEnglish
      })
    },
    removeTab(index) {
      this.tabs.splice(index,1)
    }
  }
}
</script>

<style scoped>

</style>