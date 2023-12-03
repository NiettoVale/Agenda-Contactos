import styles from "./Form.module.css";
import profileIcon from "../../assets/profile.png";
import checkIcon from "../../assets/check.png";
import cancelIcon from "../../assets/cancel.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    // Construir el objeto de configuración para la petición POST
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Puedes agregar otros encabezados según sea necesario
      },
      body: JSON.stringify(data), // Convierte los datos a formato JSON
    };

    try {
      // Realizar la petición POST a la URL especificada usando async/await
      const response = await fetch(
        "https://backend-contacts-qamh.onrender.com/create-contact",
        requestOptions
      );

      if (!response.ok) {
        // Manejar errores si la respuesta no es exitosa
        throw new Error(
          `Error en la petición: ${response.status} ${response.statusText}`
        );
      }

      const responseData = await response.json();

      // Hacer algo con la respuesta exitosa (responseData)
      if (responseData) {
        window.alert("Contacto creado con éxito!");
        window.location.reload();
      }
    } catch (error) {
      // Manejar errores de la petición
      console.error("Error en la petición:", error.message);
    }
  });

  return (
    <div className={styles.centerContainer}>
      <div className={styles.formContainer}>
        <form onSubmit={onSubmit}>
          <section className={styles.titleForm}>
            <img src={profileIcon} alt="profileIcon" />
            <h1>Agregar Nuevo Contacto</h1>
          </section>

          <section className={styles.infoForm}>
            <div className={styles.inputRow}>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Este campo es requerido.",
                  },
                  minLength: {
                    value: 3,
                    message: "El nombre debe contener al menos 3 caracteres.",
                  },

                  maxLength: {
                    value: 30,
                    message: "El nombre debe tener un máximo de 30 caracteres.",
                  },
                })}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div className={styles.inputRow}>
              <label htmlFor="location">Ubicación:</label>
              <input
                type="text"
                name="location"
                {...register("location", {
                  required: {
                    value: true,
                    message: "Este campo es requerido.",
                  },
                  minLength: {
                    value: 3,
                    message:
                      "La ubicación debe contener al menos 3 caracteres.",
                  },

                  maxLength: {
                    value: 30,
                    message:
                      "La ubicación debe tener un máximo de 30 caracteres.",
                  },
                })}
              />
              {errors.location && <span>{errors.location.message}</span>}
            </div>

            <div className={styles.inputRow}>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Este campo es requerido.",
                  },
                  pattern: {
                    value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                    message: "Email no valido.",
                  },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div className={styles.inputRow}>
              <label htmlFor="email">Phone:</label>
              <input
                type="phone"
                name="phone"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Este campo es requerido.",
                  },
                })}
              />
              {errors.phone && <span>{errors.phone.message}</span>}
            </div>
          </section>

          <section className={styles.btnForm}>
            <button className={styles.btnCheck}>
              <img src={checkIcon} alt="checkIcon" />
              Listo
            </button>

            <Link to={"/"}>
              <button className={styles.btnCancel}>
                <img src={cancelIcon} alt="cancelIcon" />
                Cancelar
              </button>
            </Link>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Form;
