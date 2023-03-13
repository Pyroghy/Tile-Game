<script lang="ts">
    import Config from "./components/Config.svelte";
    import Menu from "./components/Menu.svelte";

    let component: any = Menu;

    function onCreate() {
        component = Config;
    }

    function onStart(e: any) {
        console.log(e.detail);
    }
</script>

<main>
    <header>HEADER</header>

    <svelte:component
        this={component}
        on:create={onCreate}
        on:start={onStart}
    />

    <footer>FOOTER</footer>
</main>

<style>
    main {
        display: grid;
        grid-template-rows: 10vh 80vh 10vh;

        width: 60vw;
        height: 100vh;

        background-color: #121212;
    }

    header {
        display: flex;
        place-content: center;
        place-items: center;
    }

    footer {
        display: flex;
        place-content: center;
        place-items: center;
    }
</style>
