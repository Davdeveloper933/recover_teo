<template>
 <v-row class="ma-0 justify-end group-of-field-icons">
   <v-btn class="icon-btn px-0 gear"
          :max-width="'30px'"
          :min-width="'30px'"
          color="#5E7DEC"
   >
     <img :src="require(`@/assets/img/icons/gear-circle.svg`)" alt="">
   </v-btn>
   <v-btn class="icon-btn px-0 trash mr-0"
          :max-width="'30px'"
          :min-width="'30px'"
          color="#EC665E"
   >
     <img :src="require(`@/assets/img/icons/trash.svg`)" alt="">
   </v-btn>
 </v-row>
</template>

<script>
export default {
  name: "FieldIcons"
}
</script>

<style scoped>

</style>