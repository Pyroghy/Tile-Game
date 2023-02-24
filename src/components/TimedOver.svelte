<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";

    const dispatch = createEventDispatcher();

    export let score: number;
    export let accuracy: number;

    function handle() {
        dispatch("message");
    }
</script>

<main>
    <h1>GAME OVER!</h1>

    <section class="game-stats">
        <p>Score: {score}</p>
        <p>Accuracy: {accuracy}%</p>
    </section>

    <button on:click={handle}>Restart</button>
    <button>Leave</button>
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
