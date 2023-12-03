import Swal from "sweetalert2";
import styles from "./Detail.module.css";
import checkIcon from "../../assets/check.png";
import cancelIcon from "../../assets/cancel.png";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const EditContactForm = () => {
  const { pathname } = useLocation();
  const contactName = pathname.split("/")[2];
  const [defaultValues, setDefaultValues] = useState({});
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/contact/${contactName}`
        );

        const responseData = await response.json();
        setDefaultValues(responseData);

        // Establece los valores por defecto usando setValue de react-hook-form
        Object.keys(responseData).forEach((key) => {
          setValue(key, responseData[key]);
        });
      } catch (error) {
        console.error(`Hubo un error: ${error.message}`);
        throw error;
      }
    };

    fetchData();
  }, [contactName, setValue]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch(
        `http://localhost:3001/update-contact/${data.contactId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      console.log(responseData);

      if (response.status === 200) {
        navigate("/");
        Swal.fire(
          "¡Contacto actualizado!",
          "Los cambios se guardaron correctamente.",
          "success"
        );
      }
    } catch (error) {
      console.error(`Hubo un error: ${error.message}`);
      throw error;
    }
  };

  return (
    <div className={styles.centerContainer}>
      <div className={styles.formContainer}>
        <div className={styles.titleForm}>
          <h1>Editar Contacto</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.infoForm}>
            <div className={styles.inputRow}>
              <label className={styles.labelForm}>Nombre:</label>
              <input {...register("name")} defaultValue={defaultValues.name} />
            </div>
            <div className={styles.inputRow}>
              <label className={styles.labelForm}>Teléfono:</label>
              <input
                {...register("phone")}
                defaultValue={defaultValues.phone}
              />
            </div>
            <div className={styles.inputRow}>
              <label className={styles.labelForm}>Dirección:</label>
              <input
                {...register("location")}
                defaultValue={defaultValues.location}
              />
            </div>
            <div className={styles.inputRow}>
              <label className={styles.labelForm}>Email:</label>
              <input
                {...register("email")}
                defaultValue={defaultValues.email}
              />
            </div>
          </div>
          <div className={styles.btnForm}>
            <button type="submit" className={styles.btnCheck}>
              <img src={checkIcon} alt="checkIcon" />
              Actualizar
            </button>

            <Link to={"/"}>
              <button className={styles.btnCancel}>
                <img src={cancelIcon} alt="cancelIcon" />
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContactForm;
