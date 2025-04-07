import { Link } from "react-router-dom";

export default function LINK({ to, text }) {
    return (
        <div className="LINK">
            <Link to={to}>{text}</Link>
        </div>
    );
}