<script>
    import router from "page";

    import Home from "./Home.svelte";
    import Game from "./Game.svelte";

    let page;

    router("/", () => (page = Home));
    router("/game", () => (page = Game));

    router.start();
</script>

<svelte:component this={page} />
