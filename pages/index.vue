<template>
  <div>
    <div class="content-container">
      <Card class="p-8 md:p-16 mb-10 text-center bg-primaryContainer text-onPrimaryContainer">
          <h1 class="text-display font-bold">Florent giraud</h1>
          <h2 class="text-headline mb-8">
            You are more than the framework you've mastered.
          </h2>
          <Button>
            About me
          </Button>
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