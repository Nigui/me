<script lang="ts">
  import Home from "./pages/Home.svelte";
  import Tailwindcss from "./style/Tailwindcss.svelte";
</script>

<Tailwindcss />
<main class="w-screen h-screen bg-background flex">
  <div class="container mx-auto flex-grow flex flex-col">
    <Home />
  </div>
</main>
