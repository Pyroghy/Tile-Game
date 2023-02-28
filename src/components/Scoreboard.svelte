<script lang="ts">
    export let type: string;

    const fields = {
        timed: [
            { name: "score", value: "0" },
            { name: "time", value: "30" },
            { name: "accuracy", value: "0" },
        ],
        pattern: [
            { name: "score", value: "0" },
            { name: "round", value: "0" },
            { name: "accuracy", value: "0%" },
        ],
    };

    const field = fields[type];

    const score = field[0];
    const counter = field[1];
    const accuracy = field[2];

    const scoreName = score.name.toUpperCase();
    const counterName = counter.name.toUpperCase();
    const accuracyName = accuracy.name.toUpperCase();

    const scoreValue = score.value;
    const counterValue = counter.value;
    const accuracyValue = accuracy.value;
</script>

<header>
    <article>
        <p>{scoreName}</p>
        <p class="value" id="score">{scoreValue}</p>
    </article>

    <article>
        <p>{counterName}</p>
        <p class="value" id="counter">{counterValue}</p>
    </article>

    <article>
        <p>{accuracyName}</p>
        <p class="value" id="accuracy">{accuracyValue}</p>
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
