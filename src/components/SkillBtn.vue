<template>
  <q-btn
    round
    class="skill"
    :style="{ backgroundColor: `#${color}5f` }"
    @click="btnClicked"
  >
    <q-img :src="img" :alt="`skill ${name}`" contain loading="lazy">
      <template v-slot:loading> </template>
    </q-img>
  </q-btn>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { skills } from 'src/models/skills';

export default defineComponent({
  name: 'Skills',
  props: {
    name: { type: String, required: true },
  },
  emits: ['click'],
  methods: {
    btnClicked(): void {
      this.$emit('click', this.name);
    },
  },
  computed: {
    color(): string {
      return skills[this.name].color;
    },
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    img(): any {
      return require(`src/assets/skills/${this.name}.webp`);
    },
  },
});
</script>
<style lang="scss" scoped>
.skill {
  width: 80px;
  height: 80px;
  padding: 15px;
  border-radius: 50%;
}
</style>
