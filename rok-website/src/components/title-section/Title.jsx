import { useRef, useEffect, useState } from "react";
import styles from "./title.module.css";

export default function Title({ text, id }) {
    const titleRef = useRef(null);
    const [lineWidth, setLineWidth] = useState(0);

    useEffect(() => {
        if (titleRef.current) {
            const w = titleRef.current.offsetWidth;
            setLineWidth(w * 3); // Set the line width to 3 times the title width
        }
    }, [text]);

    return (
        <div id={id} className={styles.wrapper}>
            <div ref={titleRef} className={styles.title}>
                {text}
            </div>

            <div
                className={styles.lineCircleWrapper}
                style={{ width: lineWidth ? `${lineWidth}px` : "auto" }}
            >
                <div className={styles.line}></div>
                <div className={styles.circle}></div>
                <div className={styles.line}></div>
            </div>
        </div>
    );
}