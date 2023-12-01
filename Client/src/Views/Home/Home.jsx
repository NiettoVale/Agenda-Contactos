import Contact from "../../Components/Contact/Contact";
import styles from "./Home.module.css";
import listContacts from "./listContact.json";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {listContacts.map(({ name, phone, location, email }) => {
        return (
          <Contact
            name={name}
            phone={phone}
            location={location}
            email={email}
            key={name}
          />
        );
      })}
    </div>
  );
};

export default Home;
