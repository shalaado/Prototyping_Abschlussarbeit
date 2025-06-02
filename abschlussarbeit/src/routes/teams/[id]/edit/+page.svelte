<script>
  let { data } = $props();
  const team = data.team;
</script>

<h1>Team bearbeiten</h1>

<form method="POST">
  <label>
    Name:
    <input name="name" value={team.name} required />
  </label>

  <label>
    Stadion:
    <input name="stadium" value={team.stadium} required />
  </label>

  <label>
    Gegründet:
    <input type="number" name="founded" value={team.founded} required />
  </label>

  <label>
    Trainer:
    <input name="coach" value={team.coach} required />
  </label>

  <label>
    Kapitän:
    <input name="captain" value={team.captain} required />
  </label>

  <label>
    Kadergröße:
    <input type="number" name="squadSize" value={team.squadSize} required />
  </label>

  <label>
    Bundesliga seit:
    <input type="number" name="since" value={team.since} required />
  </label>

  <label>
    Meistertitel:
    <input type="number" name="titles" value={team.titles} required />
  </label>

  <button type="submit">Speichern</button>
</form>

<a href={`/teams/${team._id}`}>zurück zur Detailseite</a>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 500px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }

  input {
    padding: 0.4rem;
    font-size: 1rem;
  }

  button {
    margin-top: 1rem;
    padding: 0.6rem;
    font-size: 1rem;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 4px;
  }

  button:hover {
    background-color: #0059c1;
  }

  a {
    margin-top: 1rem;
    display: inline-block;
    color: #0070f3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
