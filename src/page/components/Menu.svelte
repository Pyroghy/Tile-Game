<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function enterMode() {
        dispatch("create", {
            gamemode: "timed",
        });
    }
</script>

<section>
    <button on:click={enterMode}>TIMED MODE</button>
    <button>PATTERN MODE</button>
    <button>MULTIPLAYER</button>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;

        place-content: center;
        place-items: center;

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
