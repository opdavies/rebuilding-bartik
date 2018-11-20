<template>
  <div>
    <div class="bg-blue-dark text-white py-4">
      <div class="container mx-auto px-4 relative">
        <div class="flex flex-col-reverse">
          <div class="flex items-center">
            <img src="img/logo.svg" alt="" class="mr-4">
            <div class="text-2xl">
              <a href="#0" class="text-white no-underline">Drupal {{ version }}</a>
            </div>
          </div>

          <div class="text-sm flex justify-end">
            <a href="#0" class="text-white no-underline hover:underline">Log in</a>
          </div>
        </div>

      </div>
    </div>

    <main-menu></main-menu>

    <div class="bg-white pt-3 pb-4 lg:pb-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row-reverse md:-mx-8 my-6">
          <div class="w-full md:w-auto md:flex-1 md:px-6 mb-8 md:mb-0">
            <div class="font-serif">
              <h1 class="font-normal">Welcome to Drupal {{ version }}</h1>
              <p>No front page content has been created yet.</p>
              <p>Follow the <a href="#0" class="text-blue-dark hover:text-blue no-underline border-b border-blue border-dotted hover:bg-solid">User Guide</a> to start building your site.</p>
            </div>

            <div class="mt-10">
              <a href="#0">
                <img src="img/feed.svg" alt="">
              </a>
            </div>
          </div>

          <div class="w-full md:w-1/3 lg:w-1/4 flex-none md:px-6">
            <div class="p-4" style="background-color: #f6f6f2">
              <h2 class="font-serif font-normal text-base border-b border-solid border-grey-light mb-3">Search</h2>

              <div>
                <form action="#" class="flex">
                  <input type="text" class="border border-solid border-grey p-2 w-full xl:w-auto">

                  <button type="submit" class="bg-grey-light px-3 rounded-full border-b border-solid border-grey-dark ml-2 flex-none" style="background-color: #f0f0f0">
                    <img src="img/loupe.svg" class="block">
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-xs text-white">
      <div class="container mx-auto px-4 pt-16 pb-4">
        <div class="border-t border-solid border-grey-darkest pt-6 -mb-6">
          <div class="mb-6">
            <p><a href="#0" class="text-white no-underline border-b border-dotted border-white">Contact</a></p>
          </div>

          <div class="mb-6">
            <p>
              A clone of <a href="https://www.drupal.org" class="text-white no-underline border-b border-dotted border-white">Drupal</a>’s default theme (Bartik).
              Built by <a href="https://www.oliverdavies.uk" class="text-white no-underline border-b border-dotted border-white">Oliver Davies</a>
              using <a href="https://vuejs.org" class="text-white no-underline border-b border-dotted border-white">Vue.js</a>
              and <a href="https://tailwindcss.com" class="text-white no-underline border-b border-dotted border-white">Tailwind CSS</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from './MainMenu.vue';

export default {
  components: { MainMenu },

  props: {
    version: {
      type: String,
      required: true
    }
  }
}
</script>
