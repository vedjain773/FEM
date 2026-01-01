<script>
    import Daydrop from "./Daydrop.svelte";
    import { data } from "../shared";
    import { dayOfTheWeek } from "../shared";

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    $: dateStr = $data.daily.time[0];
    $: cDate = new Date(dateStr);
    $: cDay = cDate.getDay();

    $: weekInd =
        $dayOfTheWeek - cDay > 0
            ? $dayOfTheWeek - cDay
            : $dayOfTheWeek - cDay + 7;

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
        80: "/images/icon-rain.webp",
        81: "/images/icon-rain.webp",
        82: "/images/icon-rain.webp",
        85: "/images/icon-snow.webp",
        86: "/images/icon-snow.webp",
        95: "/images/icon-storm.webp",
        96: "/images/icon-storm.webp",
        99: "/images/icon-storm.webp",
    };

    $: wcode = $data.hourly.weather_code.slice(weekInd * 7, weekInd * 7 + 24);

    const hours = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23,
    ];

    $: temp = $data.hourly.temperature_2m.slice(weekInd * 7, weekInd * 7 + 24);
</script>

<div class="cont">
    <div class="header">
        <div class="desc">Hourly Forecast</div>
        <Daydrop />
    </div>
    <div class="opt-cont">
        {#each hours as hour}
            <div class="options">
                <section>
                    <img src={url[wcode[hour]]} alt={url[wcode[hour]]} />
                    <div class="time">
                        {hour > 12 ? hour - 12 : hour}
                        {hour >= 12 ? "PM" : "AM"}
                    </div>
                </section>
                <div>{temp[hour]}°</div>
            </div>
        {/each}
    </div>
</div>

<style>
    .cont {
        background-color: var(--neutral-800);
        border-radius: 1rem;
        grid-row: 1 / -1;
        grid-column: 2 / 3;
        display: flex;
        flex-direction: column;
        max-height: 100vh;
    }

    .opt-cont {
        padding: 1em;
        overflow-y: scroll;
    }

    .header {
        padding: 1em 1em 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .desc {
        color: var(--neutral-0);
        font-family: var(--dm);
        font-size: 1rem;
        font-weight: 600;
    }

    .options {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: var(--dm);
        color: var(--neutral-0);
        background-color: var(--neutral-700);
        padding: 0.5em 1.25em 0.5em 0;
        margin-bottom: 1rem;
        border-radius: 10px;
    }

    .options section {
        display: flex;
        align-items: center;
    }

    .time {
        font-size: 1.25rem;
        font-weight: 500;
    }

    .options section img {
        width: 3em;
        height: auto;
    }

    @media screen and (max-width: 600px) {
        .cont {
            min-height: 100vh;
        }

        .time {
            font-size: 1.5rem;
        }

        .desc {
            font-size: 1.25rem;
        }
    }
</style>
