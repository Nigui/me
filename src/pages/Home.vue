<template>
  <div class="fit flex column items-center justify-center q-pa-md text-center">
    <AnimateGroup show="fadeIn" hide="fadeOut">
      <ProfilePic key="pp" class="q-my-md" src="img/profile-pic.webp" />

      <div key="prename" class="text-h6 text-weight-bold">
        {{ $t('prename') }}
      </div>
      <div
        key="name"
        class="
          text-h3 text-weight-bolder text-uppercase
          line-height-none
          q-my-sm
        "
      >
        Guillaume
      </div>
      <div key="job" class="text-h5 text-weight-bolder text-uppercase q-mb-md">
        <div class="bg-clip-blue">{{ $t('developer') }}</div>

        <div>
          & <span class="bg-clip-red">{{ $t('designer') }}</span>
        </div>
      </div>
      <div key="location" class="text-body1 text-weight-light">
        <div>{{ $t('location.row1') }}</div>
        <div>{{ $t('location.row2') }}</div>
      </div>

      <div key="description" class="q-my-md max-w-450px text-body1">
        {{ $t('description') }}
      </div>

      <div key="actions" class="flex row q-gutter-x-md">
        <CircledBtn icon="eva-github-outline" link="https://github.com/nigui" />
        <CircledBtn
          icon="eva-twitter-outline"
          link="https://twitter.com/GuiillaumeN"
        />
        <CircledBtn icon="eva-email-outline" link="mailto:contact@nigui.fr" />
        <!-- <CircledBtn icon="eva-file-text-outline" /> -->
      </div>
    </AnimateGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    ProfilePic: defineAsyncComponent(() => import('components/ProfilePic.vue')),
    CircledBtn: defineAsyncComponent(() => import('components/CircledBtn.vue')),
    AnimateGroup: defineAsyncComponent(
      () => import('components/animations/AnimateGroup.vue')
    ),
  },
});
</script>
<i18n>
{
  "en":{
    "prename": "I'm",
    "developer": "Web Developer",
    "designer": "UX/UI Designer",
    "location": {
      "row1":"📍 Nantes, FRANCE 🇫🇷",
      "row2": "and around the 🌍 from 🏠",
    },
    "description": "I love design then build products. I’m experienced in mobile and web development. I worked in blockchain and decentralized world since my graduation. I like to share my knowledge and enhance productivity (#DevX)"
  },
  "fr":{
    "prename": "Moi c'est",
    "developer": "Développeur Web",
    "designer": "Designer UX/UI",
    "location": {
      "row1":"📍 Nantes, FRANCE 🇫🇷",
      "row2": "et à l'international 🌍 depuis la 🏠",
    },
    "description": "J'aime concevoir puis construire des produits. Je suis expérimenté en développement web et mobile. J'ai évolué dans l'écosystème blockchain et décentralisé directement après mes études. J'aime partager mes conaissances et améliorer ma productivité (#DevX)."
  }
}
</i18n>
