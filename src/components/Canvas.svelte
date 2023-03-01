<script lang="ts">
    import { onMount } from "svelte";
    import type { Gamemode } from "../lib/tmep/Gamemode";

    export let gamemode: Gamemode;

    onMount(() => {
        gamemode.display.setCanvas(document);
        gamemode.display.setTileContext();
    });

    function handleClick() {}
</script>

<canvas on:mousedown={handleClick} id="canvas" width={640} height={640} />

<style>
    canvas {
        cursor: crosshair;

        width: min(40rem, 100vw);
        height: min(40rem, 100vw);
    }
</style>
