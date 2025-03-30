import Card from "./Card";
import ShortIn from "./ShortIn";

export default function Main() {

    let header1 = "Brand Recognition";
    let desc1 = `
                Boost your brand recognition witheach click.
                Generic links dont mean a thing.
                Branded links help instill confidence in your confidence.
                `;

    let header2 = "Detailed Records";
    let desc2 = `
                Gain insights into who is clicking your links.
                Knowing when and where people engage with your content 
                helps inform better decisions.
                `;

    let header3 = "Fully Customisable";
    let desc3 = `
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement. 
                `;

    return (
        <main className="bg-[#eff1f7] font-poppins-med">
            <ShortIn />
            <p className="mb-3 text-center text-4xl text-(--very-dark-blue) font-poppins-bold">Advanced Statistics</p>
            <p className="text-center text-(--grayish-violet)">Track how your links are performing across the web with <br /> our advanced statistics dashboard.</p>

            <div className="flex w-[90%] justify-between mx-auto mt-20 pb-50">
                <Card 
                    key={0}
                    header={header1}
                    desc={desc1}
                    src={"./images/icon-brand-recognition.svg"}
                    down={0}
                />

                <Card 
                    key={1}
                    header={header2}
                    desc={desc2}
                    src={"./images/icon-detailed-records.svg"}
                    down={40}
                />

                <Card 
                    key={2}
                    header={header3}
                    desc={desc3}
                    src={"./images/icon-fully-customizable.svg"}
                    down={80}
                />
            </div>
        </main>
    );
}