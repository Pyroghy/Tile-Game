<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import TimedScoreboard from "./TimedScoreboard.svelte";
    import TimedCanvas from "./TimedCanvas.svelte";
    import TimedStart from "./TimedStart.svelte";

    const dispatch = createEventDispatcher();
    let component: any = TimedStart;

    function handleStart() {
        component = TimedCanvas;
    }

    function handleStop(event: any) {
        dispatch("end", event.detail);
    }
</script>

<svelte:component this={TimedScoreboard} />
<svelte:component
    this={component}
    on:start={handleStart}
    on:stop={handleStop}
/>
