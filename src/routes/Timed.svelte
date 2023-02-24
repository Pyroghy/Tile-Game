<script lang="ts">
    import { onMount } from "svelte";
    import { TimedDisplay } from "../lib/client/structures/TimedDisplay";
    import { TimedMode } from "../lib/gamemode/modes/TimedMode";

    let canvas: HTMLCanvasElement;
    let timed: TimedMode;

    onMount(() => {
        canvas.width = window.innerWidth < canvas.width ? canvas.clientWidth : canvas.width;
        canvas.height = canvas.width;

        timed = new TimedMode(canvas);
        timed.display = new TimedDisplay(document);
        timed.start();

        let timeLeft = 31;

        const countdown = setInterval(() => {
            if (!timed.gameState) return;

            timeLeft--;

            if (timeLeft > 0) {
                timed.display.updateTime(timeLeft);
            } else if (timeLeft <= 0) {
                timed.display.updateTime(timeLeft);
                timed.stop();

                clearInterval(countdown);
            }
        }, 1000);
    });

    function handleClick({ target, clientX, clientY }: any) {
        const bounds = target.getBoundingClientRect();
        const clickedTile = timed.tileManager.getTile(
            clientX - bounds.left,
            clientY - bounds.top
        );

        const getClicked = (x: number, y: number, w: number, h: number) =>
            clientX - bounds.left >= x &&
            clientX - bounds.left < x + w &&
            clientY - bounds.top >= y &&
            clientY - bounds.top < y + h;

        if (!timed.gameState) {
            const lobbyButton = getClicked(320, 390, 100, 50);
            const restartButton = getClicked(200, 390, 100, 50);

            if (lobbyButton) {
                timed.stop();
            } else if (restartButton) {
                timed.restart();
            }

            return;
        } else if (!clickedTile) return;

        timed.onClick(clickedTile);
    }
</script>

<main>
    <header>
        <article>
            <h1>SCORE</h1>
            <h3 id="score">0</h3>
        </article>

        <article>
            <h1>TIME</h1>
            <h2 id="time">30</h2>
        </article>

        <article>
            <h1>ACCURACY</h1>
            <h3 id="accuracy">100.00%</h3>
        </article>
    </header>

    <canvas
        on:mousedown={handleClick}
        bind:this={canvas}
        width={640}
        height={640}
    />

    <footer>
        <button on:click={timed.restart}>Restart</button>
        <button>Leave</button>
    </footer>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;

        justify-content: space-evenly;

        width: min(40rem, 100vw);
        height: 100vh;
    }

    canvas {
        width: min(40rem, 100vw);
        height: min(40rem, 100vw);

        background-color: aqua;
    }

    header,
    footer {
        width: min(40rem, 100vw);
        height: calc(((100vh - 40rem) / 2) * 0.75);

        background-color: black;
    }

    header {
        display: flex;
        flex-direction: row;

        justify-content: space-evenly;
        align-items: center;

        border-radius: 1rem;
    }

    header > article {
        width: 12rem;
    }

    footer {
        display: flex;
        flex-direction: row;

        justify-content: space-evenly;
        align-items: center;

        border-radius: 1rem;
    }

    footer > button {
        cursor: pointer;

        width: 12rem;
        height: 3rem;

        text-align: center;

        border: none;
        border-radius: 0.5rem;
        background-color: #5539cc;
    }
</style>
