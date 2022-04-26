<template>
  <App>
    <header>
      <h1>Martijn van den Bosch</h1>
      <p>Full Stack Developer</p>
    </header>

    <article>
      <section>
        <header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-id"
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
            <rect x="3" y="4" width="18" height="16" rx="3"></rect>
            <circle cx="9" cy="10" r="2"></circle>
            <line x1="15" y1="8" x2="17" y2="8"></line>
            <line x1="15" y1="12" x2="17" y2="12"></line>
            <line x1="7" y1="16" x2="17" y2="16"></line>
          </svg>
          <h2>Introduction</h2>
        </header>
        <p>
          I'm a self-thought full stack developer from the Netherlands. I
          started developing websites when I was just 12 years old and today,
          more than 20 years later, I love every second of it.
        </p>
      </section>

      <section>
        <header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-building-skyscraper"
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
            <line x1="3" y1="21" x2="21" y2="21"></line>
            <path d="M5 21v-14l8 -4v18"></path>
            <path d="M19 21v-10l-6 -4"></path>
            <line x1="9" y1="9" x2="9" y2="9.01"></line>
            <line x1="9" y1="12" x2="9" y2="12.01"></line>
            <line x1="9" y1="15" x2="9" y2="15.01"></line>
            <line x1="9" y1="18" x2="9" y2="18.01"></line>
          </svg>
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
          (formerly known as the NCOI Group). We are using the
          <Link
            href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)"
            target="_blank"
            >LAMP stack</Link
          >
          for our online learning platform.
        </p>
      </section>

      <section>
        <header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-sofa"
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
              d="M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 1 1 4 0v5a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2z"
            ></path>
            <path d="M4 11v-3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v3"></path>
            <path d="M12 5v9"></path>
          </svg>
          <h2>Free time</h2>
        </header>
        <p>
          Besides watching series on Netflix and spending time with my wife, I
          like working on multiple <Link href="https://github.com/martijnvdb87?tab=repositories" target="_blank">personal projects</Link>.
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

export default Vue.extend({
  name: 'IndexPage',
  components: { App, Link, Socials },
})
</script>

<style scoped>
h1 {
  @apply text-xl font-semibold text-gray-900;
}

header {
  @apply mb-12;
}

header p {
  @apply text-gray-500 mb-8;
}

h2 {
  @apply text-sm;
  font-weight: 600;
}

article p {
  @apply mb-14 text-base;
}

section header {
  display: flex;
  align-items: center;
  gap: 0.5em;
  @apply mb-2 text-gray-800;
}

section header svg {
  height: 1rem;
  width: 1rem;
  stroke-width: 2;
}
</style>
