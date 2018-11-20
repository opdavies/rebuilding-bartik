<template>
  <div class="bg-blue-dark">
    <button
      type="button"
      class="w-full p-3 block sm:hidden bg-blue-lighter text-sm text-grey-darker text-left focus:outline-none"
      @click="open = !open"
    >
      <div class="flex items-center justify-between">
        <div>
          {{ navText }} - Main navigation
        </div>
        <div>
          <img src="img/hamburger.svg" alt="">
        </div>
      </div>
    </button>

    <div class="container mx-auto px-4 sm:block" :class="[ open ? 'block' : 'hidden' ]">
      <div class="mt-2 sm:mt-0">
        <nav class="flex flex-wrap pb-1 md:p-0 -mx-3 sm:-mx-0">
          <div
            class="px-1 sm:pl-0 mb-1 md:mb-0 inline-block w-full sm:w-1/3 md:w-auto"
            :key="link.title"
            v-for="link in links"
          >
            <a
              class="block text-sm no-underline text-black px-3 py-2 rounded-lg md:rounded-none md:rounded-t-lg sm:text-center"
              :class="[ link.active ? 'bg-white' : 'bg-blue-lighter hover:bg-white' ]"
              :href="link.href"
            >
              {{ link.title }}
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        open: false,

        links: [
          {
            title: 'Home',
            href: '#0',
            active: true,
          },
          {
            title: 'Drupal',
            href: 'https://www.drupal.org',
            active: false,
          },
          {
            title: 'Vue.js',
            href: 'https://vuejs.org',
            active: false,
          },
          {
            title: 'Tailwind CSS',
            href: 'https://tailwindcss.com',
            active: false,
          },
          {
            title: 'View code on GitHub',
            href: 'https://github.com/opdavies/vue-tailwind-bartik',
            active: false,
          },
          // {
          //   title: 'Read blog post',
          //   href: 'https://github.com/opdavies/tailwind-bartik',
          //   active: false,
          // },
        ]
      }
    },

    computed: {
      navText: function () {
        return this.open ? 'Hide' : 'Show';
      }
    }
  }
</script>
