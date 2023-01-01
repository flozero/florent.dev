<template>
  <div>
    <div class="content-container">
      <!-- <nuxt-img
        provider="imagekit"
        src="/mountainOne.png"
        height="400"
        fit="cover"
        class="w-full"
        :modifiers="modifs"
      /> -->
      <Card class=" md:py-40 py-24 mb-10 text-center bg-primaryContainer text-onPrimaryContainer imgKit">
          <h1 class="text-display">Florent giraud</h1>
          <h2 class="text-headline mb-8">
            You are more than the framework you've mastered.
          </h2>
      </Card>
      <main class="max-w-[1200px] mx-auto pb-20 md:pb-0">
        <!-- <section id="me">
          <lite-youtube
            videoid="I7NKWGIewgM"
            playlabel="Kingdom Hearts a failli avoir un anime : 26 anecdotes et secrets sur KH 1 🔥 JV Facts"
            params="controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"
          />
        </section> -->
        <section id="news" class="mb-8">
          <h2 class="text-headline mb-4">News about me</h2>
          <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
            <li v-for="i in 5" :key="i">
              <Card class="bg-secondary text-onSecondary">
                <div class="p-8">
                  <h3 class="mb-4 headline-small">Android Development Summit</h3>
                  <p class="body-medium">Catch Material updates and tutorials at ADS 2022, beginning October 24</p>
                </div>
              </Card>
            </li>
          </ul>
        </section>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>

const modifs = {
    overlayText: 'overlay made easy',
    overlayRadius: 30,
    overlayTextBackground: 'FFFFFF80',
    overlayTextFontSize: '45',
    overlayTextColor: '000000',
    overlayTextPadding: '40'
}

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