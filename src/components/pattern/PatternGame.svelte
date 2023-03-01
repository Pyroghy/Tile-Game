<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import PatternCanvas from "./PatternCanvas.svelte";
    import Scoreboard from "../Scoreboard.svelte";
    import ModeStart from "../ModeStart.svelte";

    const dispatch = createEventDispatcher();
    let component: any = ModeStart;

    function handleStart() {
        component = PatternCanvas;
    }

    function handleStop(event: any) {
        dispatch("end", event.detail);
    }
</script>

<svelte:component this={Scoreboard} type="pattern"/>
<svelte:component
    this={component}
    on:start={handleStart}
    on:stop={handleStop}
/>
