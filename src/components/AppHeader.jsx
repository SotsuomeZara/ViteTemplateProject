import { Link } from "react-router-dom";
import styles from "./AppHeader.module.css";

export default function AppHeader() {
    return (
        <div className={styles.app_header}>
            <h3 className={styles.header_logo}><Link to="/">Home</Link></h3>
            <button className={styles.setting}>Setting</button>
        </div>
    );
}