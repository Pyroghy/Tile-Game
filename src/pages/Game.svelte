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
        display: grid;
        align-content: center;
        background-color: blueviolet;
    }

    canvas {
        width: 40rem;
        height: 40rem;
        background-color: brown;
    }
</style>
