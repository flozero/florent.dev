<template>
  <main
    class="content-container mx-auto max-w-[1400px]"
  >
    <article v-if="article !== null">
      <header v-if="article" class="py-4 mb-4">
        <h1 class="text-headline font-bold">
          {{ article.title }}
        </h1>
        <Button @click="readText">READ</Button>
        <Button @click="pauseText">PAUSE</Button>
        <Button @click="resumeText">RESUME</Button>
        <Button @click="cancel">CANCEL</Button>
        <select v-model="voiceSelected">
          <option v-for="voice in voices" :key="voice" :value="voice">
            {{  voice.name  }} ({{  voice.lang  }})
          </option>
        </select>
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
          <BlogToc :links="article.body.toc.links" class="block lg:sticky top-20" />
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

const synth = ref(null);
const voices = ref([])
const voiceSelected = ref(null)

const pauseText = () => {
  synth.value.pause();
}

const resumeText = () => {
  synth.value.resume();
}

const cancel = () => {
  synth.value.cancel();
}

const populateVoiceList = () => {
  voices.value = synth.value.getVoices().sort(function (a, b) {
    if (!voiceSelected.value) {
      if (a.default) {
        voiceSelected.value = a
      }
      if (b.default) {
        voiceSelected.value = b
      }
    }
    const aname = a.name.toUpperCase();
    const bname = b.name.toUpperCase();

    if (aname < bname) {
      return -1;
    } else if (aname == bname) {
      return 0;
    } else {
      return +1;
    }
  });

  // voiceSelected.value = voices.value[0]
}

const readText = (text: string) => {
  if (synth.value.speaking) {
    console.error("speechSynthesis.speaking");
    return;
  }
  
  const _text = document.querySelector("#content-to-read")?.innerText
  _text.replace("\"\"", "")
  const utterThis = new SpeechSynthesisUtterance(_text);

  utterThis.onend = function (event) {
    console.log("SpeechSynthesisUtterance.onend");
  };

  utterThis.onerror = function (event) {
    console.error("SpeechSynthesisUtterance.onerror");
  };

    utterThis.voice = unref(voiceSelected)
    utterThis.pitch = 1;
    utterThis.rate = 0.9;
    synth.value.speak(utterThis);
}

onMounted(() => {
  synth.value = window.speechSynthesis;
  synth.value.onvoiceschanged = () => {
    populateVoiceList()
  }
})
</script>


<style scoped>
  :deep(h2 a) {
    @apply text-primary;
  }
</style>