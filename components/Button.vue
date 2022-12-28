<template>
    <button class="primary text-body">
        <slot />
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped>
    button {
        background-color: var(--md-sys-color-primary);
        color: var(--md-sys-color-on-primary);
        @apply px-6 py-4 rounded-full;
    }

</style>