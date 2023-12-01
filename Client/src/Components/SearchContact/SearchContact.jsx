import Contact from "../Contact/Contact";
import contacts from "../../Views/Home/listContact.json";
import styles from "./SearchContact.module.css";
import { useState } from "react";

const SearchContact = () => {
  const [contactFound, setContactFound] = useState([]);

  const onChange = (event) => {
    const { value } = event.target;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    setContactFound(value.trim() === "" ? [] : filteredContacts);
  };

  return (
    <main className={styles.searchBar}>
      <section className={styles.inputSearch}>
        <input
          type="text"
          placeholder="Ingrese el nombre a buscar..."
          name="contact"
          onChange={onChange}
        />
      </section>

      {contactFound.length > 0 ? (
        <div className={styles.contactsSearch}>
          {contactFound.map((contact, index) => (
            <Contact
              key={index}
              name={contact.name}
              phone={contact.phone}
              location={contact.location}
              email={contact.email}
              deleted={contact.deleted}
            />
          ))}
        </div>
      ) : (
        <>
          <p className={styles.elP}>No se encontraron coincidencias.</p>
        </>
      )}
    </main>
  );
};

export default SearchContact;
