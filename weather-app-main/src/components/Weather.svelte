<script>
    import DForecast from "./DForecast.svelte";
    import HForecast from "./HForecast.svelte";
    import Stats from "./Stats.svelte";
    import Today from "./Today.svelte";
</script>

<div class="weather">
    <Today />
    <Stats />
    <DForecast />
    <HForecast />
</div>

<style>
    .weather {
        width: 80%;
        display: grid;
        grid-template-columns: 70% 30%;
        grid-template-rows: 4fr 2fr 3fr;
        row-gap: 1.5rem;
        column-gap: 1rem;
        margin: 0 auto;
        max-height: 100vh;
    }

    @media screen and (max-width: 600px) {
        .weather {
            width: 90%;
            display: flex;
            flex-direction: column;
        }
    }
</style>
