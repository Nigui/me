<template>
  <q-layout view="hHh LpR fFf">
    <q-page-container>
      <q-page class="fullscreen">
        <router-view />

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-fab
            icon="eva-menu-outline"
            active-icon="eva-close-outline"
            direction="up"
            label="toggle menu"
            :hide-label="true"
          >
            <q-fab-action
              label="fr"
              @click="updateLocale('fr')"
              :icon="`img:${image('fr')}`"
              :outline="current === 'fr'"
            />
            <q-fab-action
              label="en"
              @click="updateLocale('en')"
              :icon="`img:${image('en')}`"
              :outline="current === 'en'"
            />
          </q-fab>
        </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  computed: {
    current(): string {
      return this.$i18n.locale;
    },
  },

  methods: {
    updateLocale(lang: string): void {
      this.$i18n.locale = lang;
    },

    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    image(lang: string): any {
      return require(`src/assets/flags/${lang}.svg`);
    },
  },
});
</script>
<style scoped lang="scss">
.q-btn {
  background-color: $background !important;
}
</style>
