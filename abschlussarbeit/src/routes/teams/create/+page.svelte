<h2 class="text-center my-4">Neues Team erstellen</h2>

<div class="d-flex justify-content-center">
  <div class="card shadow p-4" style="width: 100%; max-width: 500px;">
    <form method="POST">
      <input
        class="form-control mb-3"
        name="name"
        placeholder="Name"
        required
      />
      <input
        class="form-control mb-3"
        name="stadium"
        placeholder="Stadion"
        required
      />
      <input
        class="form-control mb-3"
        name="founded"
        placeholder="Gegründet"
        required
      />
      <input
        class="form-control mb-3"
        name="coach"
        placeholder="Trainer"
      />
      <input
        class="form-control mb-3"
        name="captain"
        placeholder="Kapitän"
      />
      <input
        class="form-control mb-3"
        name="squadSize"
        placeholder="Kadergröße"
      />
      <input
        class="form-control mb-3"
        name="since"
        placeholder="Bundesliga seit (Jahr)"
      />
      <input
        class="form-control mb-4"
        name="titles"
        placeholder="Meistertitel"
      />

      <button class="btn btn-danger w-100" type="submit">Erstellen</button>
    </form>

    <a href="/teams" class="mt-3 text-center d-block">zurück zur Übersicht</a>
  </div>
</div>
