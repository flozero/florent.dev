export function useCreateBlogHead(article:any) {
    const { path } = useRoute()

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
          { property: 'og:site_name', content: 'Florent Dev' },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          {
            property: 'og:url',
            content: 'https://florent.dev',
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
          { name: 'twitter:site', content: '@flozeroo' },
          { name: 'twitter:card', content: 'summary_large_image' },
          {
            name: 'twitter:url',
            content: 'https://florent.dev',
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
            href: `https://florent.dev/${path}`,
          },
        ],
      })
}