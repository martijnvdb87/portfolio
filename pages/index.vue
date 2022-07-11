<template>
  <App>
    <Avatar />
    <header>
      <h1>Martijn van den Bosch</h1>
      <p>Full Stack Developer</p>
    </header>

    <article>
      <section>
        <header>
          <Icon type="id" size="4" color="gray-900" stroke-width="2" />
          <h2>Introduction</h2>
        </header>
        <p>
          I'm a self-thought full stack developer from the Netherlands. I
          started developing websites when I was 12 years old and today, more
          than 20 years later, I still love every second of it.
        </p>
      </section>

      <section>
        <header>
          <Icon
            type="building-skyscraper"
            size="4"
            color="gray-900"
            stroke-width="2"
          />
          <h2>Work</h2>
        </header>
        <p>
          Currently, I'm working as lead developer at
          <Link href="https://www.skillstown.com" target="_blank"
            >SkillsTown</Link
          >, which is a company part of the
          <Link href="https://www.saltagroup.com/" target="_blank"
            >Salta Group</Link
          >
          (formerly known as the NCOI Group). We are improving and maintaining
          two online learning platforms. The first one uses the
          <Link
            href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)"
            target="_blank"
            >LAMP stack</Link
          >
          (PHP & MySQL) and a custom in-house built Javascript framework (some
          parts use React). The second platform is using .NET for the backend
          and Vue for the frontend using Typescript.
        </p>
      </section>

      <section>
        <header>
          <Icon type="sofa" size="4" color="gray-900" stroke-width="2" />
          <h2>Free time</h2>
        </header>
        <p>
          Besides watching series on Netflix and spending time with my wife, I
          like working on multiple
          <Link
            href="https://github.com/martijnvdb87?tab=repositories"
            target="_blank"
            >personal projects</Link
          >.
        </p>
      </section>

      <Socials />
    </article>
  </App>
</template>

<script lang="ts">
import Vue from 'vue'
import App from '~/components/App.vue'
import Link from '~/components/Link.vue'
import Socials from '~/components/Socials.vue'
import Avatar from '~/components/Avatar.vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { App, Link, Socials, Avatar, Icon },
  head: {
    title: 'Home — Martijn van den Bosch',
  },
})
</script>

<style scoped>
h1 {
  @apply text-2xl font-semibold text-gray-900;
}

header {
  @apply mb-16;
}

header p {
  @apply mb-8;
  font-size: 1.05em;
}

h2 {
  @apply text-sm text-gray-900;
  font-weight: 600;
  font-size: 0.95em;
}

article p {
  @apply mb-14 text-base;
  line-height: 1.6;
  font-size: 1.05em;
}

section header {
  display: flex;
  align-items: center;
  gap: 0.5em;
  @apply mb-2 text-gray-800;
}
</style>
