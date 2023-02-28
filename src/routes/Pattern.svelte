<script lang="ts">
    import page from "page";

    import PatternGame from "../components/pattern/PatternGame.svelte";
    import PatternEnd from "../components/pattern/PatternEnd.svelte";

    let component: any = PatternGame;
    let data: any;

    function handleLoad() {
        const score = document.getElementById("final-score");
        const accuracy = document.getElementById("final-accuracy");

        score.innerText = data.score.toString();
        accuracy.innerText = data.accuracy.toFixed(2) + "%";
    }

    function handleRestart() {
        component = PatternGame;
    }

    function handleStop(event: any) {
        component = PatternEnd;
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
        place-content: space-evenly;
        place-items: center;

        width: min(40rem, 100vw);
        height: calc(((100vh - min(40rem, 100vw)) / 2) * 0.75);

        border-radius: 1rem;
        background-color: #121212;
    }

    button {
        cursor: pointer;

        width: calc((min(40rem, 100vw) / 2) * 0.7);
        height: calc((((100vh - min(40rem, 100vw)) / 2) * 0.75) / 3);

        text-align: center;
        font-size: 1.5rem;
        color: white;

        border: none;
        border-radius: 0.5rem;
        background-color: #5539cc;
    }
</style>
