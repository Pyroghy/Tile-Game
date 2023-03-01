<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";

    const dispatch = createEventDispatcher();
    let canvas: HTMLCanvasElement;

    onMount(() => dispatch("canvas", canvas));

    function onMouseDown(event: any): void {
        const bounds = event.target.getBoundingClientRect();

        dispatch("canvasClick", {
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top,
        });
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
