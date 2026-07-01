// Header.jsx
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>Synix2z</Link>
      <nav className={styles.nav}>
        <button onClick={() => scrollToSection("about-title")}>About</button>
        <button onClick={() => scrollToSection("commanders-title")}>Commanders</button>
        <button onClick={() => scrollToSection("statistics-title")}>Statistics</button>
      </nav>
    </header>
  );
}