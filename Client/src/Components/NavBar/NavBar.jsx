import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <section>
        <Link to={"/"}>
          <h1>CONTACTOS</h1>
        </Link>
      </section>

      <section className={styles.Links}>
        <Link to={"/create-contact"}>Crear Contacto</Link>
        <Link to={"/search"}>Buscar Contacto</Link>
        <Link to={"/deleted-contact"}>Ver Contactos Eliminados</Link>
      </section>
    </nav>
  );
};

export default NavBar;
