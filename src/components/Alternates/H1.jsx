import styles from "./H1.module.css";

export default function H1({ text }) {
    return (
        <div className={styles.H1}>
            <h1>{text}</h1>
        </div>
    );
}