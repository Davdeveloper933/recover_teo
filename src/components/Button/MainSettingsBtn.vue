<template>
  <v-menu
      transition="slide-x-transition"
      open-on-click
      right
      :close-on-content-click="false"
      :absolute="false"
  >
    <template v-slot:activator="{ on, attrs }">
 <v-btn
     class="open-main-settings"
     color="#232532"
     :min-width="'40px'"
     v-bind="attrs"
     v-on="on"
 >
   <img :src="require(`@/assets/img/icons/gear-circle.svg`)" alt="">
 </v-btn>
    </template>
    <main-menu/>
  </v-menu>
</template>

<script>
import MainMenu from "../Menus/MainMenu";
export default {
  name: "MainSettingsBtn",
  components: {MainMenu}
}
</script>

<style scoped>

</style>