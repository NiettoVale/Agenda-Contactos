import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <section>
        <h1>CONTACTOS</h1>
      </section>

      <section className={styles.Links}>
        <Link to={""}>Crear Contacto</Link>
        <Link to={""}>Buscar Contacto</Link>
        <Link to={""}>Ver Contactos Eliminados</Link>
      </section>
    </nav>
  );
};

export default NavBar;
