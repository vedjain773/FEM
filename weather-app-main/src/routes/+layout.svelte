<script>
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style global>
    @font-face {
        src: url("/fonts/DM_Sans/DMVar.ttf");
        font-family: "DM Sans";
    }

    @font-face {
        src: url("/fonts/DM_Sans/DMItallic.ttf");
        font-family: "DM Sans Itallic";
    }

    @font-face {
        src: url("/fonts/Bricolage_Grotesque/BGVar.ttf");
        font-family: "Bricolage Grotesque";
    }

    :root {
        --neutral-900: hsl(243, 96%, 9%);
        --neutral-800: hsl(243, 27%, 20%);
        --neutral-700: hsl(243, 23%, 24%);
        --neutral-600: hsl(243, 23%, 30%);
        --neutral-300: hsl(240, 6%, 70%);
        --neutral-200: hsl(250, 6%, 84%);
        --neutral-0: hsl(0, 0%, 100%);

        --orange-500: hsl(28, 100%, 52%);

        --blue-500: hsl(233, 67%, 56%);
        --blue-700: hsl(248, 70%, 36%);

        --dm: "DM Sans";
        --dmi: "DM Sans Itallic";
        --bg: "Bricolage Grotesque";
    }
</style>
