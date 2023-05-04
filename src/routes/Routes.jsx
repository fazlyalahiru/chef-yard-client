import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ChefDetails from "../pages/ChefDetails";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../pages/Blog";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://chef-yard-server-fazlyalahiru.vercel.app/details')

            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://chef-yard-server-fazlyalahiru.vercel.app/details/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/blog', 
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;