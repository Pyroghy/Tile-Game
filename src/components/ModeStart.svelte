<script lang="ts">
    import { createEventDispatcher, onDestroy, onMount } from "svelte";

    const dispatch = createEventDispatcher();
    let countdownElement: any;
    let seconds = 3;

    onMount(() => {
        countdownTimer.restart();
    });

    onDestroy(() => {
        countdownTimer.stop();
    });

    const countdownTimer = new Interval(() => {
        seconds--;

        countdownElement.innerText = seconds.toString();

        if (seconds <= 0) {
            dispatch("start");
            countdownTimer.stop();
        }
    }, 1000);

    export function handleRestart() {
        countdownTimer.restart();
    }

    function Interval(method: Function, time: number) {
        let timer = setInterval(method, time);

        this.start = () => {
            if (!timer) {
                this.stop();
                timer = setInterval(method, time);
            }
        };

        this.stop = () => {
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
        };

        this.restart = () => {
            seconds = 3;
            countdownElement.innerText = seconds.toString();

            this.stop();
            this.start();
        };
    }
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
