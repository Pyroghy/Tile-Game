<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";

    const dispatch = createEventDispatcher();
    let countdownElement: any;
    let seconds = 3;

    const countdownTimer = new Interval(() => {
        seconds--;

        countdownElement.innerText = seconds.toString();

        if (seconds <= 0) {
            dispatch("start");
            countdownTimer.stop();
            seconds = 3;
        }
    }, 1000);

    function Interval(method: Function, time: number) {
        let timer = setInterval(method, time);

        this.stop = () => {
            if (timer) {
                clearInterval(timer);
                timer = null;
            }

            return this;
        };

        this.start = () => {
            if (!timer) {
                this.stop();
                timer = setInterval(method, time);
            }

            return this;
        };

        this.restart = () => {
            seconds = 3;
            countdownElement.innerText = seconds.toString();

            return this.stop().start();
        };
    }

    export function handleRestart() {
        countdownTimer.restart();
    }

    onMount(() => {
        countdownTimer.restart();
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
