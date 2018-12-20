<template>
  <div class="drupal-block">
    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
.drupal-block
  @apply bg-grey-lightest p-4

  &:not(:last-child)
    @apply mb-4
</style>
