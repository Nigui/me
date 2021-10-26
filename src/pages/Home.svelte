<script>
  import {
    GithubLine,
    TwitterLine,
    MailLine,
    FileUserLine,
  } from "svelte-remixicon";
</script>

<div class="flex-grow flex flex-col justify-center items-center text-center">
  <h1 class="font-black">Hello world _</h1>
  <img
    src="../assets/img/profile-pic.png"
    alt="profile-pic"
    class="rounded-full w-40 border-4 border-white my-6"
  />
  <h2 class="font-semibold">I'm</h2>
  <h1 class="font-black uppercase">Guillaume</h1>
  <h2 class="font-normal uppercase">
    Software <span
      class="decoration-clone bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 font-black"
      >Developer</span
    > <br /> &
    <span
      class="decoration-clone bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400 font-black"
      >UX/UI</span
    > Designer
  </h2>
  <h3 class="font-extralight">
    📍Nantes, FRANCE 🇫🇷 <br /> and around the 🌍 from 🏠
  </h3>

  <p class="font-normal max-w-xl mt-5 mb-8">
    I love design then build products. I’m experienced in mobile and web
    development and worked in blockchain and decentralized world since my
    graduation. I like to share my knowledge and enhance productivity
  </p>
  <div class="flex flex-row gap-x-4">
    <GithubLine class="circled-icon" />
    <TwitterLine class="circled-icon" />
    <MailLine class="circled-icon" />
    <FileUserLine class="circled-icon" />
  </div>
</div>
