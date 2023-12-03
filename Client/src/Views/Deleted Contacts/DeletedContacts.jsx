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

  // const restoreAllContacts = async () => {
  //   try {
  //     Swal.fire({
  //       icon: "success",
  //       title: "Contactos restaurados",
  //       text: "Todos los contactos eliminados han sido restaurados correctamente.",
  //     }).then(() => {
  //       window.location.reload();
  //     });
  //   } catch (error) {
  //     console.error(`Error al restaurar contactos: ${error.message}`);
  //     // Muestra un mensaje de error con SweetAlert2
  //     Swal.fire({
  //       icon: "error",
  //       title: "Error al restaurar contactos",
  //       text: "Hubo un problema al intentar restaurar los contactos eliminados.",
  //     });
  //   }
  // };

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

// import { useEffect, useState } from "react";
// import Contact from "../../Components/Contact/Contact";
// import styles from "../Home/Home.module.css";

// const DeletedContacts = () => {
//   const [listContacts, setListContact] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:3001/contacts-deleted");

//         const data = await response.json();
//         setListContact(data);
//       } catch (error) {
//         console.error(`Hubo un error al obtener los datos: ${error.message}`);
//         throw error;
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className={styles.homeContainer}>
//       {listContacts.map(
//         ({ contactId, name, phone, location, email, deleted }) => {
//           return (
//             <Contact
//               key={contactId}
//               contactId={contactId}
//               name={name}
//               phone={phone}
//               location={location}
//               email={email}
//               deleted={deleted}
//             />
//           );
//         }
//       )}
//     </div>
//   );
// };

// export default DeletedContacts;
