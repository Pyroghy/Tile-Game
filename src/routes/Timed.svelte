<script lang="ts">
    import page from "page";
    import TimedCanvas from "../components/TimedCanvas.svelte";
    import TimedMenu from "../components/TimedMenu.svelte";

    let component: any = TimedCanvas;
    let options: any = {};

    function handleStop(event: any) {
        options.score = event.detail.score;
        options.accuracy = event.detail.accuracy;

        component = TimedMenu;
    }

    function handleRestart() {
        component = TimedCanvas;
    }

    function handleLeave() {
        page.redirect("/");
    }
</script>

<svelte:component
    this={component}
    on:stop={handleStop}
    on:restart={handleRestart}
    on:leave={handleLeave}
    {options}
/>
