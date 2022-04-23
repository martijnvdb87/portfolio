<template>
  <App>
    <header>
      <h1>Martijn van den Bosch</h1>
      <p>Full Stack Developer</p>
      <Socials />
    </header>
  </App>
</template>

<script lang="ts">
import Vue from 'vue'
import App from '~/components/App.vue'
import Socials from '~/components/Socials.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { App, Socials },
})
</script>

<style scoped>
h1 {
  @apply text-xl font-medium text-gray-900;
}

p {
  @apply text-gray-500 mb-8;
}
</style>
