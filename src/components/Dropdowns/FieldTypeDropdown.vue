<template>
  <div class="field-type-dropdown">
    <div>
    <div
        class="mx-0 mt-0 d-flex align-center flex-nowrap justify-space-between field-type-dropdown__item"
        v-for="(item,index) in items"
        :key="index"
    >
      <span>{{ item.title }}</span>
      <v-switch
          class="custom-switch"
          v-model="item.switch"
          inset
          color="#232532"
      ></v-switch>
    </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "FieldTypeDropdown",
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>