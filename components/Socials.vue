<template>
  <ul>
    <li>
      <IconLink
        href="https://github.com/martijnvdb87"
        target="_blank"
        description="Visit my Github page (opens in new tab)"
        class="bg-gray-700"
      >
        <Icon type="github" color="white" />
      </IconLink>
    </li>
    <li>
      <IconLink
        href="https://codepen.io/Martijnvdb87"
        target="_blank"
        description="Visit my Codepen page (opens in new tab)"
        class="bg-green-500"
      >
        <Icon type="codepen" color="white" />
      </IconLink>
    </li>
    <li>
      <IconLink
        href="https://www.linkedin.com/in/martijn-van-den-bosch-8a6574190/"
        target="_blank"
        description="Visit my LinkedIn page (opens in new tab)"
        class="bg-blue-500"
      >
        <Icon type="linkedin" color="white" />
      </IconLink>
    </li>
    <li>
      <IconLink
        href="https://www.instagram.com/martijnvdb87/"
        target="_blank"
        description="Visit my Instagram page (opens in new tab)"
        class="bg-pink-500"
      >
        <Icon type="instagram" color="white" />
      </IconLink>
    </li>
    <li>
      <IconLink
        href="mailto:martijnvdb87@gmail.com"
        target="_blank"
        description="Send me an email"
        class="bg-yellow-500"
      >
        <Icon type="email" color="white" />
      </IconLink>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  name: 'Socials',
  components: { Icon },
})
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
