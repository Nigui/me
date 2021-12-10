<template>
  <q-layout view="hHh LpR fFf">
    <Header v-if="headerConfig" :config="headerConfig" />
    <q-page-container>
      <q-page class="flex col-grow justify-center">
        <router-view v-slot="{ Component }">
          <component
            ref="page"
            :is="Component"
            class="items-center max-w-450px"
          />
        </router-view>
        <Menu />
        <BackBtn v-if="showBackBtn" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    Menu: defineAsyncComponent(() => import('components/Menu.vue')),
    Header: defineAsyncComponent(() => import('components/Header.vue')),
    BackBtn: defineAsyncComponent(() => import('components/BackBtn.vue')),
  },
  computed: {
    headerConfig() {
      return this.$route.name;
    },
    showBackBtn() {
      return this.$route.meta.back;
    },
  },
});
</script>
