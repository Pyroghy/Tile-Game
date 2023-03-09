<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function enterTimed() {
        dispatch("timed");
    }
</script>

<section>
    <button on:click={enterTimed}>TIMED</button>

    <button>PATTERN</button>

    <button>MULTIPLAYER</button>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        place-content: center;
        place-items: center;
        place-self: center;
        
        gap: 2rem;
        width: 90%;
        height: 95vh;

        border-radius: 1rem;
        background-color: #121212;
    }

    button {
        cursor: pointer;
        padding: 0;

        width: 80%;
        height: 4rem;

        color: #fff;
        font-weight: 600;
        font-size: 1.25rem;
        text-align: center;

        border: none;
        border-radius: 1rem;
        background-color: blue;
        box-shadow: 0px 0.125rem aqua;
    }
</style>
