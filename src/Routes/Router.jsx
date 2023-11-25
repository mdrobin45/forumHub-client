import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Contact from "../Pages/Contact/Contact";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Membership from "../Pages/Membership/Membership";
import Register from "../Pages/Register/Register";
import SinglePost from "../Pages/SinglePost/SinglePost";
import PrivateRoute from "./PrivateRoute";

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
            path: "/post/:id",
            element: <SinglePost />,
         },
         {
            path: "/blog",
            element: <Blog />,
         },
         {
            path: "/membership",
            element: (
               <PrivateRoute>
                  <Membership />
               </PrivateRoute>
            ),
         },
         {
            path: "/checkout",
            element: (
               <PrivateRoute>
                  <Checkout />
               </PrivateRoute>
            ),
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
