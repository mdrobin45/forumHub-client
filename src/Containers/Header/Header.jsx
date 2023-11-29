import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import NavLinks from "./NavLinks/NavLinks";
import User from "./User/User";

const Header = () => {
   return (
      <div>
         <nav className="bg-white siteHeader shadow-sm">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
               <div className="relative flex h-24 items-center justify-between">
                  <div className="w-1/4">
                     <Link to="/" className="flex flex-shrink-0 items-center">
                        <img className="w-full" src={logo} alt="Logo" />
                     </Link>
                  </div>
                  <NavLinks />
                  <User />
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Header;
