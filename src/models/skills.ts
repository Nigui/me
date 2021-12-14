export type Skill = {
  type: SkillType;
  name: string;
  color: string;
  link: string;
};
export enum SkillType {
  Webdev = 'webdev',
  Blockchain = 'blockchain',
  Devops = 'devops',
  Project = 'project',
  UX = 'ux',
}
export type SkillTypeOpts = {
  [key in SkillType]: { name: key; color: string };
};
export const skillTypes: SkillTypeOpts = {
  [SkillType.Webdev]: { name: SkillType.Webdev, color: 'light-blue' },
  [SkillType.Blockchain]: { name: SkillType.Blockchain, color: 'red' },
  [SkillType.Devops]: { name: SkillType.Devops, color: 'green' },
  [SkillType.Project]: { name: SkillType.Project, color: 'amber' },
  [SkillType.UX]: { name: SkillType.UX, color: 'purple' },
};

export type Skills = { [_: string]: Skill };
export const skills: Skills = {
  // Webdev
  quasar: {
    name: 'quasar',
    color: '21A5FF',
    type: SkillType.Webdev,
    link: 'https://quasar.dev/',
  },
  pwa: {
    name: 'pwa',
    color: '4300BE',
    type: SkillType.Webdev,
    link: 'https://web.dev/progressive-web-apps/',
  },
  vuejs: {
    name: 'vuejs',
    color: '40AB6D',
    type: SkillType.Webdev,
    link: 'https://vuejs.org/',
  },
  nodejs: {
    name: 'nodejs',
    color: '80BB00',
    type: SkillType.Webdev,
    link: 'https://nodejs.org/',
  },
  nestjs: {
    name: 'nestjs',
    color: 'DC0735',
    type: SkillType.Webdev,
    link: 'https://nestjs.com/',
  },
  postgres: {
    name: 'postgres',
    color: '29547F',
    type: SkillType.Webdev,
    link: 'https://www.postgresql.org/',
  },
  webpack: {
    name: 'webpack',
    color: '80CCFA',
    type: SkillType.Webdev,
    link: 'https://webpack.js.org/',
  },
  mongodb: {
    name: 'mongodb',
    color: '428E35',
    type: SkillType.Webdev,
    link: 'https://www.mongodb.com/',
  },
  jwt: {
    name: 'jwt',
    color: 'C216FF',
    type: SkillType.Webdev,
    link: 'https://jwt.io/',
  },
  web3: {
    name: 'web3',
    color: 'ffffff',
    type: SkillType.Webdev,
    link: 'https://web3.foundation/',
  },
  oidc: {
    name: 'oidc',
    color: 'EF7F0C',
    type: SkillType.Webdev,
    link: 'https://openid.net/connect/',
  },
  cas: {
    name: 'cas',
    color: '085d9f',
    type: SkillType.Webdev,
    link: 'https://www.apereo.org/projects/cas',
  },
  springboot: {
    name: 'springboot',
    color: '61A52A',
    type: SkillType.Webdev,
    link: 'https://spring.io/projects/spring-boot',
  },
  android: {
    name: 'android',
    color: '41DA6D',
    type: SkillType.Webdev,
    link: 'https://developer.android.com/docs',
  },
  react: {
    name: 'react',
    color: '4CB4D7',
    type: SkillType.Webdev,
    link: 'https://reactjs.org/',
  },
  woocommerce: {
    name: 'woocommerce',
    color: '6840A6',
    type: SkillType.Webdev,
    link: 'https://woocommerce.com/',
  },
  wordpress: {
    name: 'wordpress',
    color: '1774B2',
    type: SkillType.Webdev,
    link: 'https://wordpress.com/fr/',
  },

  // Blockchain
  ethereum: {
    name: 'ethereum',
    color: '4F68E9',
    type: SkillType.Blockchain,
    link: 'https://ethereum.org',
  },
  solidity: {
    name: 'solidity',
    color: '50557B',
    type: SkillType.Blockchain,
    link: 'https://docs.soliditylang.org/',
  },
  nft: {
    name: 'nft',
    color: '42C096',
    type: SkillType.Blockchain,
    link: 'https://ethereum.org/en/nft/',
  },
  smartcontract: {
    name: 'smartcontract',
    color: 'ffffff',
    type: SkillType.Blockchain,
    link: 'https://ethereum.org/en/developers/docs/smart-contracts/',
  },
  ark: {
    name: 'ark',
    color: 'B61321',
    type: SkillType.Blockchain,
    link: 'https://ark.dev/',
  },

  // Devops
  docker: {
    name: 'docker',
    color: '2583EB',
    type: SkillType.Devops,
    link: 'https://www.docker.com/',
  },
  terraform: {
    name: 'terraform',
    color: '492BE9',
    type: SkillType.Devops,
    link: 'https://www.terraform.io/',
  },
  dns: {
    name: 'dns',
    color: 'ABD4FF',
    type: SkillType.Devops,
    link: 'https://wikipedia.org/wiki/Domain_Name_System',
  },
  scaleway: {
    name: 'scaleway',
    color: '3D008A',
    type: SkillType.Devops,
    link: 'https://www.scaleway.com/en/',
  },
  clevercloud: {
    name: 'clevercloud',
    color: 'C8353D',
    type: SkillType.Devops,
    link: 'https://www.clever-cloud.com/',
  },
  netlify: {
    name: 'netlify',
    color: '33BCA9',
    type: SkillType.Devops,
    link: 'https://www.netlify.com/',
  },
  circleci: {
    name: 'circleci',
    color: 'ffffff',
    type: SkillType.Devops,
    link: 'https://circleci.com/',
  },
  github: {
    name: 'github',
    color: 'ffffff',
    type: SkillType.Devops,
    link: 'https://github.com/',
  },

  // project
  scrum: {
    name: 'scrum',
    color: '248AA7',
    type: SkillType.Project,
    link: 'https://www.scrum.org/',
  },
  kanban: {
    name: 'kanban',
    color: '34DCBC',
    type: SkillType.Project,
    link: 'https://www.agilealliance.org/glossary/kanban/',
  },
  targetprocess: {
    name: 'targetprocess',
    color: 'E9B900',
    type: SkillType.Project,
    link: 'https://www.apptio.com/products/targetprocess/',
  },

  // UXUI
  figma: {
    name: 'figma',
    color: '2FC86E',
    type: SkillType.UX,
    link: 'https://www.figma.com/',
  },
  pixelmator: {
    name: 'pixelmator',
    color: 'E88F11',
    type: SkillType.UX,
    link: 'https://www.pixelmator.com/',
  },
  canva: {
    name: 'canva',
    color: '30B4BC',
    type: SkillType.UX,
    link: 'https://www.canva.com',
  },
  illustrator: {
    name: 'illustrator',
    color: 'F88600',
    type: SkillType.UX,
    link: 'https://www.adobe.com/products/illustrator.html',
  },
  photoshop: {
    name: 'photoshop',
    color: '2F97FF',
    type: SkillType.UX,
    link: 'https://www.adobe.com/products/photoshop.html',
  },
  wireframe: {
    name: 'wireframe',
    color: 'ffffff',
    type: SkillType.UX,
    link: 'https://en.wikipedia.org/wiki/Website_wireframe',
  },
};

export const getSkill = (name: string): Skill | undefined => {
  return skills[name];
};
