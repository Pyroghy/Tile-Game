<script lang="ts">
    import GameConfig from "./game_config/GameConfig.svelte";
    import TimedConfig from "./game_config/TimedConfig.svelte";

    let component: any = GameConfig;

    function onTimed() {
        component = TimedConfig;
    }

    function onBack() {
        component = GameConfig;
    }
</script>

<svelte:component this={component} on:timed={onTimed} on:back={onBack} />
