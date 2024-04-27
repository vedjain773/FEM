import styles from "../page.module.css";
const placeholder = "Search for a Country";

export default function Search() {
    return (
        <div className={styles.search} id="search">
            <input
                type="text"
                placeholder={placeholder}
                className={styles.inp_search}
            >
            </input>
        </div>
    );
}