<template>
  <div class="flex column q-pa-md text-center">
    <div
      class="col-grow flex justify-center content-center q-gutter-md pt-header"
    >
      <div
        v-for="{ name, color } of filteredSkills"
        :key="name"
        class="skill flex column items-center justify-center"
        :style="{ backgroundColor: `#${color}5f` }"
      >
        <q-img :src="skillImg(name)" :alt="`skill ${name}`" />
      </div>
    </div>

    <q-page-sticky expand position="top" class="page-tabs">
      <div class="flex justify-center q-gutter-sm q-pa-md">
        <q-btn
          v-for="{ name, color } of skillTypes"
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
import { defineComponent, ref, Ref } from 'vue';

type Skill = {
  type: SkillType;
  name: string;
  color: string;
};
enum SkillType {
  Webdev = 'webdev',
  Blockchain = 'blockchain',
  UX = 'ux',
  Project = 'project',
  Devops = 'devops',
}

export default defineComponent({
  name: 'Skills',
  setup() {
    const skills: Skill[] = [
      // Webdev
      ...[
        { name: 'quasar', color: '21A5FF' },
        { name: 'pwa', color: '4300BE' },
        { name: 'vuejs', color: '40AB6D' },
        { name: 'nodejs', color: '80BB00' },
        { name: 'nestjs', color: 'DC0735' },
        { name: 'postgres', color: '29547F' },
        { name: 'webpack', color: '80CCFA' },
        { name: 'mongodb', color: '428E35' },
        { name: 'jwt', color: 'C216FF' },
        { name: 'web3', color: 'ffffff' },
        { name: 'oidc', color: 'EF7F0C' },
        { name: 'cas', color: '085d9f' },
        { name: 'springboot', color: '61A52A' },
        { name: 'android', color: '41DA6D' },
        { name: 'react', color: '4CB4D7' },
        { name: 'woocommerce', color: '6840A6' },
        { name: 'wordpress', color: '1774B2' },
      ].map((s) => ({ ...s, type: SkillType.Webdev })),

      // Blockchain
      ...[
        { name: 'ethereum', color: '4F68E9' },
        { name: 'solidity', color: '50557B' },
        { name: 'nft', color: '42C096' },
        { name: 'smartcontract', color: 'ffffff' },
        { name: 'ark', color: 'B61321' },
      ].map((s) => ({ ...s, type: SkillType.Blockchain })),

      // Devops
      ...[
        { name: 'docker', color: '2583EB' },
        { name: 'terraform', color: '492BE9' },
        { name: 'dns', color: 'ABD4FF' },
        { name: 'scaleway', color: '3D008A' },
        { name: 'clevercloud', color: 'C8353D' },
        { name: 'netlify', color: '33BCA9' },
        { name: 'circleci', color: 'ffffff' },
        { name: 'github', color: 'ffffff' },
      ].map((s) => ({ ...s, type: SkillType.Devops })),

      // project
      ...[
        { name: 'scrum', color: '248AA7' },
        { name: 'kanban', color: '34DCBC' },
        { name: 'targetprocess', color: 'E9B900' },
      ].map((s) => ({ ...s, type: SkillType.Project })),

      // UXUI
      ...[
        { name: 'figma', color: '2FC86E' },
        { name: 'pixelmator', color: 'E88F11' },
        { name: 'canva', color: '30B4BC' },
        { name: 'illustrator', color: 'F88600' },
        { name: 'photoshop', color: '2F97FF' },
        { name: 'wireframe', color: 'ffffff' },
      ].map((s) => ({ ...s, type: SkillType.UX })),
    ];
    const skillTypes: { name: SkillType; color: string }[] = [
      { name: SkillType.Webdev, color: 'light-blue' },
      { name: SkillType.Blockchain, color: 'red' },
      { name: SkillType.UX, color: 'purple' },
      { name: SkillType.Project, color: 'amber' },
      { name: SkillType.Devops, color: 'green' },
    ];

    const selectedTypes: Ref<SkillType[]> = ref([]);

    const selectSkillType = (type: SkillType) => {
      selectedTypes.value.includes(type)
        ? (selectedTypes.value = selectedTypes.value.filter((t) => t !== type))
        : selectedTypes.value.push(type);
    };

    const isSelectedSkillType = (type: SkillType): boolean => {
      return selectedTypes.value.includes(type);
    };

    return {
      skills,
      skillTypes,
      selectedTypes,
      selectSkillType,
      isSelectedSkillType,
    };
  },
  computed: {
    filteredSkills(): Skill[] {
      let skills = this.skills;
      if (this.selectedTypes.length > 0) {
        skills = skills.filter(({ type }) => this.selectedTypes.includes(type));
      }
      return skills;
    },
  },
  methods: {
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    skillImg(skillName: string): any {
      return require(`src/assets/skills/${skillName}.webp`);
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

.page-tabs {
  height: 80px;
  background: linear-gradient(180deg, #101010 0%, #101010 85%, #10101000 100%);

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
