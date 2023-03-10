<script lang="ts">
    import Game from "./components/Game.svelte";

    function enterTimedMode() {}

    function enterPatternMode() {}

    function enterMultiplayer() {}
</script>

<Game />

<!--
<main>
    <section>
        <button on:click={enterTimedMode}>TIMED MODE</button>
        <button on:click={enterPatternMode}>PATTERN MODE</button>
        <button on:click={enterMultiplayer}>MULTIPLAYER</button>
    </section>
 
</main>
   -->
<style>
    main {
        display: flex;
        flex-direction: column;
        place-content: center;
        place-items: center;

        width: 60vw;
        height: 100vh;

        background-color: #121212;
    }

    section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    button {
        cursor: pointer;
        padding: 0;

        color: #999;
        font-size: 1.5rem;
        font-weight: 600;

        width: 16rem;
        height: 4rem;

        border: none;
        border-radius: 0.5rem;
        background-color: black;
    }

    button:hover {
        color: white;
    }

    button:focus {
        background-color: blue;
    }
</style>
