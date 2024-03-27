import styles from "./Wrapper.module.css";

export function Wrapper({ children, center, style }) {
  return (
    <div
      className={`${styles.Wrapper} ${center ? styles.center : ""}`}
      style={style}
    >
      {children}
    </div>
  );
}
