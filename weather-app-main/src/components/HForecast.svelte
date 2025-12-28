<script>
    import Daydrop from "./Daydrop.svelte";
    const hours = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
    ];
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
                    <img src="/images/icon-sunny.webp" alt="sunny" />
                    <div class="time">{hour}</div>
                </section>
                <div>20°</div>
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
        overflow-y: hidden;
    }

    .opt-cont {
        padding: 1em;
        height: 100%;
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
        font-size: 1.25rem;
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
</style>
