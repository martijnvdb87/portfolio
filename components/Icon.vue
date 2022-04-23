<template>
  <a :href="data.url" :class="data.class" target="_blank">
    <svg v-if="type == 'github'" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
    </svg>

    <svg v-else-if="type == 'codepen'" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-codepen" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 15l9 6l9 -6l-9 -6l-9 6"></path>
      <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
      <line x1="3" y1="9" x2="3" y2="15"></line>
      <line x1="21" y1="9" x2="21" y2="15"></line>
      <line x1="12" y1="3" x2="12" y2="9"></line>
      <line x1="12" y1="15" x2="12" y2="21"></line>
    </svg>
    
    <svg v-else-if="type == 'linkedin'" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <line x1="8" y1="11" x2="8" y2="16"></line>
      <line x1="8" y1="8" x2="8" y2="8.01"></line>
      <line x1="12" y1="16" x2="12" y2="11"></line>
      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
    </svg>

    <svg v-else-if="type == 'instagram'" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="4" y="4" width="16" height="16" rx="4"></rect>
      <circle cx="12" cy="12" r="3"></circle>
      <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
    </svg>
    
    <svg v-else-if="type == 'email'" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <polyline points="3 7 12 13 21 7"></polyline>
    </svg>
  </a>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Icon',
  props: ['type'],
  computed: {
    data: function() {
      switch(this.type) {
        case 'github':
          return {
            class: `icon-${this.type}`,
            url: 'https://github.com/martijnvdb87'
          };

        case 'codepen':
          return {
            class: `icon-${this.type}`,
            url: 'https://codepen.io/Martijnvdb87'
          };

        case 'linkedin':
          return {
            class: `icon-${this.type}`,
            url: 'https://www.linkedin.com/in/martijn-van-den-bosch-8a6574190/'
          };

        case 'instagram':
          return {
            class: `icon-${this.type}`,
            url: 'https://www.instagram.com/martijnvdb87/'
          };

        case'email':
          return {
            class: `icon-${this.type}`,
            url: 'mailto:martijnvdb87@gmail.com'
          };

        default:
          return {
            class: 'icon',
            url: ''
          };
      }
    }
  }
});
</script>

<style scoped>
a {
  display: inline-flex;
  border-radius: 50%;
  @apply bg-black w-7 h-7 grid place-content-center;
}
svg {
  stroke-width: 2px;
  @apply text-white w-5 h-5;
}

.icon-github {
  @apply bg-gray-700;
}

.icon-codepen {
  @apply bg-green-500;
}

.icon-linkedin {
  @apply bg-blue-500;
}

.icon-instagram {
  @apply bg-pink-500;
}

.icon-email {
  @apply bg-yellow-500;
}
</style>