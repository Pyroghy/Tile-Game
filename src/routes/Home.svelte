<script lang="ts">
    import page from "page";

    function enterTimed() {
        page.redirect("/timed");
    }

    function enterPattern() {
        page.redirect("/pattern");
    }

    function enterMultiplayer() {
        page.redirect("/multiplayer");
    }
</script>

<main>
    <h1>Tile Game</h1>

    <section>
        <button on:click={enterTimed}>Timed Mode</button>
        <button on:click={enterPattern}>Pattern Mode</button>
        <button on:click={enterMultiplayer}>Multiplayer</button>
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        width: min(40rem, 100vw);
        height: 100vh;

        background-color: #121212;
    }

    section {
        display: flex;
        flex-direction: column;
        place-items: center;

        gap: 1rem;
    }

    button {
        cursor: pointer;

        width: calc(min(40rem, 100vw) * 0.625);
        height: calc((min(40rem, 100vw) * 0.625) / 5);

        text-align: center;
        line-height: calc((min(40rem, 100vw) * 0.625) / 5);
        font-size: 1.5rem;

        border: none;
        border-radius: 1rem;
        background-color: #5539cc;
    }
</style>
