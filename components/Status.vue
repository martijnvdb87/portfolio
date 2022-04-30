<template>
  <div class="status">
    <span class="status__label">
      <span class="status__icon">
        <Icon :type="icon" />
      </span>
    </span>
  </div>
</template>

<script>
import Vue from 'vue'
import Icon from './Icon.vue'

export default Vue.extend({
  name: 'Status',
  components: { Icon },
  data () {
    return {
      icon: 'code',
      label: 'label',
    }
  },
})
</script>

<style scoped>
.status {
  @apply relative flex items-center justify-center h-8 w-8 rounded-full font-semibold;
}

.status__label {
  @apply absolute flex h-full items-center top-0 left-0 rounded-full bg-white text-xs shadow-lg;
}

.status__text {
  @apply ease-in-out duration-300 delay-200;
  max-width: 0px;
  overflow: hidden;
}

.status:hover .status__text {
  transition-delay: 0ms;
  max-width: 250px;
}

label {
  @apply pr-4 pl-1;
}

.status__icon {
  @apply flex items-center justify-center h-8 w-8;
}
</style>
