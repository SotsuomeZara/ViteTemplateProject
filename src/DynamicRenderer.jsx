import { useEffect, useState } from "react";
import LINK from "./components/Alternates/LINK.jsx";
import H1 from "./components/Alternates/H1.jsx";
import DocumentSection from "./components/DocumentSection.jsx";
import MenuSection from "./components/MenuSection.jsx";

const importComponents = {
    LINK,
    H1,
    DocumentSection,
    MenuSection,
};

export default function DynamicRenderer({ dataPath }) {
    const [content, setContent] = useState(null);
    
    useEffect(() => {
        fetch(dataPath)
            .then((res) => res.json())
            .then((data) => setContent(data.content))
            .catch((err) => console.error("false", err));
    }, [dataPath]);

    if (!content) return <div>Now loading...</div>

    return (
        <div className="dynamic-renderer">
            {content.map((components, index) => {
                const Component = importComponents[components.tag];
                if (!Component) return null;
                return <Component key={index} {...components.props} />;
            })}
        </div>
    );
}