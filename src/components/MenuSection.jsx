import { Link } from 'react-router-dom';
import styles from "./MenuSection.module.css";

export default function MenuSection({ links }) {
    const list = links.map((link) => <li key={link.toString()}><Link to={link[0]}>{link[1]}</Link></li>);

    return (
        <div className={styles.menu_section}>
            <h2 className={styles.table_header}>Table of Contents</h2>
            <ul className={styles.list}>{list}</ul>
        </div>
    );
}