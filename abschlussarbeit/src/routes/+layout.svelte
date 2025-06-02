<script>
    import "../styles/global.css";
    let { children } = $props();
</script>

<div class="container">
    <nav class="navbar navbar-expand-lg p-3 mb-2 bg-secondary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Startseite</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a
                            class="nav-link active"
                            aria-current="page"
                            href="/teams">Teams</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/teams/create"
                            >Team hinzufügen</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/players">Spielerübersicht</a>
                    </li><li class="nav-item">
                        <a class="nav-link" href="/players/create">Spieler hinzufügen</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    {@render children()}
</div>
