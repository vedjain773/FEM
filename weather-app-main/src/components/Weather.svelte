<script>
    import DForecast from "./DForecast.svelte";
    import HForecast from "./HForecast.svelte";
    import Stats from "./Stats.svelte";
    import Today from "./Today.svelte";
</script>

<div class="weather">
    <div class="left">
        <Today />
        <Stats />
        <DForecast />
    </div>
    <HForecast />
</div>

<style>
    .weather {
        width: 80%;
        display: grid;
        grid-template-columns: 70% 30%;
        row-gap: 1.5rem;
        column-gap: 1rem;
        margin: 0 auto;
        max-height: 100vh;
    }

    .left {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: space-around;
    }

    @media screen and (max-width: 600px) {
        .weather {
            width: 90%;
            display: flex;
            flex-direction: column;
        }
    }
</style>
