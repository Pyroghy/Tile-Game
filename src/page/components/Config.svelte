<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Button from "./Button.svelte";

    const dispatch = createEventDispatcher();

    function getSubmitedValue(name: string) {
        const elements: any = document.getElementsByName(name);

        for (let i = 0; i < elements.length; i++) {
            if (elements[i].checked) {
                return elements[i].value;
            }
        }
    }

    function handleSubmit() {
        dispatch("start", {
            seconds: getSubmitedValue("seconds"),
            tiles: getSubmitedValue("tiles"),
        });
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div>
        <h3>Select Game Time</h3>

        <section>
            <Button id="sec15" name="seconds" value="15" />

            <Button id="sec30" name="seconds" value="30" checked />

            <Button id="sec60" name="seconds" value="60" />
        </section>
    </div>

    <div style="margin-top: -1rem;">
        <h3>Select Grid Size</h3>

        <section>
            <Button id="cnt9" name="tiles" value="9" />

            <Button id="cnt16" name="tiles" value="16" checked />

            <Button id="cnt25" name="tiles" value="25" />
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

        width: 50%;
    }

    div {
        width: 100%;
    }

    h3 {
        padding-left: 1rem;
        float: left;
    }

    section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    input[type="submit"] {
        cursor: pointer;
        padding: 0;

        width: 100%;
        height: 3rem;

        color: #fff;
        font-weight: 600;
        font-size: 1.25rem;
        text-align: center;

        border: none;
        border-radius: 0.5rem;
        background-color: blue;
        box-shadow: 0px 0.125rem aqua;
    }
</style>
