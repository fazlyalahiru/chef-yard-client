import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ChefDetails from "../pages/ChefDetails";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/details')

            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/register',
                element: <Registration></Registration>
            }
        ]
    }
])

export default router;