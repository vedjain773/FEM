<script>
    let isClicked = $state(false);
    let unitConfig = $state({ temp: true, wind: true, prec: true });
    let isMetric = $derived(
        unitConfig.temp && unitConfig.wind && unitConfig.prec,
    );

    function toggle() {
        isClicked = !isClicked;
    }

    function change(num, bl) {
        if (num == 1) {
            unitConfig.temp = bl;
        } else if (num == 2) {
            unitConfig.wind = bl;
        } else {
            unitConfig.prec = bl;
        }
    }

    function switchSys(bl) {
        unitConfig.temp = bl;
        unitConfig.wind = bl;
        unitConfig.prec = bl;
    }
</script>

<div class="parent">
    <button onclick={toggle}>
        <img src="/images/icon-units.svg" alt="" />
        <div>Units</div>
        <img src="/images/icon-dropdown.svg" alt="dropdown" />
    </button>

    {#if isClicked}
        <div class="drop">
            <button
                class="title"
                onclick={isMetric
                    ? () => switchSys(false)
                    : () => switchSys(true)}
            >
                Switch to {isMetric ? "Imperial" : "Metric"}
            </button>

            <div class="header">Temperature</div>
            <button
                class="options"
                class:active={unitConfig.temp}
                onclick={() => change(1, true)}
            >
                <div>Celcius (C)</div>
                <img src="/images/icon-checkmark.svg" alt="selected" />
            </button>
            <button
                class="options border"
                class:active={!unitConfig.temp}
                onclick={() => change(1, false)}
            >
                <div>Fahrenheit (F)</div>
                <img src="/images/icon-checkmark.svg" alt="selected" />
            </button>

            <div class="header">Wind Speed</div>
            <button
                class="options"
                class:active={unitConfig.wind}
                onclick={() => change(2, true)}
            >
                <div>kmph</div>
                <img src="/images/icon-checkmark.svg" alt="selected" />
            </button>
            <button
                class="options border"
                class:active={!unitConfig.wind}
                onclick={() => change(2, false)}
            >
                <div>mph</div>
                <img src="/images/icon-checkmark.svg" alt="selected" />
            </button>

            <div class="header">Precipitation</div>
            <button
                class="options"
                class:active={unitConfig.prec}
                onclick={() => change(3, true)}
            >
                <div>Millimetre (mm)</div>
                <img src="/images/icon-checkmark.svg" alt="selected" />
            </button>
            <button
                class="options"
                class:active={!unitConfig.prec}
                onclick={() => change(3, false)}
            >
                <div>Inches (in)</div>
                <img src="/images/icon-checkmark.svg" alt="selected" />
            </button>
        </div>
    {/if}
</div>

<style>
    .title {
        padding: 0 0 0.5rem;
        cursor: pointer;
        width: 100%;
    }

    .parent {
        position: relative;
    }

    button {
        display: flex;
        gap: 0.5rem;
        border: none;
        padding: 0.5em 0.75em;
        font-family: var(--dm);
        background-color: var(--neutral-800);
        color: var(--neutral-0);
        font-size: 1rem;
        border-radius: 10px;
    }

    .drop {
        min-width: 13rem;
        margin-top: 0.25rem;
        position: absolute;
        right: 0;
        background-color: var(--neutral-800);
        color: var(--neutral-0);
        font-family: var(--dm);
        border-radius: 10px;
        padding: 0.75em;
    }

    .header {
        color: var(--neutral-300);
        font-size: 0.85rem;
        padding: 0.35em 0;
    }

    .options {
        width: 100%;
        cursor: pointer;
        text-wrap-mode: nowrap;
        display: flex;
        justify-content: space-between;
        padding: 0.3em 0.5em;

        img {
            visibility: hidden;
        }
    }

    .border {
        border-bottom: 1px solid var(--neutral-700);
        padding-bottom: 0.4em;
    }

    .active {
        background-color: var(--neutral-700);
        border-radius: 10px;

        img {
            visibility: visible;
        }
    }
</style>
