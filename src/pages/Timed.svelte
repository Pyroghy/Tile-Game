<script lang="ts">
    import { onMount } from "svelte";
    import { TimedMode } from "../components/TimedMode";

    // import from some sort of config? or user choice?
    const rows = 4;

    let canvas: HTMLCanvasElement;
    let timedMode: TimedMode;

    onMount(() => {
        const context = canvas.getContext("2d");

        timedMode = new TimedMode(context);

        // change to init
        timedMode.start(canvas.width, rows);

        //

        let def_time = 30000; // 30 seconds - 30000
        const timer = document.getElementById("time");

        let inte = setInterval(() => {
            if (def_time <= 0) {
                clearInterval(inte);
                timedMode.stop();
            }

            def_time -= 100;

            timer.innerText = (def_time / 1000).toFixed(1).toString();

        }, 100);
    });
</script>

<main>
    <header>
        <section>
            <h4>POINTS</h4>
            <p id="pts">0</p>
        </section>
        <section>
            <h4>TIME</h4>
            <p id="time">30</p>
        </section>
        <section>
            <h4>ACCURACY</h4>
            <p id="acc">0</p>
        </section>
    </header>

    <canvas
        bind:this={canvas}
        on:mousedown={(...args) => timedMode.onClick(...args)}
        id="canvas"
        width={640}
        height={640}
    />
</main>

<style>
    main {
        position: relative;
        padding-top: calc((100vh - 40rem) / 2);
        padding-bottom: calc((100vh - 40rem) / 2);
        background-color: blueviolet;
    }

    header {
        position: absolute;
        inset: 0;
        padding: 1.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        width: 40rem;
        height: calc((100vh - 40rem) / 2);
    }

    section {
        text-align: center;
        width: 33.3%;
    }

    section > p {
        text-align: center;
    }

    canvas {
        width: 40rem;
        height: 40rem;
        cursor: crosshair;
        background-color: aqua;
    }
</style>
