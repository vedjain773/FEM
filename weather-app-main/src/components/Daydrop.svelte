<script>
    let isClicked = $state(false);
    let activeDay = $state("Monday");

    function toggle() {
        isClicked = !isClicked;
    }

    function change(num) {
        if (num == 1) {
            activeDay = "Monday";
        } else if (num == 2) {
            activeDay = "Tuesday";
        } else if (num == 3) {
            activeDay = "Wednesday";
        } else if (num == 4) {
            activeDay = "Thursday";
        } else if (num == 5) {
            activeDay = "Friday";
        } else if (num == 6) {
            activeDay = "Saturday";
        } else if (num == 7) {
            activeDay = "Sunday";
        }
    }
</script>

<div class="parent">
    <button onclick={toggle} class="mainBtn">
        <div>{activeDay}</div>
        <img src="/images/icon-dropdown.svg" alt="dropdown" />
    </button>

    {#if isClicked}
        <div class="drop">
            <button
                class="options"
                class:active={activeDay == "Monday"}
                onclick={() => change(1)}
            >
                <div>Monday</div>
                <img src="/images/icon-checkmark.svg" alt="selected" />
            </button>

            <button
                class="options"
                class:active={activeDay == "Tuesday"}
                onclick={() => change(2)}
            >
                <div>Tuesday</div>
                <img src="/images/icon-checkmark.svg" alt="selected" />
            </button>

            <button
                class="options"
                class:active={activeDay == "Wednesday"}
                onclick={() => change(3)}
            >
                <div>Wednesday</div>
                <img src="/images/icon-checkmark.svg" alt="selected" />
            </button>

            <button
                class="options"
                class:active={activeDay == "Thursday"}
                onclick={() => change(4)}
            >
                <div>Thursday</div>
                <img src="/images/icon-checkmark.svg" alt="selected" />
            </button>

            <button
                class="options"
                class:active={activeDay == "Friday"}
                onclick={() => change(5)}
            >
                <div>Friday</div>
                <img src="/images/icon-checkmark.svg" alt="selected" />
            </button>

            <button
                class="options"
                class:active={activeDay == "Saturday"}
                onclick={() => change(6)}
            >
                <div>Saturday</div>
                <img src="/images/icon-checkmark.svg" alt="selected" />
            </button>

            <button
                class="options"
                class:active={activeDay == "Sunday"}
                onclick={() => change(7)}
            >
                <div>Sunday</div>
                <img src="/images/icon-checkmark.svg" alt="selected" />
            </button>
        </div>
    {/if}
</div>

<style>
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

    .mainBtn {
        background-color: var(--neutral-600);
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

    .active {
        background-color: var(--neutral-700);
        border-radius: 10px;

        img {
            visibility: visible;
        }
    }
</style>
