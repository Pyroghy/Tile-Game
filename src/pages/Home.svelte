<script>
</script>

<main>
    <section>
        <a class="button" href="/timed">Timed</a>
        <a class="button" href="/pattern">Pattern</a>
        <a class="button" href="/">Multiplayer</a>
    </section>
</main>

<style>
    main {
        position: relative;
        padding-top: calc((100vh - 40rem) / 2);
        padding-bottom: calc((100vh - 40rem) / 2);
        background-color: blueviolet;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        width: 40rem;
        height: 40rem;
        background-color: aquamarine;
    }

    a.button {
        width:24rem;
        height: 6rem;
        line-height: 6rem;
        text-align: center;
        font-size: 2rem;
        text-decoration: none;
        font-weight: 700;
        border-radius: 1rem;
        background-color: pink;
        box-shadow: 0.125rem 0.25rem red;
    }

    a.button:active {
        box-shadow: 0rem 0rem;
        transform: translateX(0.125rem) translateY(0.25rem);
    }

</style>
