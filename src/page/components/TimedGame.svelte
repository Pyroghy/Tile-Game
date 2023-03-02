<script lang="ts">
    import { createEventDispatcher, onDestroy, onMount } from "svelte";
    import { TimedMode } from "../../lib/gamemode/TimedMode";

    import Canvas from "./Canvas.svelte";
    import Scoreboard from "./Scoreboard.svelte";
    import ModeStart from "./ModeStart.svelte";

    const dispatch = createEventDispatcher();
    const timed = new TimedMode(dispatch);
    let component: any = ModeStart;
    let seconds = 3;

    export const restartGame = () => {
        timed.stop();

        component = ModeStart;
    };

    onMount(() => {
        const countdownElement = document.getElementById("countdown");
        const countdown = setInterval(() => {
            seconds--;

            countdownElement.innerText = seconds.toString();

            if (seconds <= 0) {
                timed.emit("start");
                component = Canvas;
                clearInterval(countdown);
            }
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(timed.gameTimer);
        timed.emit("stop");
    });
</script>

<svelte:component this={Scoreboard} type="timed" />
<svelte:component this={component} gamemode={timed} />
