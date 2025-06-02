<script>
  import Player from "$lib/components/Player.svelte";
  let { data } = $props();
</script>

<h1>Alle Spieler</h1>

{#each data.players as player}
  <Player {player} />
{/each}
