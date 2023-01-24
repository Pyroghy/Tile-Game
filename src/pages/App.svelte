<script>
    import router from "page";

    import Home from "./Home.svelte";
    import Timed from "./Timed.svelte";

    let page;

    router("/", () => (page = Home));
    router("/timed", () => (page = Timed));

    router.start();
</script>

<svelte:component this={page} />
