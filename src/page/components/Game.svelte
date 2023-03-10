<script lang="ts">
    import Config from "./Config.svelte";
</script>

<main>
    <header>HEADER</header>

    <Config />

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
</style>
