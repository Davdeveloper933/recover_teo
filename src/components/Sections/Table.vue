<template>
  <v-container>
  <v-simple-table
      class="table"
  >
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left table__th">
          Название
        </th>
        <th class="text-left table__th">
          Директор
        </th>
        <th class="text-left table__th">
          Адрес
        </th>
        <th class="text-left table__th">
          Действия
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(item,index) in getFieldData"
          :key="index"
      >
        <td class="table__td">{{ item.title }}</td>
        <td class="table__td"></td>
        <td class="table__td"></td>
        <td class="table__td">
          <v-row>
            <v-btn
                class="table__btn"
                elevation="0"
                color="#FEAC0D"
            >
              <img :src="require(`@/assets/img/icons/printer.fill.svg`)" alt="">
            </v-btn>
            <v-btn class="table__btn"
                   elevation="0"
                   color="#307BC1"
            >
              <img :src="require(`@/assets/img/icons/doc.svg`)" alt="">
            </v-btn>
            <v-btn
                class="table__btn"
                elevation="0"
                color="#4BB5BC"
            >
              <img :src="require(`@/assets/img/icons/small-eye.svg`)" alt="">
            </v-btn>
            <v-btn
                class="table__btn"
                color="#4B78BC"
            >
              <img :src="require(`@/assets/img/icons/edit.svg`)" alt="">
            </v-btn>
            <v-btn
                class="table__btn"
                color="#BC4B4B"
            >
              <img :src="require(`@/assets/img/icons/trash.svg`)" alt="">
            </v-btn>
          </v-row>
        </td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "Table",
  props: {
    field: {
      type:Object
    },
    selectedIndex:{
      type: Number
    }
  },
  data () {
    return {
      desserts: [
        {
          name: 'Наименование',
          director:'Иванов Иван Иванович',
          address:'г. Москва, ул. Карла Маркса д. 13',
          images: [
            'img1.png',
            'img2.png',
            'img3.png',
          ]
        }
      ],
    }
  },
  created() {

  },
  computed: {
    getFieldData () {
      const fields = this.$store.state.fields
      const currentSection = this.$store.state.sections[this.selectedIndex]
      let currentFields
      if (currentSection) {
        currentFields = fields.filter((field) => field.id === currentSection.id)
        console.log(currentSection.id)
      }
      return currentFields
    }
  },
  methods: {

  }
}
</script>
