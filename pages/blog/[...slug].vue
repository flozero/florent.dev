<template>
  <main
    class="content-container mx-auto max-w-6xl"
  >
    <article v-if="article !== null">
      <header v-if="article" class="py-4 mb-4">
        <h1 class="text-headline font-bold">
          {{ article.title }}
        </h1>
        <time
          :datetime="article.date"
          class="tracking-widest text-title text-primary"
        >
          {{ formatDate(article.date) }}
        </time>
      </header>
      <div class="rounded-3xl mb-8">
        <NuxtImg
          :provider="article.provider"
          :src="article.image"
          :alt="article?.alt || article.title"
          height="400"
          format="webp"
          class="rounded-3xl"
        />
      </div>
      <section aria-label="summary" class="mb-10">
        <p class="text-body mb-4">
          {{ article.description }}
        </p>
      </section>
      <!-- <TagsList class="mb-2" :tags="article.tags" :section="section" /> -->
      <hr class="bg-primary">
      <div class="grid grid-cols-8 mt-4">
        <aside class="col-span-full lg:col-span-2 row-start-1 w-full">
          <BlogToc :links="article.body.toc.links" class="sticky top-20" />
        </aside>
        <div
          class="col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose w-full pr-4 text-body"
        >
          <ContentRenderer :value="article">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </div>
      </div>
      <!-- <BlogPrevNext :prev="prev" :next="next" /> -->
    </article>
  </main>
</template>


<script setup lang="ts">
// import type { BlogPost, PrevNext, Sections } from '~/types'
const { path } = useRoute()
const { data: article } = await useAsyncData(path.replace(/\/$/, ''),
  () => queryContent('blog')
    .where({ _path: path })
    .findOne(),
)
const { data } = await useAsyncData('prev-next',
  () => queryContent('blog')
    .where({ published: { $ne: false }, featured: { $ne: true } })
    .sort({ date: -1 })
    .only(['_path', 'title'])
    .findSurround(path),
)
const [prev, next] = data.value || []
const section = 'blog'

useCreateBlogHead(article)
</script>


<style scoped>
  :deep(h2 a) {
    @apply text-primary;
  }
</style>