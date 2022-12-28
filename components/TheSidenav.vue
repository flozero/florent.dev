<template>
    <div class="sidenav">
      <ul>
        <li class="sm:mb-6 flex items-center justify-center text-center">
          <nuxt-link to="/">
            <Icon name="gala:layer" class="mb-1"/>
            <div class="text-label">Home</div>
          </nuxt-link>
        </li>
        <li class="sm:mb-6 flex items-center justify-center text-center">
          <nuxt-link to="/videos">
            <Icon name="gala:tv" class="mb-1"/>
            <div class="text-label">Videos</div>
          </nuxt-link>
        </li>
      </ul>
      <button class="text-center"
       :aria-label="$colorMode.preference"
        type="button"
        @click="setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')"
      >
        <Icon name="fa6-regular:moon" class="mb-1" v-if="$colorMode.preference === 'dark'"/>
        <Icon name="fa6-regular:star" class="mb-1" v-else/>
        <div class="text-label">Color</div>
      </button>
  </div>
</template>

<script setup lang="ts">
type Theme = 'light' | 'dark'
const setColorTheme = (newTheme: Theme) => {
  const colorMode = useColorMode()
  console.log("je suis la", colorMode)
  colorMode.preference = newTheme
}
</script>

<style scoped>
.sidenav {
  background: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface);
  @apply fixed flex py-6 shadow;

  z-index: 8;
}

.sidenav {
  flex-direction: row;
  @apply bottom-0 left-0 right-0;
}

.sidenav > ul {
  display: flex;
  @apply flex justify-around w-full;
}

.sidenav > div {
  display: none;
}

@media screen and (min-width: 600px) {
  .sidenav {
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      overflow-y: auto;
      z-index: 8;
      min-width: 88px;
      max-width: 88px;
  }

  .sidenav > ul {
    display: block;
    @apply w-auto;
  }

  .sidenav > div {
    display: block;
  }
}
</style>