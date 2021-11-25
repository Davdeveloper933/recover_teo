<template>
  <v-row class="icons__wrapper">
    <v-btn class="icon-btn px-0 plus"
           :max-width="'32px'"
           :min-width="'32px'"
           color="#FFFFFF"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    <v-btn class="icon-btn px-0 gear"
           :max-width="'32px'"
           :min-width="'32px'"
           color="#5E7DEC"
    >
      <img :src="require(`@/assets/img/icons/gear-circle.svg`)" alt="">
    </v-btn>
    <v-btn class="icon-btn px-0 doc"
           :max-width="'32px'"
           :min-width="'32px'"
           color="#307BC1"
    >
      <img :src="require(`@/assets/img/icons/doc.svg`)" alt="">
    </v-btn>
    <v-btn class="icon-btn px-0 chevron"
           :max-width="'32px'"
           :min-width="'32px'"
           color="#FEAC0D"
    >
      <img :src="require(`@/assets/img/icons/chevron.svg`)" alt="">
    </v-btn>
    <v-btn class="icon-btn px-0 trash"
           :max-width="'32px'"
           :min-width="'32px'"
           color="#EC665E"
    >
      <img :src="require(`@/assets/img/icons/trash.svg`)" alt="">
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: "IconsGroup"
}
</script>

<style scoped>

</style>