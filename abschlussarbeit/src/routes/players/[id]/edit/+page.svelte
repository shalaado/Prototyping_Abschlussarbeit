<script>
  let { data } = $props();
  let player = data.player;
  let teams = data.teams;
</script>

<h1>Spieler bearbeiten</h1>

<form method="POST">
  <label for="name">Name:</label>
  <input id="name" name="name" value={player.name} required />

  <label for="age">Alter:</label>
  <input id="age" name="age" type="number" value={player.age} required />

  <label for="position">Position:</label>
  <select id="position" name="position" value={player.position} required>
    <option value="Torwart">Torwart</option>
    <option value="Verteidigung">Verteidigung</option>
    <option value="Mittelfeld">Mittelfeld</option>
    <option value="Sturm">Sturm</option>
  </select>

  <label for="team">Team:</label>
  <select id="team" name="teamId" value={player.teamId} required>
    {#each teams as team}
      <option value={team._id}>{team.name}</option>
    {/each}
  </select>

  <button type="submit">Speichern</button>
</form>

<a href="/players">zurück zur Übersicht</a>

<style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
  }

  label {
    margin-top: 1rem;
    font-weight: bold;
  }

  input, select {
    margin-top: 0.25rem;
    padding: 0.5rem;
  }

  button {
    margin-top: 1.5rem;
    background-color: #0070f3;
    color: white;
    padding: 0.5rem;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
</style>
