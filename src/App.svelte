<script lang="ts">
    import router from "page";

    // import routes from "./routes";

    import Home from "./routes/Home.svelte";

    import Timed from "./routes/Timed.svelte";
    import Pattern from "./routes/Pattern.svelte";
    import Multiplayer from "./routes/Multiplayer.svelte";

    // get correct type dec
    let page: any;

    // add 404 page

    router("/", () => (page = Home));

    router("/timed", () => (page = Timed));
    router("/pattern", () => (page = Pattern));
    router("/multiplayer", () => (page = Multiplayer));

    router.start();
</script>

<svelte:component this={page} />
