<template>
  <v-list
      class="history white--text"
      color="#3C3F4F"
      :min-width="'220px'"
      v-if="history"
  >
    <v-list-item
        class="d-block"
        v-for="(item, index) in history"
        :key="index"
        @click="historyClick(index)"
    >
      <label class="white--text history__item d-flex flex-row align-center justify-space-between" :for="index">
      <v-list-item-title class="history__text history__title">{{ item.create_at | getDate }}</v-list-item-title>
      <span class="history__text mr-4">{{ item.create_at | getTime }}</span>
      <div class="custom-radio">
        <div
            class="custom-radio__wrapper"
            @click="radioMarked === index?radioMarked = false:radioMarked = index"
        >
          <input type="radio" :id="index" v-model="item.on" :name="index" class="custom-radio__wrapper__radio">
          <transition name="fade">
            <div
                class="custom-radio__active"
                v-if="item.on"
            >
              <div class="custom-radio__ellipse"></div>
            </div>
          </transition>
        </div>
      </div>
      </label>
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
  props:['history'],
  filters: {
    getDate (value) {
      const parsedDate = new Date(value)
      let day = parsedDate.getDate()
      let month = parsedDate.getMonth()+1
      let year = parsedDate.getFullYear()
      console.log(`${day}.${month}`)
      return `${day}.${month}.${year}`
    },
    getTime (value) {
      const parsedDate = new Date(value)
      let hour = parsedDate.getHours()
      let min = parsedDate.getMinutes()
      // console.log(`${hour}:${min}`)
      return `${hour}:${min}`
    }
  },
  data () {
    return {
      icons: {
        radioBlank: mdiCheckboxBlankCircle,
        radioActive: mdiRecordCircle
      },
      switch1: true,
      radioMarked:true,
      date:null,
      time:null,
      radioSelectedValue:null,
      radioGroup:1
      // history: [
      //   {
      //     date: '18.01.2021',
      //     time:'13:56',
      //     id: 1
      //   },
      //   {
      //     date: '18.01.2021',
      //     time:'13:56',
      //     switch2:false,
      //     id: 2
      //   },
      //   {
      //     date: '18.01.2021',
      //     time:'13:56',
      //     id: 3
      //   },
      //   {
      //     date: '18.01.2021',
      //     time:'13:56',
      //     id: 4
      //   },
      //   {
      //     date: '18.01.2021',
      //     time:'13:56',
      //     id: 5
      //   },
      //   {
      //     date: '18.01.2021',
      //     time:'13:56',
      //     id: 6
      //   },
      // ]
    }
  },
  created() {
  },
  computed:{
  },
  methods:{
    historyClick (index) {
      this.$emit('click-on-history',index)
    }
  }

}
</script>

<style scoped>

</style>
