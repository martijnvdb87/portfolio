<template>
  <div v-if="hasStatus" class="status">
    <span class="status__label">
      <span class="status__icon">
        <Icon :type="icon" />
      </span>
      <span class="status__text">
        <label>{{ label }}</label>
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
  data() {
    return {
      hasStatus: false,
      icon: 'code',
      label: '',
      statusInterval: null,
    }
  },
  mounted() {
    this.getCurrentStatus()
  },
  beforeUnmount() {
    clearInterval(this.statusInterval)
  },
  methods: {
    getCurrentStatus() {
      this.updateStatus()
      this.statusInterval = setInterval(() => {
        this.updateStatus()
      }, 60000)
    },
    updateStatus() {
      if (this.hasStatus) {
        setTimeout(() => {
          const statusTextLabelElement = this.$el.querySelector(
            '.status__text label'
          )
          this.$el.style.setProperty(
            '--status-width',
            `${statusTextLabelElement.offsetWidth}px`
          )
        })
      }
    },
  },
})
</script>

<style scoped>
.status {
  --status-width: 200px;
  @apply relative flex items-center justify-center h-8 w-8 rounded-full font-semibold;
}

.status__label {
  @apply absolute flex h-full items-center top-0 left-0 rounded-full bg-white text-xs shadow-lg;
}

.status__text {
  @apply ease-in-out duration-300 delay-200;
  max-width: 0px;
  opacity: 0;
  overflow: hidden;
  transform: translateX(-10px);
}

.status:hover .status__text {
  transition-delay: 0ms;
  opacity: 1;
  max-width: var(--status-width);
  transform: none;
}

label {
  @apply pr-4 pl-1;
  white-space: nowrap;
}

.status__icon {
  @apply flex items-center justify-center h-8 w-8;
}
</style>
