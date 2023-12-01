import Contact from "../../Components/Contact/Contact";
import styles from "../Home/Home.module.css";
import listContacts from "../Home/listContact.json";

const DeletedContacts = () => {
  const deleted = true;
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
            deleted={deleted}
          />
        );
      })}
    </div>
  );
};

export default DeletedContacts;
