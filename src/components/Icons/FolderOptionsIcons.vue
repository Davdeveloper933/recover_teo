<template>
        <v-row class="icons__wrapper for_folder-tabs"
        >
          <v-btn class="icon-btn px-0 plus"
                 :max-width="'32px'"
                 :min-width="'32px'"
          >
            <img :src="require(`@/assets/img/icons/plus.svg`)" alt="">
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
  name: "FolderOptionsIcons"
}
</script>

<style scoped>

</style>