<script>
    import HForecast from "./HForecast.svelte";
    import Stats from "./Stats.svelte";
    import Today from "./Today.svelte";
</script>

<div class="weather">
    <Today />
    <HForecast />
    <Stats />
</div>

<style>
    .weather {
        width: 80%;
        display: grid;
        grid-template-columns: 65% 35%;
        grid-template-rows: 4.25fr 1.75fr 4fr;
        column-gap: 1rem;
        margin: 0 auto;
        max-height: 100vh;
    }
</style>
