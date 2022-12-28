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
            <div class="text-label">Courses</div>
          </nuxt-link>
        </li>
      </ul>
      <div class="text-center">
        <div class="mb-6">
          <a href="https://www.linkedin.com/in/fgiraud42/" target="_blank">
            <Icon name="brandico:linkedin"/>
          </a>
        </div>
        <div class="mb-6">
          <a href="https://github.com/jsbaguette" target="_blank">
            <Icon name="brandico:github"/>
          </a>
        </div>
        <div>
          <a href="https://twitter.com/flozeroo" target="_blank">
            <Icon name="brandico:twitter"/>
          </a>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.sidenav {
  @apply fixed flex py-6 shadow bg-primary text-onPrimary;

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