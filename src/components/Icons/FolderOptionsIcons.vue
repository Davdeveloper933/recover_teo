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
          <v-dialog
              v-model="removeFolderDialog"
              persistent
              max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
          <v-btn class="icon-btn px-0 trash"
                 :max-width="'32px'"
                 :min-width="'32px'"
                 color="#EC665E"
                 v-bind="attrs"
                 v-on="on"
          >
            <img :src="require(`@/assets/img/icons/trash.svg`)" alt="">
          </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5">
                Подтвердите удаление папки
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="removeFolderDialog = false"
                >
                  Отмена
                </v-btn>
                <v-btn
                    color="green darken-1"
                    text
                    @click="removeFolder"
                >
                  Удалить
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
      openCreateModal: false,
      removeFolderDialog: false
    }
  },
  methods: {
    closeModal() {
      this.openCreateModal = false
    },
    removeFolder () {
      this.$emit('remove-folder')
      this.removeFolderDialog = false
    }
  }
}
</script>

<style scoped>

</style>
