import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>

                {/* Left — ID + links */}
                <div className={styles.informations}>
                    <p className={styles.id}>ID : 131046134</p>
                    <div className={styles.footerNav}>
                        <Link to="/legal" className={styles.footerLink}>Legal Mentions</Link>
                        <Link to="/tech-stack" className={styles.footerLink}>Tech Stack</Link>
                    </div>
                </div>

                {/* Center — copyright */}
                <p className={styles.footerText}>
                    © 2026 Synix2z — All rights reserved
                </p>

                {/* Right — GitHub */}
                <div className={styles.footerLinks}>
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