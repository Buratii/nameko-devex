<script context="module">
  import pathsByName from "./icon-paths"
</script>

<script lang="ts">
  export let name

  $: paths = pathsByName[name].paths || []
  $: viewBox = pathsByName[name].viewBox || ""
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class={`fill-current ${$$props.class}`}
  viewBox={viewBox}>
  {#each paths as path}
    <path d="{path}"></path>
  {/each}
</svg>