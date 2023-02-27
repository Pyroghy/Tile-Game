<script lang="ts">
    import page from "page";

    import TimedDisplay from "../components/TimedDisplay.svelte";
    import TimedEnd from "../components/TimedEnd.svelte";

    let component: any = TimedDisplay;

    function handleEnd(event: any) {
        component = TimedEnd;

        document.getElementById("score").innerText = event.detail.score;
        document.getElementById("acc").innerText = event.detail.accuracy;
    }

    function handleRestart() {
        component = TimedDisplay;
    }

    function handleLeave() {
        page.redirect("/");
    }
</script>

<main>
    <svelte:component this={component} on:end={handleEnd} />

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

        width: 12rem;
        height: 3rem;

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
