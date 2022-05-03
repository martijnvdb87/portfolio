<template>
  <div v-if="hasStatus" class="status">
    <span class="status__label">
      <span class="status__icon">
        {{ icon }}
      </span>
      <span class="status__text">
        <label>{{ label }}</label>
      </span>
    </span>
  </div>
</template>

<script>
import Vue from 'vue'
import { DateTime } from 'luxon'

export default Vue.extend({
  name: 'Status',
  data() {
    return {
      hasStatus: false,
      icon: 'code',
      label: '',
      statusInterval: null,
      genericStatusData: null,
    }
  },
  mounted() {
    this.getCurrentStatus()
  },
  beforeUnmount() {
    clearInterval(this.statusInterval)
  },
  methods: {
    async getCurrentStatus() {
      this.statusInterval = setInterval(async () => {
        await this.updateStatus()
      }, 60000)

      await this.updateStatus()
    },
    async updateStatus() {
      let activities = []

      activities.push(...(await this.fetchGenericStatusData()))

      activities = this.filterActivities(activities)
      activities = this.addCurrentTimes(activities)
      activities = this.orderActivities(activities)

      const currentActivity = activities.find(
        (activity) =>
          activity.start <= DateTime.now() && DateTime.now() < activity.end
      )

      this.hasStatus = !!currentActivity

      if (currentActivity) {
        this.label = currentActivity.name
        this.icon = currentActivity.icon

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

    async fetchGenericStatusData() {
      if (!this.genericStatusData) {
        const data = await fetch('/status.json')
        this.genericStatusData = await data.json()
      }

      return this.genericStatusData
    },

    filterActivities(data) {
      const isWeekend = ['Sat', 'Sun'].includes(DateTime.now().weekdayShort)

      return data.filter((entry) => {
        if (entry.date === 'daily') return true

        if (entry.date === DateTime.now().weekdayLong.toLowerCase()) return true
        if (entry.date === DateTime.now().weekdayShort.toLowerCase())
          return true

        if (
          Array.isArray(entry) &&
          entry.date.includes(DateTime.now().weekdayLong.toLowerCase())
        )
          return true
        if (
          Array.isArray(entry) &&
          entry.date.includes(DateTime.now().weekdayShort.toLowerCase())
        )
          return true

        if (entry.date === 'weekend' && isWeekend) return true
        if (entry.date === 'workday' && !isWeekend) return true

        return false
      })
    },

    addCurrentTimes(data) {
      return data.map((entry) => {
        const start = DateTime.now()
          .setZone('Europe/Amsterdam')
          .set(this.getTimeUnits(entry.time))
        const end = start.plus(this.getTimeUnits(entry.duration))

        entry.start = start.toUTC()
        entry.end = end.toUTC()

        return entry
      })
    },

    getTimeUnits(timeString) {
      const units = {
        hours: 0,
        minutes: 0,
        seconds: 0,
      }

      const parts = timeString.split(':')
      if (parts.length > 0) {
        units.hours = parseInt(parts[0])
        units.hours = !isNaN(units.hours) ? units.hours : 0
        units.hours = Math.min(23, Math.max(0, units.hours))
      }
      if (parts.length > 1) {
        units.minutes = parseInt(parts[1])
        units.minutes = !isNaN(units.minutes) ? units.minutes : 0
        units.minutes = Math.min(59, Math.max(0, units.minutes))
      }
      if (parts.length > 2) {
        units.seconds = parseInt(parts[2])
        units.seconds = !isNaN(units.seconds) ? units.seconds : 0
        units.seconds = Math.min(59, Math.max(0, units.seconds))
      }

      return units
    },

    orderActivities(data) {
      return data.sort((a, b) => Math.sign(a.priority - b.priority))
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
  @apply absolute flex h-full items-center top-0 left-0 rounded-full bg-white text-xs shadow-md;
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
  @apply flex items-center justify-center h-8 w-8 text-lg;
  transform: translateY(-1px);
}
</style>
