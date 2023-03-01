<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import TimedCanvas from "./TimedCanvas.svelte";
    import Scoreboard from "../Scoreboard.svelte";
    import ModeStart from "../ModeStart.svelte";

    const dispatch = createEventDispatcher();
    let component: any = ModeStart;

    function handleStart() {
        component = TimedCanvas;
    }

    function handleStop(event: any) {
        dispatch("end", event.detail);
    }
</script>

<svelte:component this={Scoreboard} type="timed"/>
<svelte:component
    this={component}
    on:start={handleStart}
    on:stop={handleStop}
/>
