import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/sign",
                element:<SignUp></SignUp>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])


export default routes;