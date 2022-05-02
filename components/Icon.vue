<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    :stroke-width="stroke"
    :class="[getSize, getColor]"
  >
    <template v-if="type == 'github'">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
      ></path>
    </template>

    <template v-else-if="type == 'codepen'">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 15l9 6l9 -6l-9 -6l-9 6"></path>
      <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
      <line x1="3" y1="9" x2="3" y2="15"></line>
      <line x1="21" y1="9" x2="21" y2="15"></line>
      <line x1="12" y1="3" x2="12" y2="9"></line>
      <line x1="12" y1="15" x2="12" y2="21"></line>
    </template>

    <template v-else-if="type == 'linkedin'">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <line x1="8" y1="11" x2="8" y2="16"></line>
      <line x1="8" y1="8" x2="8" y2="8.01"></line>
      <line x1="12" y1="16" x2="12" y2="11"></line>
      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
    </template>

    <template v-else-if="type == 'instagram'">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="4" y="4" width="16" height="16" rx="4"></rect>
      <circle cx="12" cy="12" r="3"></circle>
      <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
    </template>

    <template v-else-if="type == 'email'">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <polyline points="3 7 12 13 21 7"></polyline>
    </template>

    <template v-else-if="type == 'id'">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="3" y="4" width="18" height="16" rx="3"></rect>
      <circle cx="9" cy="10" r="2"></circle>
      <line x1="15" y1="8" x2="17" y2="8"></line>
      <line x1="15" y1="12" x2="17" y2="12"></line>
      <line x1="7" y1="16" x2="17" y2="16"></line>
    </template>

    <template v-else-if="type == 'building-skyscraper'">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="3" y1="21" x2="21" y2="21"></line>
      <path d="M5 21v-14l8 -4v18"></path>
      <path d="M19 21v-10l-6 -4"></path>
      <line x1="9" y1="9" x2="9" y2="9.01"></line>
      <line x1="9" y1="12" x2="9" y2="12.01"></line>
      <line x1="9" y1="15" x2="9" y2="15.01"></line>
      <line x1="9" y1="18" x2="9" y2="18.01"></line>
    </template>

    <template v-else-if="type == 'sofa'">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 1 1 4 0v5a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2z"
      ></path>
      <path d="M4 11v-3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v3"></path>
      <path d="M12 5v9"></path>
    </template>

    <template v-else-if="type == 'code'">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="7 8 3 12 7 16"></polyline>
      <polyline points="17 8 21 12 17 16"></polyline>
      <line x1="14" y1="4" x2="10" y2="20"></line>
    </template>

    <template v-else-if="type == 'bed'">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />
      <circle cx="7" cy="10" r="1" />
    </template>

    <template v-else-if="type == 'bike'">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="5" cy="18" r="3" />
      <circle cx="19" cy="18" r="3" />
      <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />
      <circle cx="17" cy="5" r="1" />
    </template>

    <template v-else-if="type == 'device-tv'">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <polyline points="16 3 12 7 8 3" />
    </template>
  </svg>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Icon',
  props: {
    type: {
      type: String,
      default: '',
    },
    stroke: {
      type: String,
      default: '2',
    },
    size: {
      type: String,
      default: '5',
    },
    color: {
      type: String,
      default: 'black',
    },
  },
  computed: {
    getSize() {
      return `w-${this.size} h-${this.size}`
    },
    getColor() {
      if (['white', 'black'].includes(this.color)) {
        return `text-${this.color}`
      }
      return `text-${
        this.color.split('-').length === 1 ? `${this.color}-500` : this.color
      }`
    },
  },
})
</script>
