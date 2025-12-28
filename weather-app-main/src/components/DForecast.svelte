<script>
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
</script>

<div class="dforecast">
    <p class="title">Daily Forecast</p>
    <div class="cont">
        {#each days as day}
            <div class="card">
                <p class="day">{day}</p>
                <img src="/images/icon-sunny.webp" alt="sunny" />
                <section>
                    <div class="min">20°</div>
                    <div class="max">14°</div>
                </section>
            </div>
        {/each}
    </div>
</div>

<style>
    .dforecast {
        grid-row: 3 / -1;
        grid-column: 1 / 2;
        height: 100%;
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
        flex: 1;
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
    }
</style>
