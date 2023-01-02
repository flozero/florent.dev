<template>
    <div>
        <Card class="bg-secondaryContainer text-onSecondaryContainer hover:shadow-lg cursor-pointer relative">
            <nuxt-link :to="article._path">
                <NuxtImg
                    :provider="article.provider"
                    :src="article.image"
                    :alt="article?.alt || article.title"
                    height="400"
                    format="webp"
                    class="rounded-3xl min-h-[150px]"
                />
                <div class="p-4">
                    <div class="text-title">
                        {{ article.title }}
                    </div>
                    <time
                        :datetime="article.date"
                        class="tracking-widest text-label text-primary"
                    >
                        {{ formatDate(article.date) }}
                    </time>
                </div>
                <ul class="flex mt-2 absolute top-0 right-0 z-1">
                    <li v-for="tag in article.tags" class="mr-2 uppercase text-tertiary text-body bg-secondaryContainer rounded-3xl p-2 hover:bg-secondary hover:text-onSecondary">
                        {{  tag  }}
                    </li>
                </ul>
            </nuxt-link>

        </Card>
    </div>
</template>

<script lang="ts" setup>
    defineProps({
        article: {
            type: Object,
            requied: true
        }
    })
</script>

<style lang="scss" scoped>

</style>