import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/mainLayout";
import HomeLayout from "../Layout/HomeLayout";


// create routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element: <HomeLayout></HomeLayout>
            }
        ]
    },
]);

export default router;