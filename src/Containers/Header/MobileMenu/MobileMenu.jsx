import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useUser from "../../../Hooks/Shared/useUser";
import logo from "../../../assets/images/logo.svg";
import User from "../User/User";

const MobileMenu = () => {
   const { userRole } = useUser();
   const [openMenu, setOpenMenu] = useState(false);
   return (
      <nav className="bg-white z-10 border-gray-200 dark:bg-gray-900">
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
               to="/"
               className="flex items-center space-x-3 rtl:space-x-reverse">
               <img src={logo} className="h-10" alt="Logo" />
            </Link>
            <User />
            <button
               onClick={() => {
                  setOpenMenu(!openMenu);
               }}
               type="button"
               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
               aria-controls="navbar-default"
               aria-expanded="false">
               <span className="sr-only">Open main menu</span>
               <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14">
                  <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M1 1h15M1 7h15M1 13h15"
                  />
               </svg>
            </button>
            <div
               className={`${
                  !openMenu ? "hidden" : "block"
               } w-full md:block md:w-auto`}>
               <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                     <NavLink
                        to="/"
                        className="rounded-md uppercase px-3 py-2 text-sm font-medium"
                        aria-current="page">
                        Home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/membership"
                        className="rounded-md uppercase px-3 py-2 text-sm font-medium"
                        aria-current="page">
                        Membership
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to={
                           userRole === "admin"
                              ? "/admin/admin-profile"
                              : "/user/my-profile"
                        }
                        className="rounded-md uppercase px-3 py-2 text-sm font-medium"
                        aria-current="page">
                        Dashboard
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/faq"
                        className="rounded-md uppercase px-3 py-2 text-sm font-medium">
                        Faq
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/blog"
                        className="rounded-md uppercase px-3 py-2 text-sm font-medium">
                        Blog
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/contact"
                        className="rounded-md uppercase px-3 py-2 text-sm font-medium">
                        Contact
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default MobileMenu;
