<script lang="ts">
    import page from "page";
    import { onMount } from "svelte";
    import { PatternDisplay } from "../lib/client/structures/PatternDisplay";
    import { PatternMode } from "../lib/gamemode/PatternMode";

    let canvas: HTMLCanvasElement;
    let pattern: PatternMode;

    onMount(() => {
        canvas.width =
            window.innerWidth < canvas.width
                ? canvas.clientWidth
                : canvas.width;
        canvas.height = canvas.width;

        pattern = new PatternMode(canvas);
        pattern.display = new PatternDisplay(document);
        pattern.start();
    });

    function handleClick({ target, clientX, clientY }: any) {
        const bounds = target.getBoundingClientRect();
        const clickedTile = pattern.tileManager.getTile(
            clientX - bounds.left,
            clientY - bounds.top
        );

        const getClicked = (x: number, y: number, w: number, h: number) =>
            clientX - bounds.left >= x &&
            clientX - bounds.left < x + w &&
            clientY - bounds.top >= y &&
            clientY - bounds.top < y + h;

        if (!pattern.gameState) {
            const lobbyButton = getClicked(320, 390, 100, 50);
            const restartButton = getClicked(200, 390, 100, 50);

            if (lobbyButton) {
                pattern.stop();
            } else if (restartButton) {
                pattern.restart();
            }

            return;
        } else if (!clickedTile) return;

        pattern.onClick(clickedTile);
    }

    function handleLeave() {
        pattern.stop();
        page.redirect("/");
    }
</script>

<main>
    <header>
        <article>
            <h1>SCORE</h1>
            <h3 id="score">0</h3>
        </article>

        <article>
            <h1>ROUND</h1>
            <h2 id="round">0</h2>
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
        <button on:click={pattern.restart}>Restart</button>
        <button on:click={handleLeave}>Leave</button>
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
        cursor: crosshair;

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
