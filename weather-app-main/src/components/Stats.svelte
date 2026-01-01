<script>
    import { data } from "../shared";

    $: humidity = $data.current.relative_humidity_2m;
    $: app_temp = $data.current.apparent_temperature;
    $: wind_speed = $data.current.wind_speed_10m;
    $: precipitation = $data.daily.precipitation_probability_max[0];
</script>

<div class="stats">
    <div class="stat">
        <p class="header">Feels like</p>
        <p class="data">{app_temp}°</p>
    </div>
    <div class="stat">
        <p class="header">Humidity</p>
        <p class="data">{humidity}%</p>
    </div>
    <div class="stat">
        <p class="header">Wind</p>
        <p class="data">{Math.round(wind_speed)} km/h</p>
    </div>
    <div class="stat">
        <p class="header">Precipitation</p>
        <p class="data">{precipitation} mm</p>
    </div>
</div>

<style>
    .stats {
        grid-column: 1 / 2;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }

    .stat {
        font-family: var(--dm);
        color: var(--neutral-0);
        background-color: var(--neutral-800);
        width: 25%;
        padding: 1.25em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 1rem;
        gap: 1.5rem;
    }

    .header {
        font-size: 1rem;
        color: var(--neutral-200);
    }

    .data {
        font-size: 2rem;
    }

    @media screen and (max-width: 600px) {
        .stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
        }

        .stat {
            width: 100%;
            gap: 1.75rem;
        }

        .header {
            font-size: 1.25rem;
        }
    }
</style>
