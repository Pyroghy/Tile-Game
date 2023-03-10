<script lang="ts">
    import GameConfigV2 from "./game_config/GameConfig_v2.svelte";

    let component: any = GameConfigV2;

    function onTimed() {
        component = GameConfigV2;
    }

    function onBack() {
        component = GameConfigV2;
    }
</script>

<svelte:component this={GameConfigV2} on:timed={onTimed} on:back={onBack} />
