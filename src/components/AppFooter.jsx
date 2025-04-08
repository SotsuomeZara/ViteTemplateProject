import { Link } from "react-router-dom";
import styles from "./AppFooter.module.css";

export default function AppFooter() {
    return (
        <div className={styles.app_footer}>
            <h3 className={styles.footer_logo}><Link to="/">Home</Link></h3>
            <h2 className={styles.electrosphere_logo}>Electrosphere</h2>
        </div>
    );
}