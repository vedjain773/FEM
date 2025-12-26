<script>
    import Today from "./Today.svelte";
</script>

<div class="weather">
    <Today />
</div>

<style>
    .weather {
        width: 80%;
        display: grid;
        grid-template-columns: 65% 35%;
        column-gap: 1rem;
        margin: 0 auto;
    }
</style>
