<script lang="ts">
    import Nav from "./components/Nav.svelte";
    import Main from "./components/Main.svelte";
    import Game from "./components/Game.svelte";
    import Config from "./components/Config.svelte";

    let component: any = Main;

    function onHome() {
        component = Main;
    }

    function onPlay() {
        component = Game;
    }

    function onLogin() {
        alert("LOGIN");
    }
</script>

<main>
    <svelte:component
        this={Nav}
        on:home={onHome}
        on:play={onPlay}
        on:login={onLogin}
    />

    <svelte:component this={component} />

    <svelte:component this={Config} />
</main>

<style>
    :root {
        --navWidth: calc((100vw - 100vh) / 2);
    }

    main {
        display: grid;
        grid-template-columns: var(--navWidth) 100vh var(--navWidth);
    }
</style>
