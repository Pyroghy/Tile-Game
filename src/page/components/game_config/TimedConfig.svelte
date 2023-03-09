<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function handleStart() {
        const length: any = document.getElementById("length");

        alert(length.value);
    }

    function handleBack() {
        dispatch("back");
    }
</script>

<section>
    <div>
        <div>
            <label for="dog-names">Match Length:</label>
            <select name="dog-names" id="length">
                <option value="rigatoni">Rigatoni</option>
                <option value="dave">Dave</option>
                <option value="pumpernickel">Pumpernickel</option>
                <option value="reeses">Reeses</option>
            </select>
        </div>

        <div>
            <label for="dog-names">Grid Size:</label>
            <select name="dog-names" id="size">
                <option value="rigatoni">Rigatoni</option>
                <option value="dave">Dave</option>
                <option value="pumpernickel">Pumpernickel</option>
                <option value="reeses">Reeses</option>
            </select>
        </div>
    </div>

    <button on:click={handleStart}>START!</button>
    <button on:click={handleBack}>BACK</button>
</section>

<style>
    section {
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

    button {
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
