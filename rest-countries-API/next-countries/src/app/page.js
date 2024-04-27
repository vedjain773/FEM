import styles from "./page.module.css";
import Nav from "./ui/nav";
import Search from "./ui/search";
import Filter from "./ui/filter";
import Main from "./ui/main";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className={styles.belownav}>
        <Search />
        <Filter />
      </div>
      <Main />
    </div>
  );
}
