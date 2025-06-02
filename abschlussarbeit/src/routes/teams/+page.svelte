<script>
	import Team from '$lib/components/Team.svelte';
	let { data } = $props();
</script>

<h1 class="title">Alle Teams</h1>

<div class="grid">
	{#each data.teams as team}
		<Team team={team} />
	{/each}
</div>

<style>
	.title {
		margin-top: 1rem;
		margin-bottom: 2rem;
		text-align: center;
		font-size: 2rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}
</style>
