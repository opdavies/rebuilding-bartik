<template>
  <div>
    <div class="bg-blue-dark">
      <div class="py-4 text-white">
        <div id="header" class="container mx-auto px-4 relative">
          <div class="flex flex-col-reverse">
            <div class="flex items-center">
              <img src="img/logo.svg" alt="" class="mr-4">
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

      <main-menu></main-menu>
    </div>

    <div class="bg-white pt-3 pb-4 lg:pb-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row-reverse md:-mx-8 my-6">
          <div id="main" class="w-full md:w-auto md:flex-1 md:px-6 mb-8 md:mb-0">
            <div class="font-serif">
              <h1 class="font-normal">Welcome to {{ title }}</h1>
              <p>No front page content has been created yet.</p>
              <p>Follow the <a href="#0" class="">User Guide</a> to start building your site.</p>
            </div>

            <div class="mt-10">
              <a href="#0">
                <img src="img/feed.svg" alt="">
              </a>
            </div>
          </div>

          <div class="w-full md:w-1/3 lg:w-1/4 flex-none md:px-6 -mb-4">
            <sidebar-block>
              <h2 class="font-serif font-normal text-base text-grey-darkest border-b border-solid border-grey-light mb-3">Search</h2>

              <div>
                <form action="#" class="flex">
                  <input type="text" class="border border-solid border-grey p-2 w-full xl:w-auto">

                  <button type="submit" class="bg-grey-lighter px-3 rounded-full border-b border-solid border-grey-dark ml-2 flex-none">
                    <img src="img/loupe.svg" class="block">
                  </button>
                </form>
              </div>
            </sidebar-block>
          </div>
        </div>
      </div>
    </div>

    <div id="footer" class="text-xs text-white">
      <div class="container mx-auto px-4 pt-16 pb-4">
        <div class="border-t border-solid border-grey-darkest pt-6 -mb-6">
          <div class="mb-6">
            <p><a href="#0">Contact</a></p>
          </div>

          <div class="mb-6">
            <p>
              A clone of <a href="https://www.drupal.org">Drupal</a>’s default theme (Bartik).
              Built by <a href="https://www.oliverdavies.uk">Oliver Davies</a>
              using <a href="https://vuejs.org">Vue.js</a>
              and <a href="https://tailwindcss.com">Tailwind CSS</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from './MainMenu.vue';
import SidebarBlock from './SidebarBlock.vue'

export default {
  components: {
    MainMenu,
    SidebarBlock,
  },

  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
#header a
  @apply text-white no-underline

  &:hover,
  &:focus
    @apply underline

#main a
  @apply text-blue-dark no-underline border-b border-blue border-dotted

  &:hover,
  &:focus
    @apply text-blue border-solid

#footer a
  @apply text-white no-underline border-b border-dotted border-white

  &:hover,
  &:focus
    @apply border-none
</style>
