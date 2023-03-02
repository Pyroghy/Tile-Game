<script lang="ts">
    import { onMount } from "svelte";
    import type { Gamemode } from "../../lib/gamemode/Gamemode";

    export let gamemode: Gamemode;
    let canvas: HTMLCanvasElement;

    onMount(() => {
        gamemode.display.setCanvas(canvas);
        gamemode.display.setTileContext();
        gamemode.start();
    });

    function onMouseDown({ target, clientX, clientY }: any): void {
        const bounds = target.getBoundingClientRect();
        const clickedTile = gamemode.display.tileContext.getTile(
            clientX - bounds.left,
            clientY - bounds.top
        );

        if (clickedTile) {
            gamemode.onClick(clickedTile);
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
