import { Link } from "react-router-dom";
import NavLinks from "./NavLinks/NavLinks";
import User from "./User/User";

const Header = () => {
   return (
      <div>
         <nav className="bg-white siteHeader shadow-sm">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
               <div className="relative flex h-24 items-center justify-between">
                  <Link to="/" className="flex flex-shrink-0 items-center">
                     <h2 className="text-4xl font-bold">Logo</h2>
                  </Link>
                  <NavLinks />
                  <User />
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Header;
