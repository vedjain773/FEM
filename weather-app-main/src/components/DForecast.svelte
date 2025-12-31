<script>
    import { data } from "../shared";
    import Daydrop from "./Daydrop.svelte";
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    $: dateStr = $data.daily.time[0];
    $: cDate = new Date(dateStr);
    $: offset = 7 - cDate.getDay();

    let url = {
        0: "/images/icon-sunny.webp",
        1: "/images/icon-sunny.webp",
        2: "/images/icon-partly-cloudy.webp",
        3: "/images/icon-overcast.webp",
        45: "/images/icon-fog.webp",
        48: "/images/icon-fog.webp",
        51: "/images/icon-drizzle.webp",
        53: "/images/icon-drizzle.webp",
        55: "/images/icon-drizzle.webp",
        61: "/images/icon-rain.webp",
        63: "/images/icon-rain.webp",
        65: "/images/icon-rain.webp",
        71: "/images/icon-snow.webp",
        73: "/images/icon-snow.webp",
        75: "/images/icon-snow.webp",
        77: "/images/icon-snow.webp",
        80: "/images/icon-rain.webp",
        81: "/images/icon-rain.webp",
        82: "/images/icon-rain.webp",
        85: "/images/icon-snow.webp",
        86: "/images/icon-snow.webp",
        95: "/images/icon-storm.webp",
        96: "/images/icon-storm.webp",
        99: "/images/icon-storm.webp",
    };

    $: wcode = $data.daily.weather_code;

    console.log($data.daily.weather_code);
    $: temp_min = $data.daily.temperature_2m_min;
    $: temp_max = $data.daily.temperature_2m_max;
</script>

<div class="dforecast">
    <p class="title">Daily Forecast</p>
    <div class="cont">
        {#each days as day, i}
            <div class="card">
                <p class="day">{days[(i + offset) % 7]}</p>
                <img
                    src={url[wcode[(i + offset) % 7]]}
                    alt={url[wcode[(i + offset) % 7]]}
                />
                <section>
                    <div class="max">{temp_max[i] || 0}°</div>
                    <div class="min">{temp_min[i] || 0}°</div>
                </section>
            </div>
        {/each}
    </div>
</div>

<style>
    .dforecast {
        grid-column: 1 / 2;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-top: 1rem;
    }

    .title {
        font-size: 1.125rem;
        color: var(--neutral-0);
        font-family: var(--dm);
        font-weight: 600;
    }

    .cont {
        display: flex;
        gap: 1rem;
    }

    .card {
        font-family: var(--dm);
        color: var(--neutral-0);
        background-color: var(--neutral-800);
        border-radius: 10px;
        width: calc(100% / 7);
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card img {
        width: 100%;
    }

    .day {
        text-align: center;
    }

    section {
        display: flex;
        justify-content: space-between;
        font-size: 0.85rem;
    }

    .min {
        color: var(--neutral-200);
        font-weight: 500;
    }

    @media screen and (max-width: 600px) {
        .title {
            font-size: 1.25rem;
        }

        .cont {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
        }

        .card {
            width: 100%;
            font-size: 1.15rem;
        }
    }
</style>
