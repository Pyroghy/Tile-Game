<script lang="ts">
    import { onMount } from "svelte";
    import { TileManager } from "../components/TileManager";

    const rows = 4;

    let canvas: HTMLCanvasElement;
    let tileManager: TileManager;

    onMount(() => {
        const context = canvas.getContext("2d");
        tileManager = new TileManager(context);
        tileManager.createMatrix(canvas.width, rows);
        tileManager.startGame(rows);
    });
</script>

<main>
    <header>
        <section>POINTS</section>
        <section>TIME</section>
        <section>ACCURACY</section>
    </header>

    <canvas
        bind:this={canvas}
        on:mousedown={(...args) => tileManager.handleClick(...args)}
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
        padding: 2rem;

        width: 40rem;
        height: calc((100vh - 40rem) / 2);
    }

    canvas {
        width: 40rem;
        height: 40rem;
        cursor: crosshair;
        background-color: aqua;
    }
</style>
