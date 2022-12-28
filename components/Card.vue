<template>
    <div class="card" :class="`card-${props.kind}`">
        <slot />
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        kind: {
            default: "primary-lower",
            type: String
        }
    })
</script>

<style scoped>
    .card { 
        @apply rounded-3xl;
    }

    .card-primary {
        background: var(--md-sys-color-primary);
        color: var(--md-sys-color-on-primary);
    }

    .card-primary-lower {
        background: var(--md-sys-color-primary-container);
        color: var(--md-sys-color-on-primary-container);
    }

    .card-secondary {
        background: var(--md-sys-color-secondary);
        color: var(--md-sys-color-on-secondary);
    }

    .card-secondary-lower {
        background: var(--md-sys-color-secondary-container);
        color: var(--md-sys-color-on-secondary-container);
    }

    .card-tertiary {
        background-color: var(--md-sys-color-tertiary);
        color: var(--md-sys-color-on-tertiary);
    }

    .card-tertiary-lower {
        background-color: var(--md-sys-color-tertiary-container);
        color: var(--md-sys-color-on-tertiary-container);
    }

    .card-primary-gradient {
        /* @apply bg-gradient-to-r from-violet-500 to-fuchsia-500; */
        /* @apply bg-gradient-to-r from-orange-500 to-orange-200; */
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
        --tw-gradient-from: var(--md-sys-color-primary);
        --tw-gradient-to: rgb(249 115 22 / 0);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        --tw-gradient-to: var(--md-sys-color-primary-container);
    }

</style>