<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import type { Gamemode } from "../lib/gamemode/Gamemode";

    import Canvas from "./Canvas.svelte";
    import Scoreboard from "./Scoreboard.svelte";
    import ModeStart from "./ModeStart.svelte";

    const dispatch = createEventDispatcher();
    export let gamemode: Gamemode;
    let component: any = ModeStart;
    let game: any;

    onMount(() => {
        gamemode.setEmitter(dispatch);
    });

    function onStart() {
        gamemode.stop();
        component = Canvas;
    }

    export function handleRestart() {
        if (component === ModeStart) {
            game.handleRestart();
        } else {
            gamemode.stop();
            component = ModeStart;
        }
    }
</script>

<svelte:component this={Scoreboard} />
<svelte:component
    this={component}
    game={gamemode}
    bind:this={game}
    on:start={onStart}
/>
