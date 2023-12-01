import Contact from "../../Components/Contact/Contact";
import styles from "./Home.module.css";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {array.map((element) => {
        return <Contact key={element} />;
      })}
    </div>
  );
};

export default Home;
