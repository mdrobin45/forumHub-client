import { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/Shared/useAuth";
import UserDropdown from "./userDropdown";

const User = () => {
   const [showUserDropdown, setShowUserDropdown] = useState(false);
   const { user } = useAuth();

   return (
      <>
         {!user ? (
            <Link
               to="/login"
               className="text-secondary hover:text-white hover:bg-secondary transition-all bg-transparent border border-secondary focus:outline-none font-medium rounded-lg text-md px-3 py-2 text-center inline-flex items-center dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary">
               Sign In
               <BiLogInCircle className="text-xl ml-2" />
            </Link>
         ) : (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               <div className="relative ml-3">
                  <div className="flex gap-2 items-center">
                     <button
                        onClick={() => {
                           setShowUserDropdown(!showUserDropdown);
                        }}
                        type="button"
                        className="relative flex rounded-full bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true">
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open user menu</span>
                        <img
                           className="h-10 w-10 rounded-full"
                           src={
                              user
                                 ? user.photoURL
                                 : "https://i.ibb.co/238dYyx/user.png"
                           }
                           alt=""
                        />
                     </button>
                  </div>
                  <UserDropdown showUserDropdown={showUserDropdown} />
               </div>
            </div>
         )}
      </>
   );
};

export default User;
