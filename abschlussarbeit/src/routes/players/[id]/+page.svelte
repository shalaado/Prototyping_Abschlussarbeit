<script>
  let { data } = $props();
  const player = data.player;
  const teams = data.teams;

  // Team des Spielers anhand der ID finden
  const team = teams.find(t => t._id === player.teamId);
</script>

<h1>{player.name}</h1>

<div class="info">
  <p><strong>Alter:</strong> {player.age}</p>
  <p><strong>Position:</strong> {player.position}</p>
  <p><strong>Verein:</strong> {team ? team.name : 'Unbekannt'}</p>
</div>

<div class="buttons">
  <a class="btn-back" href="/players">zurück zur Übersicht</a>
  <a class="btn-edit" href={`/players/${player._id}/edit`}>Spieler bearbeiten</a>

  <form method="POST">
    <button
      name="delete"
      class="btn-delete"
      type="submit"
      value="true"
    >
      Spieler löschen
    </button>
  </form>
</div>

<style>
  .info {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    background-color: #f9f9f9;
    margin-bottom: 1rem;
    max-width: 500px;
  }

  p {
    margin: 0.4rem 0;
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
