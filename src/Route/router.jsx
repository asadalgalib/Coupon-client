import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/mainLayout";
import HomeLayout from "../Layout/HomeLayout";
import Signin from "../Common/Signin";
import PrivateRoute from "./PrivateRoute";
import AddCoupon from "../Pages/AddCoupon";


// create routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><MainLayout></MainLayout></PrivateRoute>,
        children: [
            {
                path: '/',
                element: <PrivateRoute><HomeLayout></HomeLayout></PrivateRoute>
            },
            {
                path : '/addcoupon',
                element : <AddCoupon></AddCoupon>
            }
        ]
    },
    {
        path: "/signin",
        element: <Signin></Signin>
    }
]);

export default router;