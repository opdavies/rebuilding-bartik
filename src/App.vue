<template>
  <div id="app">
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

<style>
@tailwind preflight;
@tailwind components;

.widget {
  @apply bg-grey-lightest p-4;
}

.widget:not(:last-child) {
  @apply mb-4;
}

@tailwind utilities;
</style>
