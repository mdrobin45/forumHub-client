import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthContextProvider";
import useUser from "../../../Hooks/Shared/useUser";

const UserDropdown = ({ showUserDropdown }) => {
   const { user, logOut } = useContext(AuthContext);
   const { userRole } = useUser();

   // Logout
   const handleLogOut = () => {
      logOut().then(() => {
         toast.error("Your are logged out!");
      });
   };
   return (
      <div
         className={`z-10 ${
            !showUserDropdown ? "hidden" : ""
         } absolute top-12 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
         <div className="px-4 py-3 text-sm text-gray-900">
            <div>{user && user.displayName}</div>
            <div className="font-medium truncate">
               {user.email && user.email}
            </div>
         </div>
         <Link
            to={
               userRole === "admin"
                  ? "/admin/admin-profile"
                  : "/user/my-profile"
            }
            className="block rounded-lg w-full uppercase text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Dashboard
         </Link>
         <div>
            <button
               onClick={handleLogOut}
               className="block rounded-lg w-full uppercase text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
               Sign Out
            </button>
         </div>
      </div>
   );
};

export default UserDropdown;
