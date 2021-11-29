<template>
  <v-list
      class="history white--text"
      color="#3C3F4F"
      :min-width="'220px'"
  >
    <v-list-item
        class="white--text history__item d-flex flex-row align-center justify-space-between"
        v-for="(item, index) in history"
        :key="index"
    >
      <v-list-item-title class="history__text history__title">{{ item.date }}</v-list-item-title>
      <span class="history__text mr-4">{{ item.time }}</span>
      <div class="custom-radio">
        <div
            class="custom-radio__wrapper"
            @click="radioMarked === index?radioMarked = false:radioMarked = index"
        >
          <transition name="fade">
            <div
                class="custom-radio__active"
                v-if="radioMarked === index"
            >
              <div class="custom-radio__ellipse"></div>
            </div>
          </transition>
        </div>
      </div>
    </v-list-item>
  </v-list>
</template>

<script>
import {
  mdiCheckboxBlankCircle,
  mdiRecordCircle
} from '@mdi/js';
export default {
  name: "History",
  data () {
    return {
      icons: {
        radioBlank: mdiCheckboxBlankCircle,
        radioActive: mdiRecordCircle
      },
      switch1: true,
      radioMarked:true,
      history: [
        {
          date: '18.01.2021',
          time:'13:56',
          id: 1
        },
        {
          date: '18.01.2021',
          time:'13:56',
          switch2:false,
          id: 2
        },
        {
          date: '18.01.2021',
          time:'13:56',
          id: 3
        },
        {
          date: '18.01.2021',
          time:'13:56',
          id: 4
        },
        {
          date: '18.01.2021',
          time:'13:56',
          id: 5
        },
        {
          date: '18.01.2021',
          time:'13:56',
          id: 6
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>