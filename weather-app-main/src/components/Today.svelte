<script>
    import { data } from "../shared";
    import { nameCountry } from "../shared";

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

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

    $: wcode = $data.daily.weather_code;

    $: temp = $data.current.temperature_2m;
    $: dateStr = $data.daily.time[0];
    $: cDate = new Date(dateStr);
</script>

<div class="today">
    <section class="left">
        <p class="place">{$nameCountry.name}, {$nameCountry.country}</p>
        <p class="date">
            {days[cDate.getDay()]}, {months[cDate.getMonth()]}
            {cDate.getDate()}
            {cDate.getFullYear()}
        </p>
    </section>
    <section class="right">
        <img src={url[wcode[0]]} alt={url[wcode[0]]} />
        <div class="temp">{temp}°</div>
    </section>
</div>

<style>
    .today {
        width: 100%;
        aspect-ratio: 2.5;
        background-image: url("/images/bg-today-large.svg");
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.25em;
        border-radius: 2rem;
    }

    .left {
        font-family: var(--dm);
        color: var(--neutral-0);
    }

    .place {
        font-size: 1.75rem;
        font-weight: 700;
    }

    .date {
        font-size: 1rem;
        font-weight: 500;
    }

    .right {
        display: flex;
        font-family: var(--dmi);
        color: var(--neutral-0);
        align-items: center;
        font-size: 4.5rem;
        font-weight: 800;
    }

    img {
        width: 1.25em;
        height: auto;
    }

    @media screen and (max-width: 600px) {
        .today {
            flex-direction: column;
            aspect-ratio: 1;
            justify-content: space-evenly;
            border-radius: 2rem;
            background-image: url("/images/bg-today-small.svg");
        }

        .place {
            font-size: 2.25rem;
        }

        .date {
            font-size: 1.5rem;
        }

        .right {
            font-size: 5rem;
        }
    }
</style>
