<template>
  <div class="flex column q-pa-md text-center">
    <div
      class="col-grow flex justify-center content-center q-gutter-md pt-header"
    >
      <transition-group
        appear
        enter-active-class="animated zoomIn "
        leave-active-class="animated zoomOut"
      >
        <SkillBtn
          v-for="{ name } of filteredSkills"
          :key="name"
          :name="name"
          @click="openSkill(name)"
        />
      </transition-group>
    </div>

    <q-page-sticky expand position="top" class="page-tabs">
      <div class="flex justify-center q-gutter-sm q-pa-md">
        <q-btn
          v-for="{ name, color } of skillTypesOpts"
          :key="name"
          class="q-px-lg q-py-sm"
          :label="$t(`skills.${name}`)"
          rounded
          outline
          :color="isSelectedSkillType(name) ? `${color}-12` : `white`"
          @click="selectSkillType(name)"
        />
      </div>
    </q-page-sticky>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, defineAsyncComponent } from 'vue';
import SkillDialog from '../components/SkillDialog.vue';
import { skills, Skill, SkillType, skillTypes } from 'src/models/skills';

export default defineComponent({
  name: 'Skills',
  components: {
    SkillBtn: defineAsyncComponent(() => import('components/SkillBtn.vue')),
  },
  setup() {
    const selectedTypes: Ref<SkillType[]> = ref([]);

    const selectSkillType = (type: SkillType) => {
      selectedTypes.value.includes(type)
        ? (selectedTypes.value = selectedTypes.value.filter((t) => t !== type))
        : selectedTypes.value.push(type);
    };

    const isSelectedSkillType = (type: SkillType): boolean => {
      return selectedTypes.value.includes(type);
    };

    const skillTypesOpts = Object.values(skillTypes);

    return {
      skillTypesOpts,
      selectedTypes,
      selectSkillType,
      isSelectedSkillType,
    };
  },
  computed: {
    filteredSkills(): Skill[] {
      let fSkills = Object.values(skills);
      if (this.selectedTypes.length > 0) {
        fSkills = fSkills.filter(({ type }) =>
          this.selectedTypes.includes(type)
        );
      }
      return fSkills;
    },
  },
  methods: {
    openSkill(skillName: string): void {
      this.$q.dialog({
        component: SkillDialog,
        componentProps: {
          name: skillName,
        },
      });
    },
  },
});
</script>
<style lang="scss" scoped>
.page-tabs {
  height: 80px;
  background: linear-gradient(180deg, #101010 0%, #101010 90%, #10101000 100%);

  @media (max-width: 600px) {
    height: 120px;
  }

  @media (max-width: 330px) {
    height: 170px;
  }
}

.pt-header {
  padding-top: 80px;

  @media (max-width: 690px) {
    padding-top: 120px;
  }
  @media (max-width: 375px) {
    padding-top: 170px;
  }
}
</style>
<i18n>
{
  "en":{
    "skills":{
      "webdev": "Web development",
      "blockchain":"Blockchain",
      "ux":"UX/UI",
      "project":"Project",
      "devops":"DevOps"
    }
  },
  "fr":{
    "skills":{
      "webdev": "Dévelopement web",
      "blockchain":"Blockchain",
      "ux":"UX/UI",
      "project":"Projet",
      "devops":"DevOps"
    }
  }
}
</i18n>
