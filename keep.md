export default {
  // computed: {
  //   backgroundStyles() : any {
  //     const imgUrl = this.$img('/cat.png', { }, { fit: "cover" })
  //     return {
  //       backgroundImage: `url('${imgUrl}')`
  //     }
  //   }
  // }
}

// <script setup lang="ts">

// // import type { BlogPostPreview, PodcastPreview, VideoPreview } from '~/types'

// // const { data: articles } = await useAsyncData('articles-home',
// //   () => queryContent<BlogPostPreview>('blog')
// //     .where({ published: { $ne: false } })
// //     .without('body')
// //     .skip(1)
// //     .sort({ date: -1 })
// //     .limit(6)
// //     .find()
// // )

// // const { data: featuredPost } = await useAsyncData('featured-article',
// //   () => queryContent<BlogPostPreview>('blog')
// //     .where({ published: { $ne: false } })
// //     .without('body')
// //     .sort({ date: -1 })
// //     .limit(1)
// //     .findOne()
// // )

// // const { data: videos } = await useAsyncData('videos-home',
// //   () => queryContent<VideoPreview>('videos')
// //     .where({ published: { $ne: false } })
// //     .without('body')
// //     .sort({ date: -1 })
// //     .limit(4)
// //     .find()
// // )

// // const { data: podcasts } = await useAsyncData('podcasts-home',
// //   () => queryContent<PodcastPreview>('podcasts')
// //     .where({ published: { $ne: false } })
// //     .without('body')
// //     .sort({ date: -1 })
// //     .limit(3)
// //     .find()
// // )
// </script>