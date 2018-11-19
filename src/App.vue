<template>
  <div id="app">
    <WelcomeToDrupal version="8.6.3"/>
  </div>
</template>

<script>
import WelcomeToDrupal from './components/WelcomeToDrupal.vue'

export default {
  name: 'app',
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
