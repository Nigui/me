<template>
  <q-btn
    :icon="icon"
    round
    outline
    color="white"
    :size="size"
    @click="onClick"
    :aria-label="icon"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { openURL } from 'quasar';

export default defineComponent({
  name: 'CircledBtn',
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'md',
    },
    link: {
      type: String,
    },
  },
  emits: ['click'],
  methods: {
    onClick() {
      if (this.link) {
        openURL(this.link);
      } else {
        this.$emit('click');
      }
    },
  },
});
</script>
