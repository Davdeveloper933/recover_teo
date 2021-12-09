<template>
  <div class="d-flex">
    <v-dialog
        v-model="dialog"
        persistent
        :max-width="'60%'"
        :width="'100%'"
    >
      <template v-slot:activator="{ on, attrs }">
    <v-btn
        class="table__btn"
        color="#4B78BC"
        v-bind="attrs"
        v-on="on"
    >
      <img :src="require(`@/assets/img/icons/edit.svg`)" alt="">
    </v-btn>
      </template>
      <create-form-modal @close-modal="closeModal" />
    </v-dialog>
    <v-btn
        class="white--text save-btn open-btn btns"
        color="#FEAC0D"
        elevation="0"
        :height="'100%'"
        :min-width="'unset'"
    >
      Открыть
    </v-btn>
  </div>
</template>

<script>
import CreateFormModal from "../Modals/CreateFormModal";
export default {
  name: "FolderItemIcons",
  components: {CreateFormModal},
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    closeModal() {
      this.dialog = false
    }
  }
}
</script>

<style scoped lang="scss">
  .save-btn.open-btn {
    font-size: 10px !important;
    padding: 5px 20px !important;
    margin-left: 6px;
  }
</style>