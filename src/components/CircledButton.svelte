<script lang="ts">
  export let color: string = "red";
  export let click: () => void = () => {};
</script>

<button
  class={`bg-transparent rounded-full border-2 border-${color} text-5xl text-${color} p-2 hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-${color}-600 focus:ring-opacity-50`}
  on:click={click}
>
  <slot />
</button>
