import { useEffect, useState } from "react";
import Contact from "../../Components/Contact/Contact";
import styles from "./Home.module.css";

const Home = () => {
  const [listContacts, setListContact] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://backend-contacts-qamh.onrender.com/contacts"
        );
        const data = await response.json();
        setListContact(data);
      } catch (error) {
        console.error(`Hubo un error al obtener los datos: ${error.message}`);
        throw error;
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.homeContainer}>
      {listContacts.map(({ contactId, name, phone, location, email }) => {
        return (
          <Contact
            name={name}
            phone={phone}
            location={location}
            email={email}
            key={name}
            contactId={contactId}
          />
        );
      })}
    </div>
  );
};

export default Home;
