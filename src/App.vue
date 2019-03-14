<template>
  <div id="app">
    <skip-link></skip-link>

    <welcome title="Rebuilding Bartik"></welcome>
  </div>
</template>

<script>
import SkipLink from './components/SkipLink'
import Welcome from './components/Welcome'

export default {
  name: 'app',
  components: {
    SkipLink,
    Welcome,
  }
}
</script>

<style>
@tailwind base;
@tailwind components;

.skip-link:focus {
  left: 50%;
  transform: translateX(-50%);
}

@tailwind utilities;
</style>
