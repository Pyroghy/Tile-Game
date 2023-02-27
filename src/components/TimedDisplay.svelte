<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import TimedScoreboard from "./timed/TimedScoreboard.svelte";
    import TimedCanvas from "./timed/TimedCanvas.svelte";
    import TimedStart from "./timed/TimedStart.svelte";

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
