<script>
  let { team } = $props();
</script>

<div class="card team-card">
  <div class="card-content">
    <div class="card-info">
      <h2>{team.name}</h2>
      <a href={`/teams/${team._id}`} class="btn">Details ansehen</a>
    </div>
    <img src={`images/${team.name}.png`} alt="Team Icon" class="team-logo" />
  </div>
</div>

<style>
.card.team-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
  margin-bottom: 1rem;
  height: 180px;
}

.card-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.card-info {
  flex: 1;
}

.team-logo {
  width: 100px;
  height: auto;
  margin-left: 2rem;
}

.card.team-card:hover {
  transform: scale(1.015);
}

h2 {
  color: #1d1d1b;
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.55rem 1.1rem;
  background-color: #d71920;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #b4151b;
}
</style>