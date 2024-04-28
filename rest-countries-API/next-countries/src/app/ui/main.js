import styles from "../page.module.css";
import countries from "../../../public/data.json";
import Card from "./card";

export default function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.grid}>
                {countries.map((country) => (
                    <Card 
                    src={country.flags.png}
                    country_name={country.name}
                    pop={country.population}
                    region={country.region}
                    capital={country.capital}
                    code={country.alpha3Code} />
                ))}
            </div>
        </main>
    );
}