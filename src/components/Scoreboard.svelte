<header>
    <article>
        <p>SCORE</p>
        <p class="value" id="score">0</p>
    </article>

    <article>
        <p>TIME</p>
        <p class="value" id="counter">30</p>
    </article>

    <article>
        <p>ACCURACY</p>
        <p class="value" id="accuracy">0</p>
    </article>
</header>

<style>
    header {
        display: flex;
        flex-direction: row;
        place-content: space-evenly;
        place-items: center;

        width: min(40rem, 100vw);
        height: calc(((100vh - min(40rem, 100vw)) / 2) * 0.75);

        border-radius: 1rem;
        background-color: #121212;
    }

    p {
        margin: 0;
        font-weight: 500;
    }

    p.value {
        font-size: 2rem;
    }
</style>
