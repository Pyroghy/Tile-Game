<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";

    const dispatch = createEventDispatcher();

    onMount(() => {
        dispatch("load");
    });
</script>

<section>
    <h1>GAME OVER!</h1>

    <div>
        <article>
            <h3>SCORE</h3>
            <h4 id="final-score">0</h4>
        </article>

        <article>
            <h3>ACCURACY</h3>
            <h4 id="final-accuracy">0</h4>
        </article>
    </div>
</section>

<style>
    :root {
        --canvas-width: min(40rem, 100vw);
        --comp-height: calc(((100vh - var(--canvas-width)) / 2) * 0.75);
        --canvas-comp: calc(var(--canvas-width) + var(--comp-height));
        --section-total: calc((var(--comp-height) * 2) + var(--canvas-width));
    }

    section {
        display: flex;
        flex-direction: column;

        justify-content: space-evenly;
        align-items: center;

        width: min(40rem, 100vw);
        height: calc(((100vh - var(--section-total)) / 4) + var(--canvas-comp));

        border-radius: 1rem;
        background-color: #121212;
    }

    div {
        display: flex;
        flex-direction: row;
        gap: 3rem;
    }
</style>
