<script lang="ts">
    import TimedCanvas from "../components/TimedCanvas.svelte";
    import TimedOver from "../components/TimedOver.svelte";

    let gameStatus = true;

    let score: number;
    let accuracy: number;

    function handle(e: any) {
        gameStatus = !gameStatus;

        if (gameStatus) {
            score = e.detail.score;
            accuracy = e.detail.accuracy;
        }
    }
</script>

{#if gameStatus}
    <TimedCanvas on:gameOver={handle} />
{:else if !gameStatus}
    <TimedOver on:message={handle} {score} {accuracy} />
{/if}
