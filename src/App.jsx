import { Outlet } from "react-router-dom";
import AppHeader from "./components/AppHeader.jsx";
import AppFooter from "./components/AppFooter.jsx";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <AppHeader className={styles.header} />
      <main className={styles.main}><Outlet className={styles.outlet} /></main>
      <AppFooter className={styles.footer} />
    </div>
  ); 
}