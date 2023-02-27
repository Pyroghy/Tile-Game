<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import PatternScoreboard from "./PatternScoreboard.svelte";
    import PatternCanvas from "./PatternCanvas.svelte";
    import PatternStart from "./PatternStart.svelte";

    const dispatch = createEventDispatcher();
    let component: any = PatternStart;

    function handleStart() {
        component = PatternCanvas;
    }

    function handleStop(event: any) {
        dispatch("end", event.detail);
    }
</script>

<svelte:component this={PatternScoreboard} />
<svelte:component
    this={component}
    on:start={handleStart}
    on:stop={handleStop}
/>
