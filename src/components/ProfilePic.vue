<template>
  <div class="relative-position">
    <div class="animated-border"></div>
    <q-img
      class="rounded"
      :src="src"
      loading="lazy"
      alt="profile pic"
      :style="{ width: size, height: size }"
    >
      <template v-slot:loading>
        <img src="~assets/incognito.svg" />
      </template>
      <template v-slot:error>
        <img src="~assets/incognito.svg" />
      </template>
    </q-img>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProfilePic',
  props: {
    src: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '100px',
    },
  },
});
</script>
