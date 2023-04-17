<script lang="ts">
  export let name: string;
  export let icon: string;
</script>

<button 
  class="flex flex-row items-center justify-center w-48.5 my-2 py-5 rounded border border-purple-200 focus:border-purple-500 focus:text-purple-500 focus:bg-purple-100"
  >
  <img class="text-purple-500" src={icon} alt={name}>
  <p class="ml-3.5 font-bold">{name}</p>
</button>