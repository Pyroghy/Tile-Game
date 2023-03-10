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
    <input type="submit" value="TIMED" />
    <input type="submit" value="PATTERN" />
    <input type="submit" value="MULTIPLAYER" />
    <input type="submit" value="LOGIN" />
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
