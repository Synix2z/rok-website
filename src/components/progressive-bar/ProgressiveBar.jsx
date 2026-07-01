import { useState, useEffect } from "react";
import useInView from "../../hooks/useInView";
import style from "./progressiveBar.module.css";

export default function ProgressiveBar({ current, max }) {
    const [filledProgress, setFilledProgress] = useState(0);
    const [ref, inView] = useInView(0.3);

    const percentage = Math.min(Math.round((current / max) * 100), 100);

    useEffect(() => {
        if (!inView) return;

        const timeout = setTimeout(() => {
            setFilledProgress(percentage);
        }, 100);

        return () => clearTimeout(timeout);
    }, [inView, percentage]);

    return (
        <div ref={ref} className={style.wrapper}>
            <div className={style.progressiveBar}>
                <div
                    className={style.progress}
                    style={{ width: `${filledProgress}%` }}
                ></div>
            </div>
            <span className={style.percentage}>{percentage} %</span>
        </div>
    );
}