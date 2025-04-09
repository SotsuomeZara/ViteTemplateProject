import { Outlet } from "react-router-dom";
import AppHeader from "./components/AppHeader.jsx";
import LeftSideBar from "./LeftSideBar.jsx";
import AppFooter from "./components/AppFooter.jsx";
import RightSideBar from "./RightSideBar.jsx";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <AppHeader className={styles.header} />
      <div className={styles.center}>
        <div className={styles.left_side_bar}>
          <LeftSideBar />
        </div>
        <main className={styles.main}><Outlet /></main>
        <div className={styles.right_side_bar}>
          <RightSideBar />
        </div>
      </div>
      <AppFooter />
    </div>
  ); 
}