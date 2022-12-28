<template>
    <button class="primary text-body">
        <slot />
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped>
    button {
        @apply px-6 py-4 rounded-full bg-primary text-onPrimary;
    }

</style>