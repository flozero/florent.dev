<template>
    <main class="content-container max-w-[1400px] mx-auto">
        <div class="py-4 mb-4">
          <h1 class="text-headline font-bold">
            All articles
          </h1>
          <p>
            Here's a list of all my articles
          </p>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2">
          <li v-for="article in articles" :key="article._path" class="py-4 border-b">
            <PreviewArticle :article="article" />
          </li>
        </ul>
    </main>
</template>

<script setup lang="ts">
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
