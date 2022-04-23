<template>
<ul>
  <li>
    <Icon type="github" />
  </li>
  <li>
    <Icon type="codepen" />
  </li>
  <li>
    <Icon type="linkedin" />
  </li>
  <li>
    <Icon type="instagram" />
  </li>
  <li>
    <Icon type="email" />
  </li>
</ul>
</template>

<script lang="ts">
import Vue from 'vue';
import Icon from '~/components/Icon.vue';

export default Vue.extend({
  name: 'Socials',
  components: { Icon },
});
</script>

<style scoped>
ul {
  display: flex;
}
li {
  @apply mr-2;
}
li:last-child {
  margin-right: 0;
}
</style>