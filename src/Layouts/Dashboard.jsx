import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaUserCircle, FaUsers } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { IoIosAddCircle } from "react-icons/io";
import { RiSpam2Fill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useUser from "../Hooks/Shared/useUser";

const userLinks = [
   {
      linkText: "My Profile",
      icon: <FaUserCircle className="text-2xl" />,
      url: "/user/my-profile",
   },
   {
      linkText: "Add Post",
      icon: <IoIosAddCircle className="text-2xl" />,
      url: "/user/add-post",
   },
   {
      linkText: "My Posts",
      icon: <CgMenuGridR className="text-2xl" />,
      url: "/user/my-posts",
   },
];
const adminLinks = [
   {
      linkText: "My Profile",
      icon: <FaUserCircle className="text-2xl" />,
      url: "/admin/admin-profile",
   },
   {
      linkText: "Manage Users",
      icon: <FaUsers className="text-2xl" />,
      url: "/admin/manage-users",
   },
   {
      linkText: "Reported Comments",
      icon: <RiSpam2Fill className="text-2xl" />,
      url: "/admin/reported-comments",
   },
   {
      linkText: "Make Announcement",
      icon: <GrAnnounce className="text-2xl" />,
      url: "/admin/create-announce",
   },
];
const Dashboard = () => {
   const { userRole } = useUser();
   const [showMenu, setShowMenu] = useState(false);
   return (
      <>
         <div className="flex items-center justify-end">
            <button
               onClick={() => {
                  setShowMenu(!showMenu);
               }}
               type="button"
               className="inline-flex mr-4 items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
               <span className="sr-only">Open sidebar</span>
               <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     clipRule="evenodd"
                     fillRule="evenodd"
                     d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
               </svg>
            </button>
         </div>

         <aside
            className={`${
               !showMenu ? "-translate-x-full" : ""
            } fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0`}
            aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
               <ul className="space-y-2 font-medium">
                  {userRole === "member" && (
                     <>
                        {userLinks.map((link, index) => (
                           <li key={index}>
                              <NavLink
                                 to={link.url}
                                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                 {link.icon}
                                 <span className="ms-3">{link.linkText}</span>
                              </NavLink>
                           </li>
                        ))}
                     </>
                  )}
                  {userRole === "admin" && (
                     <>
                        {adminLinks.map((link, index) => (
                           <li key={index}>
                              <NavLink
                                 to={link.url}
                                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                 {link.icon}
                                 <span className="ms-3">{link.linkText}</span>
                              </NavLink>
                           </li>
                        ))}
                     </>
                  )}
               </ul>
            </div>
         </aside>

         <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
               <Outlet />
            </div>
         </div>
      </>
   );
};

export default Dashboard;
