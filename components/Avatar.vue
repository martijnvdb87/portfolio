<template>
  <div class="avatar">
    <Status />
  </div>
</template>

<script>
import Vue from 'vue'
import Status from './Status.vue'

export default Vue.extend({
  name: 'Avatar',
  components: { Status },
})
</script>

<style scoped>
.avatar {
  @apply flex items-end justify-end h-24 w-24 rounded-full bg-gray-200 mb-8;
  background-image: url('https://avatars.githubusercontent.com/u/41451264');
  background-size: cover;
}

svg {
  stroke-width: 2px;
  @apply w-5 h-5;
}
</style>
