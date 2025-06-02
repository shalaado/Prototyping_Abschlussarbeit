<div class="welcome-container">
  <div class="welcome-card">
    <h1>Willkommen zur Bundesliga Vereinsverwaltung</h1>
    <p>
      Diese Anwendung bietet dir eine übersichtliche Verwaltung aller 18 Teams der deutschen Fussball-Bundesliga.<br>
      Entdecke spannende Informationen zu jedem Verein, bearbeite Teamdaten oder füge neue Spieler hinzu.<br>
      Nutze die Navigation oben, um direkt zu den Teams oder Spielern zu gelangen.
    </p>
    <img src="/images/bundesliga-logo.png" alt="Bundesliga Logo" class="welcome-logo" />
    <div class="welcome-actions">
      <a href="/teams" class="btn btn-danger w-100">Zu den Teams</a>
      <a href="/players" class="btn btn-secondary btn-lg">Spielerübersicht</a>
    </div>
  </div>
</div>

<style>
.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background: #f6f8fa;
}

.welcome-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
  padding: 2.5rem 2rem 2rem 2rem;
  max-width: 540px;
  text-align: center;
}

.welcome-card h1 {
  font-size: 2.2rem;
  margin-bottom: 1.2rem;
  color: #1d1d1b;
}

.welcome-card p {
  font-size: 1.15rem;
  color: #333;
  margin-bottom: 2rem;
}

.welcome-logo {
  width: 120px;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
}

.welcome-actions {
  display: flex;
  gap: 1.2rem;
  justify-content: center;
}
</style>