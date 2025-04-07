import { Link } from "react-router-dom";

export default function AppHeader() {
    return (
        <div className="app-header">
            <Link to="/">Home</Link>
        </div>
    );
}