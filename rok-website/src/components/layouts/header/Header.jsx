import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>Synix2z</Link>
      <nav className={styles.nav}>
        <Link to="/about">About</Link>
        {/* Add more navigation links here if needed */}
      </nav>
    </header>
  );
}