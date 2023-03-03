<script lang="ts">
    import { createEventDispatcher, onDestroy, onMount } from "svelte";

    import Canvas from "../base/Canvas.svelte";
    import Scoreboard from "../base/Scoreboard.svelte";
    import ModeStart from "../base/ModeStart.svelte";

    import { TimedMode } from "../../lib/gamemode/TimedMode";

    const dispatch = createEventDispatcher();
    const timed = new TimedMode(dispatch);

    let component: any = ModeStart;
    
    onDestroy(() => {
        clearInterval(timed.gameTimer);
    });

    function onStart() {
        component = Canvas;
    }

    // fires when canvas loads
    function onCanvas(event: any) {
        timed.display.setCanvas(event.detail);
        timed.display.setTileContext();
        timed.start();
    }

    // fires when canvas is clicked on
    function onCanvasClick(event: any) {
        const { x, y } = event.detail;
        const clickedTile = timed.display.tileContext.getTile(x, y);

        if (clickedTile) {
            timed.onClick(clickedTile);
        }
    }
</script>

<svelte:component this={Scoreboard} type="timed" />
<svelte:component
    this={component}
    on:start={onStart}
    on:canvas={onCanvas}
    on:canvasClick={onCanvasClick}
/>
