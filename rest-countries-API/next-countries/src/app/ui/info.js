import styles from "@/app/page.module.css";
import countries from "../../../public/data.json";

export default function Info({code}) {
    var tar_obj, i, j;

    for (i = 0; i < countries.length; i++) {
        if (countries[i].alpha3Code == code) {
            tar_obj = countries[i];
        }
    }

    function languages(obj) {
        var languages_str = "";
        for (j = 0; j < obj.languages.length; j++) {
            languages_str = languages_str + " " + obj.languages[j].name;
        }
        return languages_str;
    }

    return (
        <div className={styles.infocon}>
            <img src={tar_obj.flags.png}></img>
            <div className={styles.actinfo}>
                <p className={styles.boldname}>{tar_obj.name}</p>
                <div className={styles.group}>
                    <p>Native Name: {tar_obj.nativeName}</p>
                    <p>Top level domain: {tar_obj.topLevelDomain[0]}</p>
                    <p>Population: {tar_obj.population}</p>
                    <p>Currencies: {tar_obj.currencies[0].name || "-"}</p>
                    <p>Region: {tar_obj.region}</p>
                    <p>Languages: {languages(tar_obj)}</p>
                    <p>Subregion: {tar_obj.subregion}</p>
                    <p className={styles.capital}>Capital: {tar_obj.capital}</p>
                </div>
            </div>
        </div>
    );
}