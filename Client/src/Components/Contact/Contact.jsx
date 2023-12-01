//  ! fUNCIONA:
import styles from "./Contact.module.css";
import emailIcon from "../../assets/email.png";
import locationIcon from "../../assets/location.png";
import phoneIcon from "../../assets/phone.png";
import emailDeletedIcon from "../../assets/emailDeleted.png";
import locationDeletedIcon from "../../assets/locationDeleted.png";
import phoneDeletedIcon from "../../assets/phoneDeleted.png";
import restoreIcon from "../../assets/restore.png";
import trash from "../../assets/trash.png";
import sendMail from "../../assets/send.png";
import edit from "../../assets/edit.png";
import { Link } from "react-router-dom";

const Contact = ({ name, phone, location, email, deleted }) => {
  return (
    <>
      <main
        className={
          deleted ? styles.contactContainerDeleted : styles.contactContainer
        }
      >
        <section className={deleted ? styles.titleDeleted : styles.title}>
          <div className={styles.verticalLine}></div>
          <p>{name ? name : "NOMBRE"}</p>
        </section>

        <section className={styles.infoSection}>
          <div className={styles.divInfo}>
            <img src={deleted ? phoneDeletedIcon : phoneIcon} alt="phoneIcon" />
            <p>{phone}</p>
          </div>

          <div className={styles.divInfo}>
            <img
              src={deleted ? locationDeletedIcon : locationIcon}
              alt="location"
            />
            <p>{location}</p>
          </div>

          <div className={styles.divInfo}>
            <img src={deleted ? emailDeletedIcon : emailIcon} alt="email" />
            <p>{email}</p>
          </div>
        </section>

        <section className={styles.buttonsContainer}>
          {deleted ? (
            <>
              <button className={styles.deletedButton}>
                <img src={restoreIcon} alt="restoreIcon" />
                Restaurar
              </button>
            </>
          ) : (
            <>
              <button>
                <img src={trash} alt="trash" />
                Eliminar
              </button>

              <button>
                <img src={sendMail} alt="sendMail" />
                Enviar Mail
              </button>

              <Link to={`/detail/${name}`}>
                <button>
                  <img src={edit} alt="edit" />
                  Editar
                </button>
              </Link>
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default Contact;
