<script>
  let { player } = $props();
</script>

<a href={`/players/${player._id}`} class="card-link">
  <div class="card player-card">
    <img src="/images/Default.png" alt="Profilbild" class="player-avatar" />
    <div class="player-info">
      <h2>{player.name}</h2>
    </div>
  </div>
</a>

<style>
.card-link {
  text-decoration: none;
  color: inherit;
}

.card.player-card {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  transition: box-shadow 0.2s;
}

.card.player-card:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.player-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 1.2rem;
  object-fit: cover;
  background: #e0e0e0;
}

.player-info {
  flex: 1;
}
</style>