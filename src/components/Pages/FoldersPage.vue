<template>
  <v-container
      class="section__container"
  >
    <v-tabs
        class="ma-0 folders d-flex flex-row"
        color="transparent"
        background-color="transparent"
        vertical
        active-class="tab-active"
        :transition="false"
    >
      <v-col
          class="col-3 folders__wrap"

      >
        <div class="mb-2 d-flex align-center justify-space-between folders__wrap__top">
          <h2 class="folders__wrap__title">Папки</h2>
          <v-btn
              class="fields__btn plus-btn icon-btn pa-0 mr-0"
              elevation="0"
          >
           <plus-s-v-g/>
          </v-btn>
        </div>
        <v-tab
            class="mt-3 ma-0 justify-space-between folders__wrap__item"
            v-for="(item,index) in folders"
            :key="index"
        >
          <h2 class="folders__wrap__item__title">{{ item.title }}</h2>
          <chevron-back/>
        </v-tab>
      </v-col>
<!--      <v-col class="folders__tab">-->

<!--      </v-col>-->
      <v-tab-item
          class="pa-0 folders__tab col white--text"
          v-for="(item,index) in folders"
          :key="index"
          :transition="false"
      >
        <div class="folders__tab__content">
            <v-row
                class="mb-6 ma-0 justify-space-between"
            >
              <h2 class="folders__wrap__title">{{ item.title }}</h2>
              <v-btn
                  class="white--text save-btn generate-button btns"
                  color="#3C3F4F"
                  elevation="0"
              >
                Создать
              </v-btn>
            </v-row>
            <v-row class="ma-0 folders__tab__content__task-container">
              <v-row class="ma-0 justify-space-between">
                <v-col class="task__item mb-4 pa-0">
                  <div class="pb-3 d-flex align-start task__item__top">
                    <span>
                      <list-s-v-g class="icon"/>
                    </span>
                    <h3 class="ml-3 task__title">solda.mir-cnm.com</h3>
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
                <v-col class="task__item mb-4 pa-0">
                  <div class="pb-3 d-flex align-start task__item__top">
                    <span>
                      <list-s-v-g class="icon"/>
                    </span>
                    <h3 class="ml-3 task__title">solda.mir-cnm.com</h3>
                  </div>
                  <v-expansion-panels
                      class="task__expansion-panel"
                  >
                    <v-expansion-panel>
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
                <v-col class="task__item pa-0">
                  <div class="pb-3 d-flex align-start task__item__top">
                    <span>
                      <list-s-v-g class="icon"/>
                    </span>
                    <h3 class="ml-3 task__title">solda.mir-cnm.com</h3>
                  </div>
                  <v-expansion-panels
                      class="task__expansion-panel"
                  >
                    <v-expansion-panel>
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
                <v-col class="task__item pa-0">
                  <div class="pb-3 d-flex align-start task__item__top">
                    <span>
                      <list-s-v-g class="icon"/>
                    </span>
                    <h3 class="ml-3 task__title">solda.mir-cnm.com</h3>
                  </div>
                  <v-expansion-panels
                      class="task__expansion-panel"
                  >
                    <v-expansion-panel>
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
              </v-row>
            </v-row>
        </div>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import ChevronBack from "../SVG/ChevronBack";
import ListSVG from "../SVG/ListSVG";
import PlusSVG from "../SVG/PlusSVG";
export default {
  name: "FoldersPage",
  components: {PlusSVG, ListSVG, ChevronBack},
  data () {
    return {
      folders: [
        {
          id:1,
          title:'В работе'
        },
        {
          id:2,
          title:'На сдаче'
        },
        {
          id:3,
          title:'Завершенные'
        },
        {
          id:4,
          title:'Тестовые'
        },
        {
          id:5,
          title:'Прочее'
        },
      ],
      panels: [1,2,3,4]
    }
  }
}
</script>

<style scoped>

</style>