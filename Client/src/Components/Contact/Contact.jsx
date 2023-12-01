import styles from "./Contact.module.css";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";
import trash from "../../assets/trash.png";
import sendMail from "../../assets/send.png";
import edit from "../../assets/edit.png";

const Contact = () => {
  return (
    <>
      <main className={styles.contactContainer}>
        <section className={styles.title}>
          <div className={styles.verticalLine}></div>
          <p>NOMBRE</p>
        </section>

        <section className={styles.infoSection}>
          <div className={styles.infoLine}>
            <img src={phone} alt="phone" />
          </div>

          <div className={styles.infoLine}>
            <img src={location} alt="location" />
          </div>

          <div className={styles.infoLine}>
            <img src={email} alt="email" />
          </div>
        </section>

        <section className={styles.buttonsContainer}>
          <button>
            <img src={trash} alt="trash" />
            Eliminar
          </button>

          <button>
            <img src={sendMail} alt="sendMail" />
            Enviar Mail
          </button>

          <button>
            <img src={edit} alt="edit" />
            Editar
          </button>
        </section>
      </main>
    </>
  );
};

export default Contact;

// import styles from "./Contact.module.css";
// import email from "../../assets/email.png";
// import location from "../../assets/location.png";
// import phone from "../../assets/phone.png";
// import trash from "../../assets/trash.png";
// import sendMail from "../../assets/send.png";
// import edit from "../../assets/edit.png";

// const Contact = () => {
//   return (
//     <>
//       <main className={styles.contactContainer}>
//         <section className={styles.title}>
//           <div className={styles.verticalLine}></div>
//           <p>NOMBRE</p>
//         </section>

//         <section className={styles.iconsContainer}>
//           <img src={phone} alt="phone" />
//           <img src={location} alt="location" />
//           <img src={email} alt="email" />
//         </section>

//         <section className={styles.buttonsContainer}>
//           <button>
//             <img src={trash} alt="trash" />
//             Eliminar
//           </button>

//           <button>
//             <img src={sendMail} alt="sendMail" />
//             Enviar Mail
//           </button>

//           <button>
//             <img src={edit} alt="edit" />
//             Editar
//           </button>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Contact;
