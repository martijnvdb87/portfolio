<template>
  <App>
    <MainMenu />
    About
  </App>
</template>

<script lang="ts">
import Vue from 'vue'
import App from '~/components/App.vue'

export default Vue.extend({
  name: 'AboutPage',
  components: { App },
})
</script>
