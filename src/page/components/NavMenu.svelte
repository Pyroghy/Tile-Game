<script lang="ts">
    import { onMount } from "svelte";

    let current = "";

    function enter() {
        const navView = document.getElementById("nav-view");

        navView.style.display = "block";
        navView.style.width = "20rem";
    }

    onMount(() => {
        const navView = document.getElementById("nav-view");
        const home = document.getElementById("home");
        const game = document.getElementById("game");
        const play = document.getElementById("play");
        const sign = document.getElementById("sign");

        home.onmouseenter = () => {
            current = "home";
            enter();
        };

        game.onmouseenter = () => {
            current = "game";
            enter();
        };

        play.onmouseenter = () => {
            current = "play";
            enter();
        };

        sign.onmouseenter = () => {
            current = "sign";
            enter();
        };

        navView.onmouseleave = () => {
            current = "";
            navView.style.display = "none";
            navView.style.width = "0rem";
        };
    });
</script>

<section class="nav">
    <section class="nav-tabs">
        <button class={current === "home" ? "selected" : ""} id="home"
            >HOME</button
        >
        <button class={current === "game" ? "selected" : ""} id="game"
            >GAME</button
        >
        <button class={current === "play" ? "selected" : ""} id="play"
            >PLAY</button
        >
        <button class={current === "sign" ? "selected" : ""} id="sign"
            >SIGN</button
        >
    </section>

    <section class="nav-view" id="nav-view">NAV VIEW</section>
</section>

<style>
    .selected {
        align-self: end;
        width: 5.5rem;
        border-top-right-radius: 0rem;
        border-bottom-right-radius: 0rem;
    }

    section.nav {
        display: flex;
        flex-direction: row;
        align-self: center;
        height: 100vh;
    }

    section.nav-tabs {
        padding-top: 1rem;
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: red;
        width: 6rem;
    }

    section.nav-view {
        display: none;
        background-color: brown;
    }

    button {
        padding: 0;
        border: none;
        display: flex;

        place-self: center;

        width: 5rem;
        height: 5rem;

        border-radius: 0.5rem;
        background-color: brown;
    }

    button#sign {
        position: absolute;
        bottom: 1rem;
    }
</style>
