<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { TimedDisplay } from "../../lib/client/structures/TimedDisplay";

    export let gamemode: any;

    const dispatch = createEventDispatcher();

    onMount(() => {
        gamemode.display = new TimedDisplay(document);

        let seconds = 5;

        const countdown1 = setInterval(() => {
            seconds--;

            if (seconds <= 0) {
                gamemode.gameState = true;
                dispatch("start", {});

                clearInterval(countdown1);
            }
        }, 1000);

        let timeLeft = 5; //31;

        // game timer
        const countdown = setInterval(() => {
            if (!gamemode.gameState) return;
            timeLeft--;

            if (timeLeft > 0) {
                gamemode.display.updateTime(timeLeft);
            } else if (timeLeft <= 0) {
                gamemode.display.updateTime(timeLeft);

                dispatch("stopFirst", {
                    score: gamemode.score,
                    accuracy:
                        (gamemode.totalBlackHits /
                            (gamemode.totalBlackHits +
                                gamemode.totalWhiteHits)) *
                        100,
                });

                gamemode.stop();

                clearInterval(countdown);
            }
        }, 1000);
    });

    function handleClick({ target, clientX, clientY }: any) {
        const bounds = target.getBoundingClientRect();
        const clickedTile = gamemode.display.tileManager.getTile(
            clientX - bounds.left,
            clientY - bounds.top
        );

        if (!clickedTile) return;

        gamemode.onClick(clickedTile);
    }
</script>

{#if gamemode.gameState}
    <canvas on:mousedown={handleClick} id="canvas" width={640} height={640} />
{:else if !gamemode.gameState}
    <section>match startsa in</section>
{/if}

<style>
    canvas {
        cursor: crosshair;

        width: min(40rem, 100vw);
        height: min(40rem, 100vw);

        background-color: aqua;
    }

    section {
        width: min(40rem, 100vw);
        height: min(40rem, 100vw);

        border-radius: 1rem;
        background-color: #121212;
    }
</style>
