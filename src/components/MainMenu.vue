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

    <div class="container mx-auto px-4">
      <nav class="p-1 md:p-0 sm:block" :class="[ open ? 'block' : 'hidden' ]">
        <a href="#0" class="inline-block text-sm no-underline text-black bg-white px-3 py-2 rounded-lg md:rounded-none md:rounded-t-lg w-full sm:w-1/3 md:w-auto sm:text-center">Home</a>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        open: false,
      }
    },

    computed: {
      navText: function () {
        return this.open ? 'Hide' : 'Show';
      }
    }
  }
</script>
