<script lang="ts">
    import page from "page";

    // import routes from "./routes";

    import Home from "./routes/Home.svelte";

    import Timed from "./routes/Timed.svelte";
    import Pattern from "./routes/Pattern.svelte";
    import Multiplayer from "./routes/Multiplayer.svelte";

    import Timed2 from "./page/Timed.svelte";

    // get correct type dec
    let component: any;

    // add 404 page

    page("/", () => (component = Home));

    page("/timed", () => (component = Timed));
    page("/pattern", () => (component = Pattern));
    page("/multiplayer", () => (component = Multiplayer));

    page("/2", () => (component = Timed2));

    page.start();
</script>

<svelte:component this={component} />
