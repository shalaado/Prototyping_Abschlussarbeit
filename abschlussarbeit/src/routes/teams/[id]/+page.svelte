<script>
  let { data } = $props();
  const team = data.team;
</script>

<h1>{team.name}</h1>

<div class="info">
  <p><strong>Stadion:</strong> {team.stadium}</p>
  <p><strong>Gegründet:</strong> {team.founded}</p>
  <p><strong>Trainer:</strong> {team.coach}</p>
  <p><strong>Kapitän:</strong> {team.captain}</p>
  <p><strong>Kadergrösse:</strong> {team.squadSize} Spieler</p>
  <p><strong>Bundesliga seit:</strong> {team.since}</p>
  <p><strong>Meistertitel:</strong> {team.titles}</p>
</div>

<div class="buttons">
  <a class="btn-back" href="/teams">zurück zur Übersicht</a>
  <a class="btn-edit" href={`/teams/${team._id}/edit`}>Team bearbeiten</a>

  <form method="POST">
    <button
      type="submit"
      name="delete"
      value="true"
      class="btn-delete"
    >
      Team löschen
    </button>
  </form>
</div>

<style>
  .info {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    max-width: 500px;
    background-color: #f9f9f9;
    margin-bottom: 1rem;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  a,
  .btn-delete {
    color: white;
    background-color: #0070f3;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
  }

  .btn-delete {
    background-color: #d9534f;
  }
</style>
