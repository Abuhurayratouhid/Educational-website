import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CheckOut from "../Others/checkOut/CheckOut";
import CourseDetails from "../Others/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
              path:'/',
              element: <Home></Home>  
            },
            {
                path: '/courses',
                loader: ()=> fetch('https://educamb-server.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                loader: ({params})=> fetch(`https://educamb-server.vercel.app/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkout/:id',
                loader: ({params})=> fetch(`https://educamb-server.vercel.app/courses/${params.id}`),
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>
            }
        ]
    }
]);

export default router;