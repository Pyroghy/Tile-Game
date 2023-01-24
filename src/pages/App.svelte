<script>
    import router from "page";

    import Home from "./Home.svelte";
    import Timed from "./Timed.svelte";
    import Pattern from "./Pattern.svelte";

    let page;

    router("/", () => (page = Home));
    router("/timed", () => (page = Timed));
    router("/pattern", () => (page = Pattern));

    router.start();
</script>

<svelte:component this={page} />
