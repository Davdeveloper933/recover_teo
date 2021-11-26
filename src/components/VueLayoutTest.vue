  <template>
      <layout-composer
          :displayComponents="displayComponents"
          :config="initialConfig"
          @change:config="onConfigChange"
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
      data() {
        return {
          displayComponents: {
            'Item': Item,
          },
          config
        }
      },
      created() {
        // localStorage.setItem('config',JSON.stringify(this.config))
      },
      computed: {
        initialConfig: () => {
          if (!JSON.parse(localStorage.getItem('config'))) return this.config
          return JSON.parse(localStorage.getItem('config'))
        }
      },
      methods: {
        onConfigChange(newConfig) {
          console.log(newConfig)
        },
      },
    }
  </script>