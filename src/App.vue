<template>
  <div id="app">
    <Welcome version="8.6.3"/>
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

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;
</style>
