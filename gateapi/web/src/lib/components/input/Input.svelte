<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements'

  interface $$Props extends HTMLInputAttributes {
    label: string
  }

  export let label: string;
</script>

<div class="flex flex-col">
  <span class="font-bold">{label}</span>
  <input class=" h-12 border border-purple-200 rounded focus:outline-none text-base px-3" type="text" {...$$restProps} />
</div>