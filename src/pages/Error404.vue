<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center">
    <div>
      <div class="text-h1 text-weight-bolder">404</div>

      <div class="text-h5" style="opacity: 0.4">Nothing here</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        outline
        rounded
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Error404',
});
</script>
