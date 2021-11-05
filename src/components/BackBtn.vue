<template>
  <q-page-sticky position="bottom-left" :offset="[5, 5]">
    <q-fab
      icon="eva-arrow-back-outline"
      label="toggle menu"
      :hide-label="true"
      @click="back"
    />
  </q-page-sticky>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BackBtn',

  methods: {
    back(): void {
      this.$router.back();
    },
  },
});
</script>
