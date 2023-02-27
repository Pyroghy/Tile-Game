<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";

    const dispatch = createEventDispatcher();
    let seconds = 3;

    onMount(() => {
        const countdownElement = document.getElementById("countdown");
        const countdown = setInterval(() => {
            seconds--;

            countdownElement.innerText = seconds.toString();

            if (seconds <= 0) {
                dispatch("start");
                clearInterval(countdown);
            }
        }, 1000);
    });
</script>

<section>
    Game Starts in <h2 id="countdown">3</h2>
    Seconds!
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
</style>
