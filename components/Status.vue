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
import seedrandom from 'seedrandom'

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
    seededRandom(seed, max, min = 0) {
      return Math.round(seedrandom(seed)() * (max - min) + min)
    },
    async getCurrentStatus() {
      this.statusInterval = setInterval(async () => {
        await this.updateStatus()
      }, 60000)

      await this.updateStatus()
    },
    async updateStatus() {
      let activities = []

      activities.push(...(await this.fetchGenericStatusData()))

      activities = this.orderActivities(activities)
      const currentActivity = this.filterActivities(activities)

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

    findStartOfLastWeekDay(day, currentDay = null) {
      if (!currentDay) {
        currentDay = DateTime.now().setZone('Europe/Amsterdam').startOf('day')
      }

      if (day === 'daily') {
        return currentDay
      } else if (day === 'weekend') {
        let foundDay = currentDay

        while (true) {
          if (['Sat', 'Sun'].includes(foundDay.weekdayShort)) {
            return foundDay
          }

          foundDay = foundDay.minus({ day: 1 })
        }
      } else if (day === 'workday') {
        let foundDay = currentDay

        while (true) {
          if (!['Sat', 'Sun'].includes(foundDay.weekdayShort)) {
            return foundDay
          }

          foundDay = foundDay.minus({ day: 1 })
        }
      } else if (
        [
          'mon',
          'tue',
          'wed',
          'thu',
          'fri',
          'sat',
          'sun',
          'monday',
          'tuesday',
          'wednesday',
          'thursday',
          'friday',
          'saturday',
          'sunday',
        ].includes(day.toLowerCase())
      ) {
        let foundDay = currentDay

        while (true) {
          if (
            day.toLowerCase() === foundDay.weekdayShort.toLowerCase() ||
            day.toLowerCase() === foundDay.weekdayLong.toLowerCase()
          ) {
            return foundDay
          }

          foundDay = foundDay.minus({ day: 1 })
        }
      }

      return null
    },

    parseTime(time, seed) {
      if (Array.isArray(time) && time.length > 1) {
        const timeFirstUnits = this.getTimeUnits(time[0])
        const totalTimeFirstSeconds =
          3600 * (timeFirstUnits.hours ?? 0) +
          60 * (timeFirstUnits.minutes ?? 0) +
          (timeFirstUnits.seconds ?? 0)

        const timeSecondUnits = this.getTimeUnits(time[1])
        const totalTimeSecondSeconds =
          3600 * (timeSecondUnits.hours ?? 0) +
          60 * (timeSecondUnits.minutes ?? 0) +
          (timeSecondUnits.seconds ?? 0)
        const difference =
          Math.max(totalTimeFirstSeconds, totalTimeSecondSeconds) -
          Math.min(totalTimeFirstSeconds, totalTimeSecondSeconds)

        const startTime =
          totalTimeFirstSeconds < totalTimeSecondSeconds ? time[0] : time[1]
        const { hour, minute, second } = DateTime.now()
          .set(this.getTimeUnits(startTime))
          .plus({ seconds: this.seededRandom(seed, difference) })
          .toObject()
        return `${hour < 10 ? '0' : ''}${hour}:${
          minute < 10 ? '0' : ''
        }${minute}:${second < 10 ? '0' : ''}${second}`
      } else if (Array.isArray(time) && time.length === 1) {
        return time[0]
      } else if (typeof time === 'string') {
        return time
      }

      return '00:00:00'
    },

    filterActivities(data) {
      const now = DateTime.now().setZone('Europe/Amsterdam')
      const currentDaySeed = now.startOf('day').toUnixInteger()

      return data.find((entry) => {
        const seed = currentDaySeed + JSON.stringify(entry)

        const date = entry.date
        const time = this.parseTime(entry.time, seed)
        const duration = this.parseTime(entry.duration, seed)

        const startDay = this.findStartOfLastWeekDay(date)
        const start = startDay.set(this.getTimeUnits(time))
        const end = start.plus(this.getTimeUnits(duration))

        if (start <= now && now < end) {
          return true
        }

        const previousEntryStartDay = this.findStartOfLastWeekDay(
          date,
          startDay.minus({ seconds: 1 })
        )

        if (previousEntryStartDay) {
          const previousEntryStart = previousEntryStartDay.set(
            this.getTimeUnits(time)
          )

          const previousEntryEnd = previousEntryStart.plus(
            this.getTimeUnits(duration)
          )

          if (previousEntryStart <= now && now < previousEntryEnd) {
            return true
          }
        }

        return false
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
