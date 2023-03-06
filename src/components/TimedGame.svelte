<script lang="ts">
    import { createEventDispatcher, onDestroy } from "svelte";
    import { TimedMode } from "../lib/gamemode/TimedMode";

    import Canvas from "./core/Canvas.svelte";
    import Scoreboard from "./core/Scoreboard.svelte";
    import ModeStart from "./core/ModeStart.svelte";

    const dispatch = createEventDispatcher();
    const timed = new TimedMode(dispatch);
    let component: any = ModeStart;
    let game: any;

    onDestroy(() => {
        clearInterval(timed.gameTimer);
    });

    function onStart() {
        timed.stop();

        component = Canvas;
    }

    export function handleRestart() {
        if (component === ModeStart) {
            game.handleRestart();
        } else {
            timed.stop();

            component = ModeStart;
        }
    }
</script>

<svelte:component this={Scoreboard} type="timed" />
<svelte:component
    this={component}
    gamemode={timed}
    bind:this={game}
    on:start={onStart}
/>
