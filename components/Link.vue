<template>
  <a :href="href" :target="target" rel="noreferrer noopener">
    <slot></slot>
    <svg
      v-if="target == '_blank'"
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-external-link"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"
      ></path>
      <line x1="10" y1="14" x2="20" y2="4"></line>
      <polyline points="15 4 20 4 20 9"></polyline>
    </svg>
  </a>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Link',
  props: {
    href: {
      target: String,
      default: '#',
    },
    target: {
      target: String,
      default: '_self',
    },
  },
})
</script>

<style scoped>
a {
  display: inline-flex;
  align-items: center;
  gap: 0.125em;
  border-bottom: 1px solid #333;
}

svg {
  @apply inline-block;
  width: 1rem;
  height: 1rem;
  stroke-width: 1.5px;
}
</style>
