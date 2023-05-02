import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ChefDetails from "../pages/ChefDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/', 
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/chef')

            },
        {
            path:'/details/:id', 
            element:<ChefDetails></ChefDetails>,
            loader: ({params})=>fetch(`http://localhost:5000/details/${params.id}`)
        }
        ]
    }
])

export default router;