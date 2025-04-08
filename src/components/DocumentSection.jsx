import styles from "./DocumentSection.module.css";

export default function DocumentSection({ header, content }) {
    return (
        <div className={styles.document_section}>
            <h3 className={styles.document_header}>{header}</h3>
            <p className={styles.document_content}>{content}</p>
        </div>
    );
}
