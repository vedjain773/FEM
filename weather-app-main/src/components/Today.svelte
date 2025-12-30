<script>
    import { data } from "../shared";

    $: temp = $data.current.temperature_2m;
</script>

<div class="today">
    <section class="left">
        <p class="place">Berlin, Germany</p>
        <p class="date">Tuesday, August 5 2025</p>
    </section>
    <section class="right">
        <img src="/images/icon-sunny.webp" alt="weather-icon" />
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
