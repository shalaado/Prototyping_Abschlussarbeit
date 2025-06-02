<script>
    let { data } = $props();
    // svelte-ignore non_reactive_update
    let teamId = data.teams.length > 0 ? data.teams[0]._id : "";
</script>

<h1>Spieler erstellen</h1>

<form method="POST">
    <label>
        Name:
        <input name="name" required />
    </label>

    <label>
        Alter:
        <input type="number" name="age" required />
    </label>

    <label>
        Position:
        <select name="position" required>
            <option disabled selected value="">Wähle eine Position</option>
            <option>Torwart</option>
            <option>Verteidigung</option>
            <option>Mittelfeld</option>
            <option>Sturm</option>
        </select>
    </label>

    <label>
        Team:
        <select name="teamId" bind:value={teamId} required>
            {#each data.teams as team}
                <option value={team._id}>{team.name}</option>
            {/each}
        </select>
    </label>

    <button class="btn btn-danger w-100" type="submit">Erstellen</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 400px;
    }
    label {
        display: flex;
        flex-direction: column;
    }
</style>
