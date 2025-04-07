import { Outlet } from "react-router-dom";
import AppHeader from "./components/AppHeader.jsx";
import AppFooter from "./components/AppFooter.jsx";

export default function App() {
  return (
    <div className="app">
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  ); 
}