import { Navigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import useAuth from "../Hooks/Shared/useAuth";
import useUser from "../Hooks/Shared/useUser";
const AdminRoute = ({ children }) => {
   const { userRole, isPending } = useUser();
   const { isLoading } = useAuth();

   if (isLoading) {
      return (
         <div className="h-screen flex flex-col items-center justify-center">
            <ClipLoader color="#EF1D26" />
         </div>
      );
   }

   if (!isPending && userRole !== "admin") {
      return <Navigate to="/login" state={{ from: "/admin/admin-profile" }} />;
   }

   return children;
};

export default AdminRoute;
