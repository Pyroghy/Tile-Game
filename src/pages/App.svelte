<script lang="ts">
    import { onMount } from "svelte";
    import { TileManager } from "../components/TileManager";

    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D;
    let tileManager: any;

    onMount(() => {
        canvas = document.getElementById("canvas") as HTMLCanvasElement;
        canvas.width = 640;
        canvas.height = 640;
        context = canvas.getContext("2d");

        tileManager = new TileManager(context, canvas.width, canvas.height);

        tileManager.initialize();
        tileManager.drawAll();
    });
</script>

<main>
    <canvas id="canvas" width="640" height="640" />
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
