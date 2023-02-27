<section>
    <h1>GAME OVER!</h1>

    <div>
        <article>
            <h3>SCORE</h3>
            <h4 id="score">0</h4>
        </article>

        <article>
            <h3>ACCURACY</h3>
            <h4 id="acc">0</h4>
        </article>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;

        justify-content: space-evenly;
        align-items: center;

        width: min(40rem, 100vw);
        height: calc(
            (
                    (
                            100vh -
                                (
                                    (
                                            (
                                                    (
                                                            (
                                                                    100vh -
                                                                        min(
                                                                            40rem,
                                                                            100vw
                                                                        )
                                                                ) / 2
                                                        ) * 0.75
                                                ) * 2
                                        ) + min(40rem, 100vw)
                                )
                        ) / 4
                ) + min(40rem, 100vw) +
                (((100vh - min(40rem, 100vw)) / 2) * 0.75)
        );

        border-radius: 1rem;
        background-color: #121212;
    }

    div {
        display: flex;
        flex-direction: row;
        gap: 3rem;
    }
</style>
