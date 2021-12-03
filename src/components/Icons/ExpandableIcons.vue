<template>
    <v-row
        class="expandable-icons ma-0 d-inline-flex flex-nowrap justify-center"
    >
      <v-btn
          class="fields__btn icon-btn px-0"
          elevation="0"
          color="#5E7DEC"
      >
        <img :src="require(`@/assets/img/icons/gear-circle.svg`)" class="icons" alt="">
      </v-btn>
      <v-btn
          class="fields__btn icon-btn px-0"
          elevation="0"
          color="#307BC1"
      >
        <img :src="require(`@/assets/img/icons/doc.svg`)" class="icons" alt="">
      </v-btn>
      <v-btn
          class="fields__btn icon-btn px-0"
          elevation="0"
          color="#FEAC0D"
      >
        <img :src="require(`@/assets/img/icons/chevron.svg`)" class="icons" alt="">
      </v-btn>
      <v-btn
          class="fields__btn icon-btn px-0"
          elevation="0"
          color="#EC665E"
      >
        <img :src="require(`@/assets/img/icons/trash.svg`)" class="icons" alt="">
      </v-btn>
      <v-btn
          class="fields__btn icon-btn px-0"
          elevation="0"
          color="#8A8A8A"
      >
        <img :src="require(`@/assets/img/icons/small-eye.svg`)" class="icons" alt="">
      </v-btn>
    </v-row>
</template>

<script>
export default {
  name: "ExpandableIcons"
}
</script>

<style scoped>

</style>