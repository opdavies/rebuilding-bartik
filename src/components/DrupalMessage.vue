<template>
    <div :class="[ wrapperClasses, wrapperClasses ? 'pl-2 rounded-sm' : '' ]">
    <div class="py-4 pl-3 pr-4 mb-4 border flex items-center rounded-sm" :class="classes">
      <svg v-if="type == 'status'" class="fill-current w-4 h-4 text-green-300 mr-3" xmlns="http://www.w3.org/2000/svg"><path d="M6.464 13.676a.502.502 0 0 1-.707 0L.797 8.721a.502.502 0 0 1 0-.707l1.405-1.407a.5.5 0 0 1 .707 0l2.849 2.848a.504.504 0 0 0 .707 0l6.629-6.626a.502.502 0 0 1 .707 0l1.404 1.404a.504.504 0 0 1 0 .707l-8.741 8.736z"/></svg>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
  },

  computed: {
    classes: function () {
      return {
        status: 'border-green-200 text-green-400 bg-green-100'
      }[this.type]
    },

    wrapperClasses: function () {
      return {
        status: 'bg-green-300'
      }[this.type]
    }
  }
}
</script>
