<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import type { Gamemode } from "../lib/gamemode/Gamemode";

    export let game: Gamemode;
    let canvas: HTMLCanvasElement;

    onMount(() => {
        game.display.setCanvas(canvas);
        game.display.setTileContext();
        game.start();
    });

    onDestroy(() => {
        clearInterval(game.gameTimer);
    });

    function onMouseDown({ target, clientX, clientY }: any): void {
        const bounds = target.getBoundingClientRect();
        const clickedTile = game.display.tileContext.getTile(
            clientX - bounds.left,
            clientY - bounds.top
        );

        if (clickedTile) {
            game.onClick(clickedTile);
        }
    }
</script>

<canvas
    bind:this={canvas}
    on:mousedown={onMouseDown}
    width={640}
    height={640}
/>

<style>
    canvas {
        cursor: crosshair;
        width: min(40rem, 100vw);
        height: min(40rem, 100vw);
    }
</style>
