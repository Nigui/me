<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center">
    <div class="max-w-280">
      <div class="text-h2 text-weight-bolder">{{ $t('title') }}</div>

      <div class="text-h5 q-mt-md opacity-40">
        {{ $t('subtitle') }}
      </div>

      <q-btn
        class="q-mt-lg"
        color="white"
        outline
        rounded
        unelevated
        to="/"
        :label="$t('btn')"
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
<i18n>
{
  "en":{
    "title": "Page Not Found",
    "subtitle": "The page does not exist or is unavailable",
    "btn": "Go Home"
  },
  "fr":{
    "title": "Page non trouvée",
    "subtitle": "Cette page n'existe pas ou n'est pas disponible",
    "btn": "Aller à l'accueil"
  }
}
</i18n>
