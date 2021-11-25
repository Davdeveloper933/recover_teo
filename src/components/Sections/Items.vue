<template>
  <v-col class="px-0 py-0 items">
  <v-list
      v-if="items.length"
      color="transparent"
      class="pa-0"
  >
    <IconsGroup/>
    <v-list-group
        v-for="(item,index) in items"
        :key="index"
        class="items__group"
        :prepend-icon="'mdi-menu'"
        active-class="bg-active"
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title}}
          </v-list-item-title>
        </v-list-item-content>
      </template>
    </v-list-group>
  </v-list>
  </v-col>
</template>

<script>
import IconsGroup from "../IconsGroup";
export default {
  name: "SectionsItems",
  components: {IconsGroup},
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