import { useRef, useEffect, useState } from "react";
import styles from "./title.module.css";

export default function Title({ text }) {
  const titleRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      const w = titleRef.current.offsetWidth;
      setLineWidth(w * 2); // 2× la largeur du titre
    }
  }, [text]);

  return (
    <div className={styles.wrapper}>
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