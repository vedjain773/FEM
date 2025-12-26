<div class="hero">
    <h1>How's the sky looking today?</h1>
    <section>
        <div class="cont">
            <img src="/images/icon-search.svg" alt="search" />
            <input type="text" placeholder="Search for a place" />
        </div>
        <button>Search</button>
    </section>
</div>

<style>
    .hero {
        width: fit-content;
        margin: 3.25rem auto;
    }

    h1 {
        color: var(--neutral-0);
        font-family: var(--bg);
        font-size: 3.25rem;
    }

    section {
        display: flex;
        justify-content: space-between;
        width: 90%;
        gap: 1rem;
        margin: 3.75rem auto;
    }

    .cont {
        display: flex;
        align-items: center;
        background-color: var(--neutral-700);
        padding: 0.5em 1em;
        gap: 1em;
        border-radius: 10px;
        flex: 1;
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
</style>
