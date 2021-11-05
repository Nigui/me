<template>
  <transition-group
    appear
    :enter-active-class="`animated ${show}`"
    :leave-active-class="`animated ${hide}`"
  >
    <slot />
  </transition-group>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AnimateGroup',
  props: {
    show: {
      type: String,
      default: 'fadeIn',
    },
    hide: {
      type: String,
      default: 'fadeOut',
    },
  },
});
</script>
