import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import CardGrp from "@/components/CardGrp/CardGrp";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <CardGrp />
    </div>
  );
}
