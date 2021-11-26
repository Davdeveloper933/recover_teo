<template>
  <v-col class="fields pt-4">
    <v-row color="#3C3F4F" class="pb-4 justify-space-between align-baseline">
<!--      <v-row class="d-flex justify-space-between">-->
<!--        <v-col cols="24">-->
            <v-col class="d-flex align-center">
        <v-icon color="white">{{ icons.mdiFormatListBulleted }}</v-icon>
        <v-toolbar-title class="white--text fields__title">
          Единица измерения
          <span class="fields__translation">(Unit_of_measurement)</span>
        </v-toolbar-title>
            </v-col>
<!--        </v-col>-->
        <v-spacer></v-spacer>
        <v-col class="col-xl-2 d-flex justify-end">
          <v-btn
              color="transparent"
              elevation="0"
              class="fields__btn icon-btn chevron"
          >
          <img :src="require(`@/assets/img/icons/chevron.backward.svg`)" class="icons" alt="arrow-left">
          </v-btn>
          <v-btn
              class="fields__btn icon-btn px-0"
              elevation="0"
          >
            <img :src="require(`@/assets/img/icons/bomb.svg`)" class="icons" alt="">
          </v-btn>
          <v-dialog
              v-model="dialog"
              persistent
              max-width="400"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  class="fields__btn icon-btn pa-0"
                  elevation="0"
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon class="icons">
                  mdi-plus
                </v-icon>
              </v-btn>
            </template>
            <v-card>

              <v-card-title class="text-h5">
                Добавить раздел
              </v-card-title>
              <v-card-text>
                <v-text-field label="Введите название"></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                  Закрыть
                </v-btn>
                <v-btn
                    color="green darken-1"
                    text
                >
                  Сохранить
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
    </v-row>
    <LayoutTest/>
<!--    <v-row-->
<!--        class="fields__item align-center white&#45;&#45;text mx-0 mt-0"-->
<!--        v-for="(field,index) in fields"-->
<!--        :key="index"-->
<!--    >-->
<!--        &lt;!&ndash;      <v-icon color="white">mdi-menu</v-icon>&ndash;&gt;-->
<!--      <div>-->
<!--        <img :src="require(`@/assets/img/icons/list.svg`)" alt="">-->
<!--      </div>-->
<!--      <h3 class="fields__item__value">-->
<!--        {{ field.name }}-->
<!--        <span class="fields__item__translation">({{ field.en }})</span>-->
<!--      </h3>-->
<!--    </v-row>-->
<!--    ===============================-->
<!--    <v-row-->
<!--        class="fields__item align-center white&#45;&#45;text mx-0 mt-0"-->
<!--    >-->
<!--      <div>-->
<!--        <img :src="require(`@/assets/img/icons/list.svg`)" alt="">-->
<!--      </div>-->
<!--      <h3 class="fields__item__value">-->
<!--        Наименование-->
<!--        <span class="fields__item__translation">(Name)</span>-->
<!--      </h3>-->
<!--    </v-row>-->
<!--    <v-row-->
<!--        class="fields__item align-center white&#45;&#45;text mx-0 mt-0"-->
<!--    >-->
<!--      <div>-->
<!--        <img :src="require(`@/assets/img/icons/list.svg`)" alt="">-->
<!--      </div>-->
<!--      <h3 class="fields__item__value">-->
<!--        <span class="red&#45;&#45;text mr-2">*</span>Количество-->
<!--        <span class="fields__item__translation">(Amount)</span>-->
<!--      </h3>-->
<!--    </v-row>-->
<!--    <v-row-->
<!--        class="fields__item justify-space-between pa-0 align-center white&#45;&#45;text mx-0 mt-0"-->
<!--        style="background-color: #3C3F4F"-->
<!--    >-->
<!--      <v-col class="d-flex mr-3" style="background: #232532;">-->
<!--      <div>-->
<!--        <img :src="require(`@/assets/img/icons/list.svg`)" alt="">-->
<!--      </div>-->
<!--      <h3 class="fields__item__value">-->
<!--        Наименование-->
<!--        <span class="fields__item__translation">(Name)</span>-->
<!--      </h3>-->
<!--      </v-col>-->
<!--      <v-col class="d-flex" style="background: #232532;">-->
<!--        <div>-->
<!--          <img :src="require(`@/assets/img/icons/list.svg`)" alt="">-->
<!--        </div>-->
<!--        <h3 class="fields__item__value">-->
<!--          Наименование-->
<!--          <span class="fields__item__translation">(Name)</span>-->
<!--        </h3>-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--    <v-row-->
<!--        class="fields__item justify-space-between pa-0 align-center white&#45;&#45;text mx-0 mt-0"-->
<!--        style="background-color: #3C3F4F"-->
<!--    >-->
<!--      <v-col class="d-flex mr-3" style="background: #232532;">-->
<!--      <div>-->
<!--        <img :src="require(`@/assets/img/icons/list.svg`)" alt="">-->
<!--      </div>-->
<!--      <h3 class="fields__item__value">-->
<!--        Наименование-->
<!--        <span class="fields__item__translation">(Name)</span>-->
<!--      </h3>-->
<!--      </v-col>-->
<!--      <v-col class="d-flex mr-3" style="background: #232532;">-->
<!--        <div>-->
<!--          <img :src="require(`@/assets/img/icons/list.svg`)" alt="">-->
<!--        </div>-->
<!--        <h3 class="fields__item__value">-->
<!--          Наименование-->
<!--          <span class="fields__item__translation">(Name)</span>-->
<!--        </h3>-->
<!--      </v-col>-->
<!--      <v-col class="d-flex col-4" style="background: #232532;">-->
<!--        <div>-->
<!--          <img :src="require(`@/assets/img/icons/list.svg`)" alt="">-->
<!--        </div>-->
<!--        <h3 class="fields__item__value">-->
<!--          Наименование-->
<!--          <span class="fields__item__translation">(Name)</span>-->
<!--        </h3>-->
<!--      </v-col>-->
<!--    </v-row>-->
  </v-col>
</template>

<script>
import { mdiFormatListBulleted } from '@mdi/js';
import LayoutTest from "../VueLayoutTest";
export default {
  name: "Fields",
  components: {LayoutTest},
  data () {
    return {
      dialog:false,
      icons: {
        mdiFormatListBulleted
      },
      fields: [
        {
          name: 'Наименование',
          en: 'Name',
          col:24
        },
        {
          name: 'Наименование',
          en: 'Name',
          col: 24
        },
        {
          name: 'Наименование',
          en: 'Name',
          col:12
        },
        {
          name: 'Наименование',
          en: 'Name',
          col:12
        },
        {
          name: 'Наименование',
          en: 'Name',
          col:8
        },
        {
          name: 'Наименование',
          en: 'Name',
          col:8
        },
        {
          name: 'Наименование',
          en: 'Name',
          col:8
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>