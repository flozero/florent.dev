<template>
     <footer  class="max-w-[1200px] mx-auto mt-48 hidden md:block">
          <div class="grid gap-8 grid-cols-5">
            <div class="col-span-2">
              <div class="mb-10">
                Florent Giraud
              </div>
              <p>Software architect working at paper, with over 7 years experience in Frontend development. Previously NuxtJS Ambassador.</p>
            </div>
            <div class="flex justify-around col-span-3">
              <div>
                <div class="mb-10">
                  Navigation
                </div>
                <ul>
                  <li>
                    <nuxt-link to="/" class="flex mb-4">
                      <Icon name="gala:layer" class="mr-2"/>
                      <div class="label-medium">Home</div>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/videos" class="flex mb-4">
                      <Icon name="gala:tv" class="mr-2"/>
                      <div class="label-medium">Videos</div>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
              <div>
                <div class="mb-10">
                  Socials
                </div>
                <ul>
                  <li>
                    <a class="flex mb-4" href="https://www.linkedin.com/in/fgiraud42/" target="_blank">
                      <Icon name="brandico:linkedin" class="mr-2"/>
                      <div class="label-medium">Linkedin</div>
                    </a>
                  </li>
                  <li>
                    <a class="flex mb-4" href="https://github.com/jsbaguette" target="_blank">
                      <Icon name="brandico:github" class="mr-2"/>
                      <div class="label-medium">Github</div>
                    </a>
                  </li>
                  <li>
                    <a class="flex mb-4" href="https://twitter.com/flozeroo" target="_blank">
                      <Icon name="brandico:twitter" class="mr-2"/>
                      <div class="label-medium">Twitter</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </footer>
</template>