<script lang="ts">
    function getSubmitedValue(name: string) {
        const elements: any = document.getElementsByName(name);

        for (let i = 0; i < elements.length; i++) {
            if (elements[i].checked) {
                return elements[i].value;
            }
        }
    }

    function handleSubmit() {
        const obj = {
            time: getSubmitedValue("times"),
            grid: getSubmitedValue("tiles"),
        };

        return obj;
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div>
        <h3>Select Game Time</h3>

        <section>
            <article>
                <input type="radio" id="sec15" name="times" value="15" />
                <label for="sec15">15 Seconds</label>
            </article>

            <article>
                <input
                    type="radio"
                    id="sec30"
                    name="times"
                    value="30"
                    checked
                />
                <label for="sec30">30 Seconds</label>
            </article>

            <article>
                <input type="radio" id="sec60" name="times" value="60" />
                <label for="sec60">60 Seconds</label>
            </article>
        </section>
    </div>

    <div style="margin-top: -1rem;">
        <h3>Select Grid Size</h3>

        <section>
            <article>
                <input type="radio" id="cnt9" name="tiles" value="9" />
                <label for="cnt9">9 Tiles</label>
            </article>

            <article>
                <input
                    type="radio"
                    id="cnt16"
                    name="tiles"
                    value="16"
                    checked
                />
                <label for="cnt16">16 Tiles</label>
            </article>

            <article>
                <input type="radio" id="cnt25" name="tiles" value="25" />
                <label for="cnt25">25 Tiles</label>
            </article>
        </section>
    </div>

    <input type="submit" value="Start!" />
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        place-content: center;
        place-items: center;
        place-self: center;

        gap: 2rem;
        width: 90%;
        height: 95vh;

        border-radius: 1rem;
        background-color: #121212;
    }

    section {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
    }

    div {
        width: 100%;
    }

    h3 {
        padding-left: 1rem;
        float: left;
    }

    label {
        cursor: pointer;
        display: flex;
        place-content: center;
        place-items: center;

        width: 100%;
        height: 100%;

        color: #999;
        font-weight: 500;

        border-radius: 0.5rem;
    }

    label:hover {
        color: white;
    }

    input[type="radio"] {
        display: none;
    }

    input[type="radio"]:checked + label {
        color: white;
        background-color: blue;
    }

    article {
        display: flex;
        place-content: center;
        place-items: center;

        width: 30%;
        height: 3rem;

        border-radius: 0.5rem;
        background-color: black;
    }

    input[type="submit"] {
        cursor: pointer;
        padding: 0;

        width: 80%;
        height: 4rem;

        color: #fff;
        font-weight: 600;
        font-size: 1.25rem;
        text-align: center;

        border: none;
        border-radius: 1rem;
        background-color: blue;
        box-shadow: 0px 0.125rem aqua;
    }
</style>
