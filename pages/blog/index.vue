<template>
    <main class="content-container">
        Blog
        <!-- <AppTitle>{{ title }}</AppTitle>
        <AppIntro>{{ description }}</AppIntro>
        <Tags :section="section" />
        <ItemList v-if="articles !== null" :list="articles" :section="section" /> -->
        <ul class="py-6 m-auto max-w-4xl">
          <li v-for="item in articles" :key="item._path" class="py-4 border-b">
            <NuxtLink
              :to="item.url || item._path"
              :target="item.url ? '_blank' : '_self'"
            >
              <NuxtImg
                :provider="item.provider"
                :src="item.image"
                :alt="item.title"
                width="272"
                height="272"
                fit="thumb"
                format="webp"
                class="scale-90 transition-all duration-400 hover:scale-100 rounded"
              />
            </NuxtLink>
          </li>
        </ul>
    </main>
</template>

<script setup lang="ts">
// import type { BlogPost, Sections } from '~/types'
const { data: articles } = await useAsyncData('articles',
  () => queryContent('blog')
    .where({ published: { $ne: false } })
    .sort({ date: -1 })
    .find(),
)
const title: string = 'All Blog Posts'
const description: string = 'Here\'s a list of all my blog posts'
const section = 'blog'
useHead({
  title,
  meta: [{ name: 'description', content: description }],
})
</script>
