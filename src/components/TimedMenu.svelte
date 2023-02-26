<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let options: any;

    function handleRestart() {
        dispatch("restart", {});
    }

    function handleLeave() {
        dispatch("leave", {});
    }
</script>

<main>
    <h1>GAME OVER!</h1>

    <section>
        <article>
            <h3>SCORE</h3>
            <h4>{options.score}</h4>
        </article>

        <article>
            <h3>ACCURACY</h3>
            <h4>{options.accuracy.toFixed(2)}%</h4>
        </article>
    </section>

    <section>
        <button on:click={handleRestart}>Restart</button>
        <button on:click={handleLeave}>Leave</button>
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;

        justify-content: space-evenly;
        align-items: center;

        width: min(40rem, 100vw);
        height: 70vh;

        border-radius: 1rem;
        background-color: #121212;
    }

    h1 {
        font-size: 3rem;
    }

    section {
        display: flex;
        flex-direction: row;

        justify-content: space-evenly;
        align-items: center;

        width: calc(min(40rem, 100vw) * 0.9);
    }

    button {
        cursor: pointer;

        width: 12rem;
        height: 3rem;

        text-align: center;
        font-weight: 500;
        color: white;
        font-size: 1.5rem;

        border: none;
        border-radius: 0.5rem;
        background-color: #5539cc;
        box-shadow: 1px 2px aqua;
    }
</style>
