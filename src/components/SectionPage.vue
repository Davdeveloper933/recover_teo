<template>
  <v-container
      class="section__container"
  >
  <v-row
      class="ma-0"
  >
  <v-col
      cols="12"
      class="section"
  >
    <v-row class="section__top-buttons d-flex align-center">
      <v-dialog
          v-model="dialog"
          persistent
          max-width="400"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              class="white--text add-button"
              color="#3C3F4F"
              elevation="0"
              v-bind="attrs"
              v-on="on"
          >
            Добавить раздел
            <v-icon
                class="add-button__icon"
            >
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <v-card>

          <v-card-title class="text-h5">
            Добавить раздел
          </v-card-title>
          <v-card-text>
          <v-text-field label="Введите название" v-model="title"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
            >
              Закрыть
            </v-btn>
            <v-btn
                color="green darken-1"
                text
                @click="addItem"
            >
              Сохранить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn
          class="white--text generate-button"
          color="#FEAC0D"
          elevation="0"
      >
        Сгенерировать
      </v-btn>
      <v-btn
          class="eye-button"
          color="#3C3F4F"
          elevation="0"
          min-width="40"
      >
        <EyeSVG/>
      </v-btn>
    </v-row>
    <Sections/>
  </v-col>
  </v-row>
  </v-container>
</template>

<script>
import EyeSVG from "./SVG/EyeSVG";
import Sections from "./Sections";
import { mapMutations } from 'vuex'
export default {
  name: "SectionPage",
  components: { Sections, EyeSVG},
  data () {
    return {
      title:null,
      dialog: false
    }
  },
  methods:{
    ...mapMutations(['add','remove']),
    addItem() {
      this.add({
        icon:'list.svg',
        title: this.title
      })
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>