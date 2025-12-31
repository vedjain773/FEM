<script>
    import { data } from "../shared";
    import { nameCountry } from "../shared";

    let name = $state("Berlin");
    let country = $state("Germany");

    let coords = {
        latitude: 0,
        longitude: 0,
    };

    async function getWeather() {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_max&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature`;
        try {
            const response = await fetch(url);
            console.log("Triggered");
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            data.set(result);

            console.log($data);
        } catch (error) {
            console.error(error.message);
        }
    }

    async function getCoords() {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1&language=en&format=json`;
        try {
            const response = await fetch(url);
            console.log("Triggered");
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            // console.log(result);
            coords.latitude = result.results[0].latitude;
            coords.longitude = result.results[0].longitude;

            name = result.results[0].name;
            country = result.results[0].country;

            let obj = {
                name: name,
                country: country,
            };

            nameCountry.set(obj);

            console.log(coords.latitude, coords.longitude);
            getWeather();
        } catch (error) {
            console.error(error.message);
        }
    }
</script>

<div class="hero">
    <h1>How's the sky looking today?</h1>
    <section>
        <div class="cont">
            <img src="/images/icon-search.svg" alt="search" />
            <input
                type="text"
                placeholder="Search for a place"
                bind:value={name}
            />
        </div>
        <button onclick={getCoords}>Search</button>
    </section>
</div>

<style>
    .hero {
        width: 100%;
        margin: 3.25rem auto;
    }

    h1 {
        color: var(--neutral-0);
        font-family: var(--bg);
        font-size: 3.25rem;
        text-align: center;
    }

    section {
        display: flex;
        justify-content: space-between;
        width: 50%;
        gap: 1rem;
        margin: 3.75rem auto;
    }

    .cont {
        display: flex;
        align-items: center;
        background-color: var(--neutral-800);
        padding: 0.5em 1em;
        gap: 1em;
        border-radius: 10px;
        flex: 1;
        max-width: 100%;
        overflow-x: hidden;
    }

    input,
    button {
        border: none;
        font-family: var(--dm);
        color: var(--neutral-0);
        font-size: 1.5rem;
    }

    input {
        outline: none;
        background-color: transparent;
    }

    button {
        background-color: var(--blue-500);
        font-weight: 600;
        padding: 0.5em 1em;
        border-radius: 10px;
    }

    @media screen and (max-width: 600px) {
        h1 {
            text-align: center;
        }

        section {
            width: 90%;
            flex-direction: column;
        }
    }
</style>
