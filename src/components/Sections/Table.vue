<template>
  <v-container>
  <v-simple-table class="table">
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
          v-for="(item,index) in desserts"
          :key="index"
      >
        <td class="table__td">{{ item.name }}</td>
        <td class="table__td">{{ item.director}}</td>
        <td class="table__td">{{ item.address}}</td>
        <td class="table__td" v-if="item.images && item.images.length">
          <v-row>
            <v-col cols="2" v-for="(img,index) in item.images" :key="index">
              <img :src="require(`@/assets/img/${img}`)" alt="">
            </v-col>
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
}
</script>
