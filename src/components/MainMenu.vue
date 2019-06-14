<template>
  <div>
    <button
      type="button"
      class="w-full block p-3 bg-blue-100 text-sm text-grey-600 text-left focus:outline-none sm:hidden"
      @click="toggle"
    >
      <div class="flex items-center justify-between">
        <div>
          {{ navText }} - Main navigation
        </div>
        <div>
          <img src="@/assets/img/hamburger.svg" alt="">
        </div>
      </div>
    </button>

    <div class="mx-auto px-4 sm:block xl:max-w-6xl" :class="[ isOpen ? 'block' : 'hidden' ]">
      <div class="mt-2 sm:mt-0">
        <nav class="flex flex-wrap pb-1 -mx-3 sm:-mx-0 md:p-0">
          <div
            class="w-full inline-block px-1 mb-1 md:mb-0 sm:w-1/3 sm:pl-0 md:w-auto"
            :key="link.title"
            v-for="(link, index) in links"
          >
            <a
              class="block px-3 py-2 rounded-lg text-sm text-black no-underline sm:text-center md:rounded-none md:rounded-t-lg"
              :class="[ index == activeTab ? 'bg-white' : 'bg-blue-100 hover:bg-white' ]"
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
      activeTab: 0,
      isOpen: false,
      links: [
        {
          title: 'Home',
          href: '#0'
        },
        {
          title: 'Drupal',
          href: 'https://www.drupal.org'
        },
        {
          title: 'Vue.js',
          href: 'https://vuejs.org'
        },
        {
          title: 'Tailwind CSS',
          href: 'https://tailwindcss.com'
        },
        {
          title: 'View code on GitHub',
          href: 'https://github.com/opdavies/rebuilding-bartik'
        },
        {
          title: 'Read blog post',
          href: 'https://www.oliverdavies.uk/blog/rebuilding-bartik-with-vuejs-tailwind-css'
        }
      ]
    }
  },

  computed: {
    navText: function () {
      return this.isOpen ? 'Hide' : 'Show'
    }
  },

  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
