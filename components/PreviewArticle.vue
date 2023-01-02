<template>
    <div>
        <Card class="bg-secondaryContainer text-onSecondaryContainer hover:shadow-lg cursor-pointer">
            <nuxt-link :to="article._path">
                <NuxtImg
                    :provider="article.provider"
                    :src="article.image"
                    :alt="article?.alt || article.title"
                    height="400"
                    format="webp"
                    class="rounded-3xl"
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
                    <ul class="flex mt-2">
                        <li v-for="tag in article.tags" class="mr-2 uppercase text-tertiary font-bold">
                            {{  tag  }}
                        </li>
                    </ul>
                </div>
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