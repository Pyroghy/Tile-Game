<script lang="ts">
    import page from "page";

    import TimedGame from "../components/timed/TimedGame.svelte";
    import TimedEnd from "../components/timed/TimedEnd.svelte";

    let component: any = TimedGame;
    let data: any;

    function handleLoad() {
        const score = document.getElementById("final-score");
        const accuracy = document.getElementById("final-accuracy");

        score.innerText = data.score.toString();
        accuracy.innerText = data.accuracy.toFixed(2) + "%";
    }

    function handleRestart() {
        component = TimedGame;
    }

    function handleStop(event: any) {
        component = TimedEnd;
        data = event.detail;
    }

    function handleLeave() {
        page.redirect("/");
    }
</script>

<main>
    <svelte:component
        this={component}
        on:end={handleStop}
        on:load={handleLoad}
    />

    <footer>
        <button on:click={handleRestart}>Restart</button>
        <button on:click={handleLeave}>Leave</button>
    </footer>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;

        justify-content: space-evenly;

        width: min(40rem, 100vw);
        height: 100vh;
    }

    footer {
        display: flex;
        flex-direction: row;

        justify-content: space-evenly;
        align-items: center;

        width: min(40rem, 100vw);
        height: calc(((100vh - min(40rem, 100vw)) / 2) * 0.75);

        border-radius: 1rem;
        background-color: #121212;
    }

    button {
        cursor: pointer;

        width: calc(min(40rem, 100vw) * 0.3);
        height: calc((min(40rem, 100vw) * 0.3) / 4);

        text-align: center;
        font-weight: 500;
        color: white;
        font-size: 1.5rem;

        border: none;
        border-radius: 0.5rem;
        background-color: #5539cc;
        box-shadow: 1px 2px aqua;
    }
</style>
