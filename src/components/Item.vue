<template>
  <cell
      v-bind="cellProps"
      :display="config.display"
      :draggable="editable"
      @delete:content="$emit('delete:content')"
  >
<!--    <div class="Item" :style="style" @click="onClick">-->
<!--      {{ content }}-->
<!--    </div>-->
    <v-row
        class="fields__item justify-space-between align-center white--text mx-0 mt-0"
        @click="onClick"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
        ref="block"
    >
      <div class="d-flex">
      <div>
        <img :src="require(`@/assets/img/icons/list.svg`)" alt="">
      </div>
      <h3 class="fields__item__value">
       {{ content.name }}
        <span class="fields__item__translation" v-if="content.translation">({{content.translation}})</span>
      </h3>
      </div>
      <transition name="fade">
      <FieldIcons v-if="hovered"/>
      </transition>
    </v-row>
  </cell>
</template>

<script>
import Cell from './LayoutComposer/components/Layout/components/Cell/Index'
import FieldIcons from "./FieldIcons";
export default {
  name: 'Item',
  components: {
    FieldIcons,
    Cell,
  },
  filters: {
    truncate: (data,el) => {
      // let output
      // const reqdString = data.split("").slice(0, num).join("");
      // return reqdString;
      // if (this.$refs.block.clientWidth < 228) {
      //     output = data.split('').slice(0,this.$refs.block.clientWidth/10).join("")
      // }
      console.log(el.clientWidth)
      return data
    }
  },
  props: {
    // vue-layout-composer props
    initialConfig: Object,
    editable: Boolean,
    cellProps: Object,
    // custom props
    content: String,
    background: String,
  },
  data () {
    return {
      hovered: false
    }
  },
  computed: {
    config() {
      return {
        ...this.initialConfig,
        hello: 'world',
      }
    },
    style() {
      const { background } = this
      return {
        background,
      }
    },
  },
  methods: {
    getConfig() {
      return this.config
    },
    onClick() {
      console.log('clicked')
    },
  },
}
</script>

<style>
.Item {
  height: 100%;
  min-height: 50px;
  line-height: 50px;
}
</style>
