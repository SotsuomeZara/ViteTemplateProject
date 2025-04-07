import {createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import DynamicRenderer from "./DynamicRenderer.jsx";
import routerData from "./router.json";

const routes = routerData.map((route) => ({
    path: route.path,
    element: <DynamicRenderer dataPath={route.dataPath} />
}));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <DynamicRenderer dataPath="/documents/home.json" /> },
            ...routes,
        ],
    },
]);

export default router;