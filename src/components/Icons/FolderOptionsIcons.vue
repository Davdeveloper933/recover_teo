<template>
        <v-row class="icons__wrapper for_folder-tabs"
        >
          <v-dialog
              v-model="openCreateModal"
              :max-width="'60%'"
              :width="'100%'"
          >
            <template v-slot:activator="{ on, attrs }">
          <v-btn class="icon-btn px-0 plus"
                 :max-width="'32px'"
                 :min-width="'32px'"
                 elevation="0"
                 v-bind="attrs"
                 v-on="on"
          >
            <img :src="require(`@/assets/img/icons/plus.svg`)" alt="">
          </v-btn>
            </template>
            <create-form-modal
                :id="id"
                :open-create-modal="openCreateModal"
                @close-modal="closeModal"
            ></create-form-modal>
          </v-dialog>
          <v-btn class="icon-btn px-0 trash"
                 :max-width="'32px'"
                 :min-width="'32px'"
                 color="#EC665E"
                 @click="$emit('remove-folder')"
          >
            <img :src="require(`@/assets/img/icons/trash.svg`)" alt="">
          </v-btn>
        </v-row>
</template>

<script>
import CreateFormModal from "../Modals/CreateFormModal";
export default {
  name: "FolderOptionsIcons",
  components: {CreateFormModal},
  props: {
    id:{
      type: Number
    }
  },
  data () {
    return {
      openCreateModal: false
    }
  },
  methods: {
    closeModal() {
      this.openCreateModal = false
    },
  }
}
</script>

<style scoped>

</style>