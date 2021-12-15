<template>
  <div>
  <div class="d-flex">
    <v-dialog
        v-model="openEditModal"
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
      <create-form-modal
          @close-modal="closeModal"
          :open-edit-modal="openEditModal"
          :id="id"
          :project-id="projectId"
      ></create-form-modal>
    </v-dialog>
    <v-btn
        class="table__btn"
        color="#BC4B4B"
        @click="$emit('remove-project')"
    >
      <img :src="require(`@/assets/img/icons/trash.svg`)" alt="">
    </v-btn>
    <v-btn
        class="white--text save-btn open-btn btns"
        color="#FEAC0D"
        elevation="0"
        :height="'100%'"
        :min-width="'unset'"
        @click="openCurrentProject"
    >
      Открыть
    </v-btn>
  </div>
  </div>
</template>

<script>
import CreateFormModal from "../Modals/CreateFormModal";
export default {
  name: "FolderItemIcons",
  components: {CreateFormModal},
  props: {
    openCreateModal: {
      type: Boolean
    },
    id: {
      type: Number
    },
    projectId: {
      type: Number
    },
  },
  data () {
    return {
      openEditModal: false
    }
  },
  methods: {
    closeModal() {
      this.openEditModal = false
    },
    openCurrentProject () {
      this.$router.push({
        path: `/project/${this.projectId}`
      })
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