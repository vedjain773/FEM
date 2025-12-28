<div class="stats">
    <div class="stat">
        <p class="header">Feels like</p>
        <p class="data">18°</p>
    </div>
    <div class="stat">
        <p class="header">Humidity</p>
        <p class="data">46%</p>
    </div>
    <div class="stat">
        <p class="header">Wind</p>
        <p class="data">14 km/h</p>
    </div>
    <div class="stat">
        <p class="header">Precipitation</p>
        <p class="data">0 mm</p>
    </div>
</div>

<style>
    .stats {
        grid-row: 2 / 3;
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
    }

    .header {
        font-size: 1rem;
        color: var(--neutral-200);
    }

    .data {
        font-size: 2rem;
    }
</style>
