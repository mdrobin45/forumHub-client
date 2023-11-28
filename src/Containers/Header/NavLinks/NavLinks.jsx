import { NavLink } from "react-router-dom";

const NavLinks = () => {
   return (
      <div className="bg-gray-100 w-2/4 py-2 px-2 rounded-full">
         <div className="hidden sm:mx-6 sm:block">
            <div className="flex justify-center space-x-4">
               <NavLink
                  to="/"
                  className="rounded-md uppercase px-3 py-2 text-sm font-medium"
                  aria-current="page">
                  Home
               </NavLink>
               <NavLink
                  to="/membership"
                  className="rounded-md uppercase px-3 py-2 text-sm font-medium"
                  aria-current="page">
                  Membership
               </NavLink>
               <NavLink
                  to="/faq"
                  className="rounded-md uppercase px-3 py-2 text-sm font-medium">
                  Faq
               </NavLink>
               <NavLink
                  to="/blog"
                  className="rounded-md uppercase px-3 py-2 text-sm font-medium">
                  Blog
               </NavLink>
               <NavLink
                  to="/contact"
                  className="rounded-md uppercase px-3 py-2 text-sm font-medium">
                  Contact
               </NavLink>
            </div>
         </div>
      </div>
   );
};

export default NavLinks;
