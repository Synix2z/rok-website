import useInView from "../../hooks/useInView";
import styles from "./fadeIn.module.css";


/* Component to fade in elements when they come into view */
export default function FadeIn({ children, delay = 0 }) {
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            className={`${styles.fadeIn} ${inView ? styles.visible : ""}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}