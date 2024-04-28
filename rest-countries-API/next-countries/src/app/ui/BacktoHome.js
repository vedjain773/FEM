import styles from "../page.module.css";
import Link from "next/link";

export default function BacktoHome() {
    return (
        <div className={styles.backcont}>
            <Link href="/">
                <button className={styles.backhome}>Back to Home</button>
            </Link>
        </div>
    );
}