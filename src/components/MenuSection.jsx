import { Link } from 'react-router-dom';

export default function MenuSection({ links }) {
    const list = links.map((link) => <li key={link.toString()}><Link to={link[0]}>{link[1]}</Link></li>);

    return (
        <div className="list-section">
            <h2>Table of Contents</h2>
            <ul>{list}</ul>
        </div>
    );
}