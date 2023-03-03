<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";

    const dispatch = createEventDispatcher();
    let countdownElement: any;
    let countdown: any;
    let seconds = 3;

    export function handleRestart() {
        clearInterval(countdown);

        seconds = 3;
        countdown = setInterval(countdownInterval, 1000);
    }

    function countdownInterval() {
        seconds--;

        countdownElement.innerText = seconds.toString();

        if (seconds <= 0) {
            dispatch("start");
            clearInterval(countdown);
        }
    }

    onMount(() => {
        seconds = 3;
        countdown = setInterval(countdownInterval, 1000);
    });
</script>

<section>
    <h1>
        Game Starts In <strong bind:this={countdownElement}>3</strong> Seconds!
    </h1>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        place-content: center;

        width: min(40rem, 100vw);
        height: min(40rem, 100vw);

        border-radius: 1rem;
        background-color: #121212;
    }

    h1 {
        font-size: 3rem;
    }
</style>
