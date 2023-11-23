import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import AuthContextProvider from "./Context/AuthContextProvider.jsx";
import router from "./Routes/Router.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthContextProvider>
         <RouterProvider router={router} />
         <ToastContainer autoClose={1500} />
      </AuthContextProvider>
   </React.StrictMode>
);
