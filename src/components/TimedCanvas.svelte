<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { TimedMode } from "../lib/gamemode/modes/TimedMode";
    import GameScreen from "./game/GameScreen.svelte";

    export let options: any;
    console.log(options);

    const dispatch = createEventDispatcher();

    const timed = new TimedMode();

    function handleStart() {
        timed.display.createCanvas();
        timed.display.tileManager.createMatrix(3);
        timed.display.tileManager.redrawTiles();

        timed.startTime = Date.now();
    }

    function handleStopFirst() {
        dispatch("stop", {
            score: timed.score,
            accuracy:
                (timed.totalBlackHits /
                    (timed.totalBlackHits + timed.totalWhiteHits)) *
                100,
        });
    }
</script>

<main>
    <header>
        <article>
            <h1>SCORE</h1>
            <h3 id="score">0</h3>
        </article>

        <article>
            <h1>TIME</h1>
            <h2 id="time">30</h2>
        </article>

        <article>
            <h1>ACCURACY</h1>
            <h3 id="accuracy">100.00%</h3>
        </article>
    </header>

    <svelte:component
        this={GameScreen}
        on:start={handleStart}
        on:stopFirst={handleStopFirst}
        gamemode={timed}
    />

    <footer>
        <button on:click={timed.restart}>Restart</button>
        <button>Leave</button>
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

    header,
    footer {
        width: min(40rem, 100vw);
        height: calc(((100vh - 40rem) / 2) * 0.75);

        background-color: #121212;
    }

    header {
        display: flex;
        flex-direction: row;

        justify-content: space-evenly;
        align-items: center;

        border-radius: 1rem;
    }

    header > article {
        width: 12rem;
    }

    footer {
        display: flex;
        flex-direction: row;

        justify-content: space-evenly;
        align-items: center;

        border-radius: 1rem;
    }

    footer > button {
        cursor: pointer;

        width: 12rem;
        height: 3rem;

        text-align: center;

        border: none;
        border-radius: 0.5rem;
        background-color: #5539cc;
    }
</style>
