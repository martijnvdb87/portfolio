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
  position: relative;
  @apply h-24 w-24 rounded-full bg-gray-200 mb-8;
  background-image: url('https://avatars.githubusercontent.com/u/41451264');
  background-size: cover;
}

.status {
  position: absolute;
  bottom: 0px;
  right: 0px;
  @apply flex items-center justify-center h-8 w-8 rounded-full bg-white;
}

svg {
  stroke-width: 2px;
  @apply w-5 h-5;
}
</style>
