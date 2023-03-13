<script lang="ts">
    export let id: string;
    export let name: string;
    export let value: number | string;
    export let checked = false;
</script>

<article>
    <input type="radio" {id} {name} {value} {checked} />
    <label for={id}>{value} {name}</label>
</article>

<style>
    article {
        display: flex;
        place-content: center;
        place-items: center;

        width: 32%;
        height: 3rem;

        border-radius: 0.5rem;
        background-color: black;
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
</style>
