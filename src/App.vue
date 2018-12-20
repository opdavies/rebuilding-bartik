<template>
  <div id="app">
    <a href="#0" class="skip-link text-white bg-black-60 py-1 px-2 rounded-b-lg focus:no-underline focus:outline-none">Skip to main content</a>

    <Welcome title="Rebuilding Bartik"/>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'

export default {
  name: 'app',
  components: {
    Welcome,
  }
}
</script>

<style lang="sass">
@tailwind preflight
@tailwind components

.skip-link:focus
  left: 50%
  transform: translateX(-50%)

@tailwind utilities
</style>
