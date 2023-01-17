<template>
  <div class="content-container">
    <Card class="md:py-40 py-24 mb-10 text-center bg-primaryContainer text-onPrimaryContainer imgKit">
        <h1 class="text-display">Florent giraud</h1>
        <h2 class="text-headline mb-8">
          Vous êtes plus que le framework que vous avez mastered.
        </h2>
    </Card>
    <main class="pb-20 md:pb-0  max-w-[1400px] mx-auto">
      <section id="news" class="mb-8">
        <h2 class="text-headline mb-4">Denier articles</h2>
        <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
          <li v-for="article in articles" :key="article._path">
            <PreviewArticle :article="article" />
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>

const { data: articles } = await useAsyncData('all-articles',
  () => queryContent('blog')
    .where({ published: { $ne: false }, featured: { $ne: true } })
    .sort({ date: -1 })
    .limit(5)
    .find()
)

</script>

<style scoped>

.imgKit {
  background-image: url("https://ik.imagekit.io/fgiraud/tr:h400/mountainThree.png");
  background-repeat: no-repeat;
  background-position:  100px;
  background-size: cover;
  background-position-y: 0px;
  background-position-x: 0px;
  background-attachment: fixed;
}
</style>