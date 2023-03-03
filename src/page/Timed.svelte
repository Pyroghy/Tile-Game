<script lang="ts">
    import TimedGame from "./components/TimedGame.svelte";
    import ModeStop from "./components/ModeStop.svelte";

    let component: any = TimedGame;
    let game: any;

    let stats: any;

    function onMount() {
        game.setFinalStats(stats);
    }

    function onRestart() {
        if (component === TimedGame) {
            game.restartGame();
        }

        component = TimedGame;
    }

    function onStop(e: any) {
        stats = e.detail;

        component = ModeStop;
    }
</script>

<main>
    <svelte:component
        this={component}
        bind:this={game}
        on:restart={onRestart}
        on:stop={onStop}
        on:mount={onMount}
    />

    <footer>
        <button on:click={onRestart}>Restart</button>
        <button on:click={null}>Leave</button>
    </footer>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        width: min(40rem, 100vw);
        height: 100vh;
    }

    footer {
        display: flex;
        flex-direction: row;
        place-content: space-evenly;
        place-items: center;

        width: min(40rem, 100vw);
        height: calc(((100vh - min(40rem, 100vw)) / 2) * 0.75);

        border-radius: 1rem;
        background-color: #121212;
    }

    button {
        cursor: pointer;

        width: calc((min(40rem, 100vw) / 2) * 0.7);
        height: calc((((100vh - min(40rem, 100vw)) / 2) * 0.75) / 3);

        text-align: center;
        font-size: 1.5rem;
        color: white;

        border: none;
        border-radius: 0.5rem;
        background-color: #5539cc;
    }
</style>
