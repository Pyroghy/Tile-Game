<script lang="ts">
    import page from "page";

    import { PatternMode } from "../lib/gamemode/PatternMode";

    import PatternGame from "../components/Game.svelte";
    import ModeStop from "../components/ModeStop.svelte";

    const pattern = new PatternMode();
    let component: any = PatternGame;
    let game: any;
    let stats: any;

    function onMount() {
        game.setFinalStats(stats);
    }

    function onStop(e: any) {
        stats = e.detail;
        component = ModeStop;
    }

    function handleRestart() {
        if (component === PatternGame) {
            game.handleRestart();
        } else {
            component = PatternGame;
        }
    }

    function handleLeave() {
        page.redirect("/");
    }
</script>

<main>
    <svelte:component
        this={component}
        gamemode={pattern}
        bind:this={game}
        on:stop={onStop}
        on:mount={onMount}
    />

    <footer>
        <button on:click={handleRestart}>Restart</button>
        <button on:click={handleLeave}>Leave</button>
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
