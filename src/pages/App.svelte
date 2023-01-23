<script>
    import router from "page";

    import Home from "./Home.svelte";
    import Game from "./Game.svelte";

    let page;

    router("/", () => (page = Home));
    router("/blog", () => (page = Game));

    router.start();
</script>

<main>
    <svelte:component this={page} />
</main>
