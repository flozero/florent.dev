<template>
  <div class="body-large h-full">
    <TheSidenav />
    <NuxtPage />
  </div>
</template>

<script setup>
const description = 'Florent Giraud, Software architect travaillant a paper, avec plus de 7 ans d\'experience. Anciennement NuxtJS Ambassadeur.'
const ogTitle = 'Florent aide les autres a apprendre le web development et plus'
const twitterDescription = 'Florent aide les autres a apprendre le web development et plus'
const twitterCard = 'https://florent.dev/twitter-card.png'
const mySite = 'https://florent.dev'

useHead({
  htmlAttrs: {
    lang: 'fr',
  },
  charset: 'utf-8',
  title: ogTitle,
  titleTemplate: title =>
    title !== ogTitle
      ? `${title} · Florent dev`
      : title,
  meta: [
    {
      name: 'description',
      content:
          description,
    },
    { property: 'og:site_name', content: mySite },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: mySite,
    },
    {
      property: 'og:title',
      content: ogTitle
      ,
    },
    {
      property: 'og:description',
      content:
          description,
    },
    {
      property: 'og:image',
      content: twitterCard,
    },
    { name: 'twitter:site', content: '@flozeroo' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: mySite,
    },
    {
      name: 'twitter:title',
      content: ogTitle,
    },
    {
      name: 'twitter:description',
      content: twitterDescription,
    },
    {
      name: 'twitter:image',
      content: twitterCard,
    },

  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'canonical',
      href: mySite,
    },
  ],
})
</script>