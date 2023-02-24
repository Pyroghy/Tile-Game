<script lang="ts">
    import page from "page";

    function enterTimed() {
        console.log("timed");

        page.redirect("/timed");
    }

    function enterPattern() {
        console.log("pattern");

        page.redirect("/pattern");
    }

    function enterMultiplayer() {
        console.log("multiplayer");

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

        width: 40rem;
        height: 100vh;

        background-color: #121212;
    }

    section {
        display: flex;
        flex-direction: column;
        place-items: center;

        gap: 1rem;
    }

    section > button {
        cursor: pointer;

        width: 25rem;
        height: 5rem;

        text-align: center;
        line-height: 5rem;
        font-size: 1.5rem;

        border: none;
        border-radius: 1rem;
        background-color: #5539cc;
    }
</style>
