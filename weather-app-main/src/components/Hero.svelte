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
