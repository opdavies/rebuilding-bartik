<template>
  <div id="app" class="h-full text-black bg-black text-sm leading-normal">
    <WelcomeToDrupal version="8.6.3"/>
  </div>
</template>

<script>
import WelcomeToDrupal from './components/WelcomeToDrupal.vue'

export default {
  components: {
    WelcomeToDrupal,
  }
}
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;
</style>
