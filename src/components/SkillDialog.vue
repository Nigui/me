<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin bg-background q-pa-sm">
      <div class="float-right">
        <q-btn
          round
          flat
          color="white"
          icon="eva-close-outline"
          @click="onOKClick"
        />
      </div>
      <q-card-section class="flex items-center justify-center">
        <SkillBtn :name="name" class="on-left" @click="openLink" />
        <div class="text-h5 text-weight-bolder">{{ name }}</div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
import { openURL, useDialogPluginComponent } from 'quasar';
import { getSkill } from 'src/models/skills';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  components: {
    SkillBtn: defineAsyncComponent(() => import('components/SkillBtn.vue')),
  },

  emits: [...useDialogPluginComponent.emits],

  setup() {
    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome

    return {
      // This is REQUIRED;
      // Need to inject these (from useDialogPluginComponent() call)
      // into the vue scope for the vue html template
      dialogRef,
      onDialogHide,

      // other methods that we used in our vue html template;
      // these are part of our example (so not required)
      onOKClick() {
        // on OK, it is REQUIRED to
        // call onDialogOK (with optional payload)
        onDialogOK();
        // or with payload: onDialogOK({ ... })
        // ...and it will also hide the dialog automatically
      },

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel,
    };
  },
  methods: {
    openLink(): void {
      const maybeSkill = getSkill(this.name);
      if (maybeSkill) openURL(maybeSkill.link);
    },
  },
});
</script>
