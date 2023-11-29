import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../Containers/PageNotFound/PageNotFound";
import Dashboard from "../Layouts/Dashboard";
import MainLayout from "../Layouts/MainLayout";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Contact from "../Pages/Contact/Contact";
import AdminProfile from "../Pages/Dashboard/AdminDashboard/AdminProfile/AdminProfile";
import CommentReport from "../Pages/Dashboard/AdminDashboard/CommentReport/CommentReport";
import CreateAnnouncement from "../Pages/Dashboard/AdminDashboard/CreateAnnouncement/CreateAnnouncement";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import AddPost from "../Pages/Dashboard/UserDashboard/AddPost";
import Comments from "../Pages/Dashboard/UserDashboard/Comments/Comments";
import MyPosts from "../Pages/Dashboard/UserDashboard/MyPosts";
import MyProfile from "../Pages/Dashboard/UserDashboard/MyProfile";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Membership from "../Pages/Membership/Membership";
import Register from "../Pages/Register/Register";
import SinglePost from "../Pages/SinglePost/SinglePost";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      errorElement: <PageNotFound />,
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
   {
      path: "/user",
      element: (
         <PrivateRoute>
            <Dashboard />
         </PrivateRoute>
      ),
      children: [
         {
            path: "my-profile",
            element: (
               <PrivateRoute>
                  <MyProfile />
               </PrivateRoute>
            ),
         },
         {
            path: "add-post",
            element: (
               <PrivateRoute>
                  <AddPost />
               </PrivateRoute>
            ),
         },
         {
            path: "my-posts",
            element: (
               <PrivateRoute>
                  <MyPosts />
               </PrivateRoute>
            ),
         },
         {
            path: "comments/:id",
            element: (
               <PrivateRoute>
                  <Comments />
               </PrivateRoute>
            ),
         },
      ],
   },
   {
      path: "/admin",
      element: <Dashboard />,
      children: [
         {
            path: "admin-profile",
            element: (
               <AdminRoute>
                  <AdminProfile />
               </AdminRoute>
            ),
         },
         {
            path: "manage-users",
            element: (
               <AdminRoute>
                  <ManageUsers />
               </AdminRoute>
            ),
         },
         {
            path: "create-announce",
            element: (
               <AdminRoute>
                  <CreateAnnouncement />
               </AdminRoute>
            ),
         },
         {
            path: "reported-comments",
            element: (
               <AdminRoute>
                  <CommentReport />
               </AdminRoute>
            ),
         },
      ],
   },
]);

export default router;
