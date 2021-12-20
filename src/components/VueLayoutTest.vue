  <template>
      <layout-composer
          :displayComponents="displayComponents"
          :config="initialConfig"
          @change:config="onConfigChange"
          :selected-index="selectedIndex"
          :key="initialConfig.children.length"
      />
  </template>

  <script>
    import config from '../../config/layout.json'
    import LayoutComposer from './LayoutComposer/Index'
    import 'vue-layout-composer/dist/vue-layout-composer.css'

    import Item from './Item'
    import {mapMutations} from "vuex";

    export default {
      name: 'layoutTest',
      components: {
        LayoutComposer
      },
      props:['selectedSection','selectedIndex','sections'],
      data() {
        return {
          displayComponents: {
            'Item': Item,
          },
          config
        }
      },
      computed: {
        initialConfig() {
          let sections = this.sections
            return sections[this.selectedIndex].layout
        }
      },
      methods: {
        ...mapMutations(['setSelectedItem', 'saveFieldPositions', 'updateFields','saveSectionsToLocalStorage']),
        onConfigChange(newConfig) {
          console.log(newConfig)
          console.log(this.$store.state.sections)
          // this.selectedSection.layout.children = newConfig
          this.setSelectedItem(this.selectedIndex)
          this.saveFieldPositions(newConfig)
          this.saveSectionsToLocalStorage()
        },
      },
    }
  </script>
