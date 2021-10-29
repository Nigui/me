<template>
  <q-page class="flex column items-center justify-center q-pa-md text-center">
    <div class="text-h3 text-weight-bolder">Hello world _</div>
    <q-avatar class="q-my-md" size="132px">
      <img src="~assets/profile-pic.png" alt="profile pic" />
    </q-avatar>

    <span class="text-h6 text-weight-bold">I'm</span><br />
    <span class="text-h3 text-weight-bolder text-uppercase line-height-none"
      >Guillaume</span
    ><br />
    <span class="text-h5 text-weight-regular text-uppercase"
      >Web Developer<br />
      & UX/UI Designer<br
    /></span>
    <span class="text-body1 text-weight-light"
      >📍Nantes, FRANCE 🇫🇷 <br />
      and around the 🌍 from 🏠</span
    >

    <div class="q-my-md max-w-450px text-body1">
      I love design then build products. I’m experienced in mobile and web
      development and worked in blockchain and decentralized world since my
      graduation. I like to share my knowledge and enhance productivity
    </div>

    <div class="flex row q-gutter-x-sm">
      <q-btn
        icon="mail"
        round
        outline
        color="white"
        size="lg"
        @click="open('mail')"
      />
      <q-btn
        icon="mail"
        round
        outline
        color="white"
        size="lg"
        @click="open('mail')"
      />
      <q-btn
        icon="mail"
        round
        outline
        color="white"
        size="lg"
        @click="open('mail')"
      />
      <q-btn
        icon="mail"
        round
        outline
        color="white"
        size="lg"
        @click="open('mail')"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { openURL } from 'quasar';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  methods: {
    open(type: string) {
      let url = '';
      switch (type) {
        case 'github':
          url = 'https://github.com/nigui';
          break;
        case 'twitter':
          url = 'https://twitter.com/GuiillaumeN';
          break;
        case 'mail':
          url = 'mailto:guin56@gmail.com';
          break;
        case 'resume':
          url = '';
          break;
      }
      return openURL(url);
    },
  },
});
</script>
<style scoped>
.max-w-450px {
  max-width: 450px;
}
</style>
