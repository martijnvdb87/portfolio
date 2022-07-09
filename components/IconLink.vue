<template>
  <a class="icon-link" :href="href" :target="target" rel="noreferrer noopener">
    <span v-if="description != ''" class="icon-link__description">{{
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

<style lang="scss">
.icon-link {
  display: inline-flex;
  border-radius: 50%;
  @apply w-10 h-10 grid place-content-center;

  &__description {
    border: 0;
    padding: 0;
    margin: 0;
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
}
</style>
