<script lang="ts">
    import { onMount } from "svelte";
    import type { Gamemode } from "../../lib/gamemode/Gamemode";

    export let gamemode: Gamemode;
    let seconds = 3;

    onMount(() => {
        const countdownElement = document.getElementById("countdown");
        const countdown = setInterval(() => {
            seconds--;

            countdownElement.innerText = seconds.toString();

            if (seconds <= 0) {
                gamemode.emit("start");
                // component = Canvas;
                clearInterval(countdown);
            }
        }, 1000);
    });
</script>

<section>
    <h1>Game Starts In <strong id="countdown">3</strong> Seconds!</h1>
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
