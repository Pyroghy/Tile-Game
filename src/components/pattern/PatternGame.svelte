<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import Canvas from "../base/Canvas.svelte";
    import Scoreboard from "../base/Scoreboard.svelte";
    import ModeStart from "../base/ModeStart.svelte";

    import { PatternMode } from "../../lib/gamemode/PatternMode";

    const dispatch = createEventDispatcher();
    const pattern = new PatternMode();

    let component: any = ModeStart;

    function onStart() {
        component = Canvas;
    }

    // fires when canvas loads
    function onCanvas(event: any) {
        pattern.display.setCanvas(event.detail);
        pattern.display.setTileContext();
        pattern.start();
    }

    // fires when canvas is clicked on
    function onCanvasClick(event: any) {
        const { x, y } = event.detail;
        const clickedTile = pattern.display.tileContext.getTile(x, y);

        if (clickedTile) {
            pattern.onClick(clickedTile, () => {
                const totalHits =
                    pattern.totalBlackHits + pattern.totalWhiteHits;

                dispatch("stop", {
                    score: pattern.display.score,
                    accuracy: (pattern.totalBlackHits / totalHits) * 100,
                });
            });
        }
    }
</script>

<svelte:component this={Scoreboard} type="pattern" />
<svelte:component
    this={component}
    on:start={onStart}
    on:canvas={onCanvas}
    on:canvasClick={onCanvasClick}
/>
