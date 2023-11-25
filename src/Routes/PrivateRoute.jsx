import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import useAuth from "../Hooks/Shared/useAuth";

const PrivateRoute = ({ children }) => {
   const location = useLocation();
   const { user, isLoading } = useAuth();

   if (isLoading) {
      return (
         <div className="h-screen flex flex-col items-center justify-center">
            <ClipLoader color="#EF1D26" />
         </div>
      );
   }

   if (!user) {
      return <Navigate to="/login" state={{ from: location.pathname }} />;
   }

   return children;
};

export default PrivateRoute;
