<template>
  <div class="body-large h-full">
    <TheSidenav />
    <NuxtPage />
  </div>
</template>

<script setup>
const description = 'Florent Giraud, Software architect working at paper, with over 7 years experience in Frontend development. Previously NuxtJS Ambassador.'
const ogTitle = 'Florent helps others learn web development and more'
const twitterDescription = 'My website of where I showcase my blog, resources etc'
const twitterCard = 'https://florent.dev/twitter-card.png'
const mySite = 'https://florent.dev'

useHead({
  htmlAttrs: {
    lang: 'en',
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