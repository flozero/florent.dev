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
const title: string = article.value?.title || ''
const description: string = article.value?.description || ''
const image: string = article.value?.image || ''
const ogImage: string = article.value?.ogImage || ''
useHead({
  title: article.value?.title || '',
  meta: [
    { name: 'description', content: description },
    {
      name: 'description',
      content: description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: 'Debbie Codes' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: 'https://debbie.codes',
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: ogImage || image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@debs_obrien' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: 'https://debbie.codes',
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: ogImage || image,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://debbie.codes/${path}`,
    },
  ],
})
</script>
