<script lang="ts">
    import { createEventDispatcher, onDestroy } from "svelte";
    import { PatternMode } from "../lib/gamemode/PatternMode";

    import Canvas from "./core/Canvas.svelte";
    import Scoreboard from "./core/Scoreboard.svelte";
    import ModeStart from "./core/ModeStart.svelte";

    const dispatch = createEventDispatcher();
    const pattern = new PatternMode(dispatch);
    let component: any = ModeStart;
    let game: any;

    onDestroy(() => {
        clearInterval(pattern.gameTimer);
    });

    function onStart() {
        pattern.stop();

        component = Canvas;
    }

    export function handleRestart() {
        if (component === ModeStart) {
            game.handleRestart();
        } else {
            pattern.stop();

            component = ModeStart;
        }
    }
</script>

<svelte:component this={Scoreboard} type="pattern" />
<svelte:component
    this={component}
    gamemode={pattern}
    bind:this={game}
    on:start={onStart}
/>
