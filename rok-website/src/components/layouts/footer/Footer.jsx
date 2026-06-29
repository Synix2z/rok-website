import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p className={styles.footerText}>
                    © 2026 Synix2z — All rights reserved
                </p>

                <div className={styles.footerLinks}>
                    {/* GitHub icon link with noopener noreferrer to improve security & performance */}
                    <Link to="https://github.com/Synix2z" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                            className={styles.githubIcon}
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
}