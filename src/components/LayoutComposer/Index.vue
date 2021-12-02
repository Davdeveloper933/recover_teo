<template>
  <div class="LayoutComposer">
    <Layout
      :cell-props="{
        id: internalConfig.id,
        dragging,
        layoutOrientation: '',
        isFirstChild: true,
      }"
      :display-components="displayComponents"
      :initial-config="internalConfig"
      v-bind="internalConfig.props"
      :editable="internalEditable"
    />
  </div>
</template>

<script>
import _ from 'lodash'

import LayoutUtils from './utils/layout'

import EventBus from './eventBus'

import Layout from './components/Layout/Index'
import {mapMutations} from "vuex";

export default {
  name: 'LayoutComposer',
  components: {
    Layout,
  },
  props: {
    displayComponents: Object,
    config: Object,
    editable: Boolean,
    selectedIndex: Number
  },
  data() {
    return {
      dragging: false,
      internalConfig: {},
      internalEditable: true,
    }
  },
  computed: {
    configHumanized: {
      get() {
        const internalConfigNoIds = _.cloneDeep(this.internalConfig)
        LayoutUtils.removeIds(internalConfigNoIds)
        return JSON.stringify(internalConfigNoIds, null, 4)
      },
      set(newValue) {
        try {
          this.internalConfig = JSON.parse(newValue)
          LayoutUtils.addIds(this.internalConfig)
        } catch (e) {
          // catch
        }
      },
    },
  },
  watch: {
    internalConfig() {
      const internalConfigNoIds = _.cloneDeep(this.internalConfig)
      LayoutUtils.removeIds(internalConfigNoIds)
    },
    config() {
      this.internalConfig = _.cloneDeep(this.config)
      LayoutUtils.addIds(this.internalConfig)
    },
  },
  created() {
    this.internalConfig = _.cloneDeep(this.config)
    LayoutUtils.addIds(this.internalConfig)
  },
  mounted() {
    this.internalEditable = true
    if (window.documentHasDropListener) return
    document.addEventListener('dragstart', () => {
      setTimeout(() => {
        this.dragging = true
      }, 100)
    })

    document.addEventListener('dragover', event => {
      event.preventDefault()
      if (!this.internalEditable) return true
    })

    document.addEventListener('drop', event => {
      event.preventDefault()
    })

    EventBus.$on('global:dragend', () => {
      if (!this.internalEditable) return false
      setTimeout(() => {
        this.buildConfig()
        this.dragging = false
      }, 100)
    })

    window.documentHasDropListener = true
  },
  methods: {
    ...mapMutations(['setSelectedItem', 'saveFieldPositions', 'updateFields','saveSectionsToLocalStorage']),
    buildConfig() {
      // const sections = this.$store.state.sections
      // const newConfig = this.$children[0].getConfig()

      // sections[this.selectedIndex].layout = this.$children[0].getConfig()
      // this.setSelectedItem(this.selectedIndex)
      // this.saveFieldPositions(this.$children[0].getConfig())
      // this.saveSectionsToLocalStorage(sections)
      // console.log(this.$children[0].getConfig())
      // console.log('config=',sections[this.selectedIndex].layout)

      this.$emit('change:config',this.$children[0].getConfig())
    },
  }
}
</script>

<style>
.LayoutComposer {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.LayoutComposer__Actions {
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: none;
  margin-bottom: 15px;
  padding-bottom: 10px;
}

.LayoutComposer__ActionButton {
  align-self: flex-end;
  margin: 10px;
  text-decoration: none;
  color: #007bff;
  background-color: transparent;
  background-image: none;
  border: 1px solid #007bff;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.25;
  border-radius: 0.25rem;
}
</style>
