import {
    createBrowserRouter,
} from "react-router-dom";

// create routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
]);

export default router;