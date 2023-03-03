<script lang="ts">
    import { createEventDispatcher, onDestroy } from "svelte";
    import { TimedMode } from "../../lib/gamemode/TimedMode";

    import Canvas from "./Canvas.svelte";
    import Scoreboard from "./Scoreboard.svelte";
    import ModeStart from "./ModeStart.svelte";

    const dispatch = createEventDispatcher();
    const timed = new TimedMode(dispatch);
    let component: any = ModeStart;
    let game: any;

    export function restartGame() {
        component = ModeStart;

        game.handleRestart();

        clearInterval(timed.gameTimer);
        timed.emit("restart");
    }

    function onStart() {
        component = Canvas;
    }

    onDestroy(() => {
        clearInterval(timed.gameTimer);
    });
</script>

<svelte:component this={Scoreboard} type="timed" />
<svelte:component
    this={component}
    gamemode={timed}
    bind:this={game}
    on:start={onStart}
/>
