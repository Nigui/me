<template>
  <q-page class="flex column items-center justify-center q-pa-md text-center">
    <ProfilePic class="q-my-md" src="img/profile-pic.png" />

    <div class="text-h6 text-weight-bold">I'm</div>
    <div
      class="text-h3 text-weight-bolder text-uppercase line-height-none q-my-sm"
    >
      Guillaume
    </div>
    <div class="text-h5 text-weight-bolder text-uppercase q-mb-md">
      <div class="bg-clip-blue">Web Developer</div>

      <div>& <span class="bg-clip-red">UX/UI Designer</span></div>
    </div>
    <div class="text-body1 text-weight-light">
      <div>📍Nantes, FRANCE 🇫🇷</div>
      <div>and around the 🌍 from 🏠</div>
    </div>

    <div class="q-my-md max-w-450px text-body1">
      I love design then build products. I’m experienced in mobile and web
      development. I worked in blockchain and decentralized world since my
      graduation. I like to share my knowledge and enhance productivity
    </div>

    <div class="flex row q-gutter-x-md">
      <CircledBtn icon="eva-github-outline" link="https://github.com/nigui" />
      <CircledBtn
        icon="eva-twitter-outline"
        link="https://twitter.com/GuiillaumeN"
      />
      <!-- <CircledBtn icon="eva-email-outline" link="mailto:" />
      <CircledBtn icon="eva-file-text-outline" /> -->
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProfilePic from 'components/ProfilePic.vue';
import CircledBtn from 'components/CircledBtn.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ProfilePic,
    CircledBtn,
  },
});
</script>
