<script lang="ts">
	import arrow from '$lib/assets/svgs/Arrow.svg'	
  import Icon from '../icon/Icon.svelte'

	export let data: any[];
  export let label: string;
  export let icon: string = null;
  export let buttonClass: string = '';

	let selected = "Select";
  let show = false;
  let container;

  function onWindowClick(e) {
        if (container.contains(e.target) == false)
            show = false;
    }
</script>

<svelte:window on:click={onWindowClick} />

<div bind:this={container} class="w-full flex flex-col">
  <span class="font-medium mb-0.5">{label}</span>
  <div class="flex flex-col relative items-center">

    <button on:click={() => show = !show } class={`${buttonClass} h-12 text-purple-700 relative flex w-full items-center justify-between px-3 border border-purple-200 rounded`}>
      {#if icon}
        <Icon class="h-6 w-6 fill-purple-700" name={icon} />
      {/if}

      <p>{selected}</p>

      <img class="h-3.5 w-3.5" src={arrow} alt="Arrow" />
    </button>


    {#if show}
      <div class="flex flex-col absolute z-10 w-full rounded border border-purple-500 bg-white">
        {#each data as item}
          <button on:click={() => {
            selected = item;
            show = !show
          } } class="cursor-pointer select-none p-2 hover:bg-gray-200 rounded" value={item}>
            {item}
          </button>
        {/each}
        </div>
    {/if}

  </div>
</div>