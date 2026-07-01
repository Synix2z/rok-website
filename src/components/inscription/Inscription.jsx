import { useRef } from "react";
import styles from "./inscription.module.css";

const VARIANT_CLASSES = {
  common: styles.inscriptionCommon,
  rare: styles.inscriptionRare,
  legendary: styles.inscriptionLegendary,
};

export default function Inscription({ text, variant = "common" }) {
  const badgeRef = useRef(null);

  return (
    <div ref={badgeRef} className={VARIANT_CLASSES[variant]}>
      <span className={styles.inscriptionLabel}>{text}</span>
    </div>
  );
}
