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
              class="fields__btn icon-btn px-0"
              :max-width="'30px'"
              :min-width="'30px'"
          >
          <img :src="require(`@/assets/img/icons/chevron.backward.svg`)" alt="arrow-left">
          </v-btn>
          <v-btn
              class="fields__btn icon-btn px-0"
              elevation="0"
              :max-width="'30px'"
              :min-width="'30px'"
          >
            <img :src="require(`@/assets/img/icons/bomb.svg`)" alt="">
          </v-btn>
          <v-btn
              class="fields__btn icon-btn px-0"
              elevation="0"
              :max-width="'30px'"
              :min-width="'30px'"
          >
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
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