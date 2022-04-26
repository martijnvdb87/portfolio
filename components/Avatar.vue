<template>
<div class="avatar">
<div class="status">
  <span>
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="7 8 3 12 7 16"></polyline>
      <polyline points="17 8 21 12 17 16"></polyline>
      <line x1="14" y1="4" x2="10" y2="20"></line>
    </svg>
  </span>
</div>
</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Avatar'
});
</script>

<style scoped>
.avatar {
  position: relative;
  @apply h-24 w-24 rounded-full bg-gray-200 mb-8;
  background-image: url("https://avatars.githubusercontent.com/u/41451264");
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