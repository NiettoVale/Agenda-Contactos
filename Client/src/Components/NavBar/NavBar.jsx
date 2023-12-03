import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import menu from "../../assets/menu.png";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className={styles.nav}>
      <section>
        <Link to={"/"}>
          <h1>CONTACTOS</h1>
        </Link>
      </section>

      <section className={styles.menuResponsive} onClick={toggleMenu}>
        Menu
        <img src={menu} alt="menu" />
      </section>

      <section className={`${styles.Links} ${menuVisible && styles.showMenu}`}>
        <Link to={"/create-contact"}>Crear Contacto</Link>
        <Link to={"/search"}>Buscar Contacto</Link>
        <Link to={"/deleted-contact"}>Ver Contactos Eliminados</Link>
      </section>
    </nav>
  );
};

export default NavBar;
