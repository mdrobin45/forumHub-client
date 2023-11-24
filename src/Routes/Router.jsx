import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/blog",
            element: <Blog />,
         },
         {
            path: "/faq",
            element: <Faq />,
         },
         {
            path: "/contact",
            element: <Contact />,
         },
      ],
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/register",
      element: <Register />,
   },
]);

export default router;
