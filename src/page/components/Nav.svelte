<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function handleHome() {
        dispatch("home");
    }

    function handlePlay() {
        dispatch("play");
    }

    function handleLogin() {
        dispatch("login");
    }
</script>

<nav>
    <button on:click={handleHome}>
        <div>
            <i class="fa fa-home fa-2x" />
            <span>Home</span>
        </div>
    </button>

    <button on:click={handlePlay}>
        <div>
            <i class="fa fa-play fa-2x" />
            <span>Play</span>
        </div>
    </button>

    <button on:click={handleLogin}>
        <div>
            <i class="fa fa-sign-in fa-2x" />
            <span>Login</span>
        </div>
    </button>
</nav>

<style>
    nav {
        display: flex;
        flex-direction: column;
        place-content: center;

        gap: 1rem;
        width: 5rem;
        height: 100%;

        overflow: hidden;
        transition: width 0.05s linear;

        background-color: #121212;
    }

    nav:hover {
        width: calc(25vw * 0.8);
    }

    button {
        padding: 0;
        border: none;
        cursor: pointer;
        background-color: transparent;
    }

    div {
        display: table;
        color: #999;
        text-decoration: none;
        transition: all 0.1s linear;
        font-size: 1.25rem;
    }

    div:hover {
        color: #fff;
        background-color: #000000;
    }

    i {
        display: flex;
        place-content: center;
        place-items: center;

        width: 5rem;
        height: 4rem;
        font-size: 3rem;
    }

    span {
        display: table-cell;
        vertical-align: middle;
        width: calc(25vw * 0.8);
    }
</style>
