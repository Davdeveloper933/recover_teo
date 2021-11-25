<template>
  <v-row class="sections d-block mt-9">
    <h2
        class="sections__title"
        v-if="items.length"
    >
      Разделы
    </h2>
    <v-row class="ma-0 justify-space-between d-flex">
        <SectionsItems v-if="items.length" :items="items"></SectionsItems>
<!--      <v-spacer></v-spacer>-->
        <Fields/>
      </v-row>
    <Table/>
  </v-row>
</template>

<script>
import SectionsItems from "./Sections/Items";
import Fields from "./Sections/Fields";
import Table from "./Sections/Table";
export default {
  name: "Sections",
  components: {Table, Fields, SectionsItems},
  computed: {
    items () {
      return this.$store.state.items
    }
  }
}
</script>

<style scoped>

</style>