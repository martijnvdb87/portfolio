<script>
import MainMenu from '~/components/MainMenu.vue'
import App from '~/components/App.vue'

export default {
  components: {
    App,
    MainMenu,
  },
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()

    const [previous, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('date', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      post,
      previous,
      next,
    }
  },
}
</script>

<template>
  <App>
    <MainMenu />
    <article>
      <nuxt-content :document="post" />
      <hr />
      <NuxtLink v-if="previous" :to="'/blog/' + previous.slug">{{
        previous.title
      }}</NuxtLink>
      <NuxtLink v-if="next" :to="'/blog/' + next.slug">{{
        next.title
      }}</NuxtLink>
    </article>
  </App>
</template>
