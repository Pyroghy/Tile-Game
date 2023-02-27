<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { PatternDisplay } from "../../lib/client/structures/PatternDisplay";
    import { PatternMode } from "../../lib/gamemode/PatternMode";

    const dispatch = createEventDispatcher();
    const pattern = new PatternMode();

    onMount(() => {
        pattern.display = new PatternDisplay(document);

        pattern.gameState = true;
        pattern.startTime = Date.now();

        pattern.display.createCanvas();

        pattern.display.tileManager.createMatrix(4);
        pattern.display.tileManager.redrawTiles();
    });

    function handleClick({ target, clientX, clientY }: any) {
        const bounds = target.getBoundingClientRect();
        const clickedTile = pattern.display.tileManager.getTile(
            clientX - bounds.left,
            clientY - bounds.top
        );

        if (clickedTile) {
            pattern.onClick(clickedTile);

            if (pattern.round >= 5) {
                const totalHits =
                    pattern.totalBlackHits + pattern.totalWhiteHits;

                dispatch("stop", {
                    score: pattern.score,
                    accuracy: (pattern.totalBlackHits / totalHits) * 100,
                });

                pattern.stop();
            }
        }
    }
</script>

<canvas on:mousedown={handleClick} id="canvas" width={640} height={640} />

<style>
    canvas {
        cursor: crosshair;

        width: min(40rem, 100vw);
        height: min(40rem, 100vw);
    }
</style>
