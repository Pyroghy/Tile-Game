<script lang="ts">
    import { onMount } from "svelte";
    import type { TileManager } from "../components/TileManager";

    let canvas: HTMLCanvasElement;
    let tileManager: TileManager;

    // const game = new Game({ context: context, gamemode: GameType.PATTERN });

    onMount(() => {});
</script>

<main>
    <header>
        <section>
            <h4>POINTS</h4>
            <p id="pts">0</p>
        </section>
        <section>
            <h4>TIME</h4>
            <p id="time">30</p>
        </section>
        <section>
            <h4>ACCURACY</h4>
            <p id="acc">0</p>
        </section>
    </header>

    <canvas
        bind:this={canvas}
        on:mousedown={(...args) => tileManager.handleClick(...args)}
        id="canvas"
        width={640}
        height={640}
    />
</main>

<style>
    main {
        position: relative;
        padding-top: calc((100vh - 40rem) / 2);
        padding-bottom: calc((100vh - 40rem) / 2);
        background-color: blueviolet;
    }

    header {
        position: absolute;
        inset: 0;
        padding: 1.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        width: 40rem;
        height: calc((100vh - 40rem) / 2);
    }

    section {
        text-align: center;
        width: 33.3%;
    }

    section > p {
        text-align: center;
    }

    canvas {
        width: 40rem;
        height: 40rem;
        cursor: crosshair;
        background-color: aqua;
    }
</style>
