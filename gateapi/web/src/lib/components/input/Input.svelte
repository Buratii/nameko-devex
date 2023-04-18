<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements'
  import Icon from '../icon/Icon.svelte'

  interface $$Props extends HTMLInputAttributes {
    label: string
    icon?: string;
    suffix?: string;
  }

  export let label: string;
  export let icon: string = null;
  export let suffix = null;
</script>

<div class=" w-full box-content flex flex-col">
  <span class="font-medium mb-0.5">{label}</span>
  <div class="h-12 flex items-center justify-center px-3 py-2 border focus-within:border-purple-500 border-purple-200 rounded focus:ease-linear duration-100">
    {#if icon}
      <Icon class="h-full fill-purple-700" name={icon} />
    {/if}
    <input class={` w-full focus:outline-none text-base  placeholder:color-purple-200`} {...$$restProps} />

    {#if suffix}
    <p class="pl-1 text-sm color-purple-700">{suffix}</p>
    {/if}
  </div>
</div>