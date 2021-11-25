<template>
  <v-app-bar
      app
      class="header white--text"
      elevation="0"
      color="#232532"
  >
    <v-container class="d-flex justify-center">
    <v-row justify="between" align="center" class="header__wrap">
      <v-row align="center">
    <v-row class="header__logo" align="center">
        <a href="#" class="header__logo__svg">
          <LogoSVG/>
        </a>
      <span class="header__logo__subtext">Конструктор форм</span>
    </v-row>
      </v-row>
      <v-spacer></v-spacer>
      <div>
        <v-row
            align="center"
            no-gutters
        >
          <v-col
              class="hidden-xs-only"
          >
            <strong class="user__name" v-html="'Александр'"></strong>
            <v-avatar
                size="40px"
                color="#FEAC0D"
            >
              <span class="text-h5">A</span>
            </v-avatar>
          </v-col>
        </v-row>
      </div>
    </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  import LogoSVG from "./SVG/LogoSVG";
  export default {
    name: 'Header',
    components: {LogoSVG},
    data () {
      return {

      }
    }
  }
</script>
