<template>
  <div id="app" class="min-h-screen font-sans bg-black text-white text-sm leading-normal">
    <skip-link></skip-link>

    <header class="bg-blue-300">
      <div class="py-4 text-white">
        <div id="header" class="mx-auto px-4 relative xl:max-w-6xl">
          <div class="flex flex-col-reverse">
            <div class="flex items-center">
              <img src="@/assets/img/logo.svg" alt="" class="mr-4">
              <div class="text-2xl">
                <a href="#0">{{ title }}</a>
              </div>
            </div>

            <div class="text-sm flex justify-end">
              <a href="#0">Log in</a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-1">
        <main-menu></main-menu>
      </div>
    </header>

    <div class="bg-white text-black">
      <div class="max-w-6xl mx-auto px-4 py-6">
        <drupal-message type="status">
          <p>
            A Bartik clone, built with
            <a href="https://vuejs.org" class="text-blue-300 hover:text-blue-200 no-underline border-b border-dotted hover:border-solid border-blue-300">Vue.js</a>
            and <a href="https://tailwindcss.com" class="text-blue-300 hover:text-blue-200 no-underline border-b border-dotted hover:border-solid border-blue-300">Tailwind CSS</a>.
          </p>
        </drupal-message>

        <div class="-mx-6 md:flex md:flex-row-reverse">
          <main id="main" class="flex-1 px-6 pb-8 lg:pb-12">
            <div class="font-serif">
              <h1 class="text-3xl font-normal leading-tight">Welcome to {{ title }}</h1>
              <p class="mt-1">No front page content has been created yet.</p>
              <p>Follow the <a href="#0">User Guide</a> to start building your site.</p>
            </div>

            <div class="mt-6 lg:mt-10"><a href="#0"><img src="@/assets/img/feed.svg" alt=""></a></div>
          </main>

          <aside class="w-full px-6 -mb-4 md:w-1/3 lg:w-1/4">
            <sidebar-block>
              <h2 class="font-serif font-normal text-base text-grey-600 border-b border-solid border-grey-300">Search</h2>

              <div class="mt-3">
                <form action="#" class="flex">
                  <input type="text" class="w-full py-1 px-2 border border-solid border-grey-400 xl:w-auto">

                  <button type="submit" class="flex-none ml-2 px-3 rounded-full bg-grey-200 border-b border-solid border-grey-500">
                    <img src="@/assets/img/search.svg" class="block">
                  </button>
                </form>
              </div>
            </sidebar-block>
          </aside>
        </div>
      </div>
    </div>

    <footer id="footer" class="bg-black text-white text-xs">
      <div class="max-w-6xl mx-auto px-4 pt-16 pb-8 bg-grey-700">
        <div class="border-t border-solid border-grey-600 pt-6">
          <div>
            <p><a href="#0">Contact</a></p>
          </div>

          <div class="mt-6">
            <p>
              A clone of <a href="https://www.drupal.org">Drupal</a>’s default theme (Bartik).
              Built by <a href="https://www.oliverdavies.uk">Oliver Davies</a>
              using <a href="https://vuejs.org">Vue.js</a>
              and <a href="https://tailwindcss.com">Tailwind CSS</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'
import SidebarBlock from '@/components/SidebarBlock'
import SkipLink from '@/components/SkipLink'

export default {
  name: 'app',

  components: {
    MainMenu,
    SidebarBlock,
    SkipLink
  },

  data () {
    return {
      title: 'Rebuilding Bartik'
    }
  }
}
</script>

<style src="@/assets/css/tailwind.css"/>
