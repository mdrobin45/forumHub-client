import { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import useAnnounce from "../../../Hooks/Shared/useAnnounce";
import useAuth from "../../../Hooks/Shared/useAuth";
import UserDropdown from "./userDropdown";

const User = () => {
   const [showUserDropdown, setShowUserDropdown] = useState(false);
   const { user } = useAuth();

   let { announces } = useAnnounce();
   announces = announces.filter((item) => item.status === "unread");
   return (
      <>
         <div className="flex lg:w-1/4 items-center justify-end gap-4">
            <a
               href="#ann_section"
               className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary">
               <IoMdNotifications className="text-2xl" />
               <span className="sr-only">Notifications</span>
               <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                  {announces.length}
               </div>
            </a>

            {!user ? (
               <Link
                  to="/login"
                  className="bg-secondary text-white transition-all border border-secondary focus:outline-none font-medium rounded-lg text-md px-3 py-2 text-center inline-flex items-center dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary">
                  JOIN US
                  <BiLogInCircle className="text-xl ml-2" />
               </Link>
            ) : (
               <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
         </div>
      </>
   );
};

export default User;
