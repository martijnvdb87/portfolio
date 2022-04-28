<template>
  <a :href="href" :target="target" rel="noreferrer noopener">
    <span v-if="description != ''" class="visually-hidden">{{
      description
    }}</span>
    <slot></slot>
  </a>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IconLink',
  props: {
    href: {
      type: String,
      default: '#',
    },
    target: {
      type: String,
      default: '_self',
    },
    description: {
      type: String,
      default: '',
    },
  },
})
</script>

<style scoped>
a {
  display: inline-flex;
  border-radius: 50%;
  @apply w-7 h-7 grid place-content-center;
}

.visually-hidden {
  border: 0;
  padding: 0;
  margin: 0;
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(
    1px 1px 1px 1px
  ); /* IE6, IE7 - a 0 height clip, off to the bottom right of the visible 1px box */
  clip: rect(
    1px,
    1px,
    1px,
    1px
  ); /*maybe deprecated but we need to support legacy browsers */
  clip-path: inset(
    50%
  ); /*modern browsers, clip-path works inwards from each corner*/
  white-space: nowrap; /* added line to stop words getting smushed together (as they go onto seperate lines and some screen readers do not understand line feeds as a space */
}
</style>
