  <template>
      <layout-composer
          :displayComponents="displayComponents"
          :config="initialConfig"
          @change:config="onConfigChange"
          :selected-index="selectedIndex"
      />
  </template>

  <script>
    import config from '../../config/layout.json'
    import LayoutComposer from './LayoutComposer/Index'
    import 'vue-layout-composer/dist/vue-layout-composer.css'

    import Item from './Item'

    export default {
      name: 'layoutTest',
      components: {
        LayoutComposer
      },
      props:['selectedSection','selectedIndex'],
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
          const sections = this.$store.state.sections
            return sections[this.selectedIndex].layout
        }
      },
      methods: {
        onConfigChange(newConfig) {
          console.log(newConfig)
        },
      },
    }
  </script>