import { useEffect, useState } from "react";
import Contact from "../../Components/Contact/Contact";
import styles from "../Home/Home.module.css";

const DeletedContacts = () => {
  const [listContacts, setListContact] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/contacts-deleted");

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
      {listContacts.map(
        ({ contactId, name, phone, location, email, deleted }) => {
          return (
            <Contact
              key={contactId}
              contactId={contactId}
              name={name}
              phone={phone}
              location={location}
              email={email}
              deleted={deleted}
            />
          );
        }
      )}
    </div>
  );
};

export default DeletedContacts;
