<script>
    import HForecast from "./HForecast.svelte";
    import Today from "./Today.svelte";
</script>

<div class="weather">
    <Today />
    <HForecast />
</div>

<style>
    .weather {
        width: 80%;
        display: grid;
        grid-template-columns: 65% 35%;
        grid-template-rows: 1fr 1fr 1fr;
        column-gap: 1rem;
        margin: 0 auto;
        max-height: 100vh;
    }
</style>
