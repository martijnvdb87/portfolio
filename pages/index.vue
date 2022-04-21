<template>
  <App>
    <MainMenu />
    Home
  </App>
</template>

<script lang="ts">
import Vue from 'vue'
import App from '~/components/App.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { App },
})
</script>
