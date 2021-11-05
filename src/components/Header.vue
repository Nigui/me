<template>
  <q-header elevated>
    <q-toolbar class="bg-background q-py-md">
      <ProfilePic src="img/profile-pic.webp" size="40px" />
      <q-toolbar-title class="text-weight-bolder">{{
        $t(`pages.${config}.title`)
      }}</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: {
    ProfilePic: defineAsyncComponent(() => import('./ProfilePic.vue')),
  },
  props: {
    config: {
      type: String,
      required: true,
    },
  },
});
</script>
