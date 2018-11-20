<template>
  <div id="app" class="h-full text-black bg-black text-sm leading-normal">
    <Welcome version="8.6.3"/>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'

export default {
  components: {
    Welcome,
  }
}
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;
</style>
