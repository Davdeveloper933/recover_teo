<template>
  <v-col class="px-0 py-0 items">
  <v-list
      v-if="items.length"
      color="transparent"
      class="pa-0"
  >
    <v-list-group
        v-for="(item,index) in items"
        :key="index"
        class="items__group"
        active-class="bg-active"
        @mouseleave="isHovered = false"
        @mouseover="isHovered = index"
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title class="items__title">
            <span class="mr-2">
              <ListSVG class="items__icon"/>
            </span>
            {{ item.title}}
          </v-list-item-title>
        </v-list-item-content>
        <transition name="fade">
          <IconsGroup v-if="isHovered === index"/>
        </transition>
      </template>
    </v-list-group>
  </v-list>
  </v-col>
</template>

<script>
import IconsGroup from "../IconsGroup";
import ListSVG from "../SVG/ListSVG";
export default {
  name: "SectionsItems",
  components: {ListSVG, IconsGroup},
  props: ['items'],
  data () {
    return {
      isHovered: false
    }
  }
}
</script>

<style scoped>
</style>