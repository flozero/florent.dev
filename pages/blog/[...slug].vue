<template>
  <main
    class="content-container mx-auto max-w-[1400px]"
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
      <section aria-label="summary" class="mb-4">
        <p class="text-body">
          {{ article.description }}
        </p>
      </section>
      <hr class="bg-primary">
      <div class="grid grid-cols-8 mt-4">
        <aside class="col-span-full lg:col-span-2 row-start-1 w-full">
          <div class="block lg:sticky top-20">
            <nav class="p-4 bg-primaryContainer text-onPrimaryContainer border border-slate-200 rounded-lg mb-4 ">
              <div class="text-label mb-4">Utilise speechSynthesis web API</div>
              <div class="mb-4" v-if="errored">
                Error using speechSynthesis API
              </div>
              <div v-else>
                <Icon v-if="!isPending || isPaused" name="fa6-regular:circle-play" class="text-5xl mr-4 text-primary" @click="() => isPaused ? resume() : read()" />
                <Icon v-else name="fa6-regular:circle-pause" class="text-5xl mr-4 text-primary" @click="pause"/>
                <Icon name="fa6-regular:circle-stop" class="text-5xl text-primary" @click="cancel" />
              </div>
            </nav>
            <BlogToc :links="article.body.toc.links" />
          </div>
        </aside>
        <div
          class="col-span-full md:col-span-6 md:col-start-1 row-start-2 lg:row-start-1 prose w-full pr-4 text-body pb-20"
          id="content-to-read"
        >
          <ContentRenderer :value="article">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </div>
      </div>
    </article>
  </main>
</template>


<script setup lang="ts">
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

const { 
  read,
  pause,
  resume,
  cancel,
  isPending,
  isPaused,
  errored
} = useVoiceReader()

</script>


<style scoped>
  :deep(h2 a) {
    @apply text-primary;
  }
</style>