export default function DocumentSection({ header, content }) {
    return (
        <div className="document-section">
            <h3>{header}</h3>
            <p>{content}</p>
        </div>
    );
}
