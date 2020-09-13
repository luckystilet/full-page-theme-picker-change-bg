<template>
  <div id="app">
    <component :is="layout">
    </component>
  </div>
</template>
<script>
  import mainLayout from '@/components/layouts/mainLayout'
  export default {
    name: 'App',
    components: {mainLayout},
    data() {
      return {
        red: '',
        green: '',
        blue: '',
        isPickerOpen: false,
        theme: true,
      }
    },
    computed: {
      layout(){
        return (this.$route.meta.layout || 'main') + 'Layout'
      }
    },
    mounted(){
      // this.$store.dispatch('testAction_A')
      this.$store.dispatch('getIndex')
      // this.$store.commit('setIndex', {index: 123})
    },
  }
</script>
<style lang="scss" src="./assets/scss/style.scss"></style>
