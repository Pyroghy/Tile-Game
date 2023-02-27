<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { TimedDisplay } from "../../lib/client/TimedDisplay";
    import { TimedMode } from "../../lib/gamemode/TimedMode";

    const dispatch = createEventDispatcher();
    const timed = new TimedMode();

    onMount(() => {
        timed.display = new TimedDisplay(document);

        timed.gameState = true;
        timed.startTime = Date.now();

        timed.display.createCanvas();

        timed.display.tileManager.createMatrix(3);
        timed.display.tileManager.redrawTiles();

        let timeLeft = 1;

        const gameTimer = setInterval(() => {
            timeLeft--;

            timed.display.updateTime(timeLeft);

            if (timeLeft <= 0) {
                const totalHits = timed.totalBlackHits + timed.totalWhiteHits;

                dispatch("stop", {
                    score: timed.score,
                    accuracy: (timed.totalBlackHits / totalHits) * 100,
                });

                timed.stop();

                clearInterval(gameTimer);
            }
        }, 1000);
    });

    function handleClick({ target, clientX, clientY }: any) {
        const bounds = target.getBoundingClientRect();
        const clickedTile = timed.display.tileManager.getTile(
            clientX - bounds.left,
            clientY - bounds.top
        );

        if (clickedTile) {
            timed.onClick(clickedTile);
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
