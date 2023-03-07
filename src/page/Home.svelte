<script lang="ts">
    import NavMenu from "./components/NavMenu.svelte";
</script>

<main>
    <svelte:component this={NavMenu} />

    <section class="main">MAIN</section>

    <section class="side">SIDE</section>
</main>

<style>
    :root {
        --navWidth: calc((100vw - 100vh) / 2);
    }

    main {
        display: grid;
        grid-template-columns: var(--navWidth) 100vh var(--navWidth);
    }

    section {
        height: 100vh;
    }

    section.main {
        background-color: #121212;
    }

    section.side {
        place-self: center;

        width: 90%;
        height: 95vh;

        border-radius: 1rem;
        background-color: #121212;
    }
</style>
