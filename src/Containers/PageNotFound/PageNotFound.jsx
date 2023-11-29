import { Link } from "react-router-dom";
import errorImage from "../../assets/images/errro.svg";

const PageNotFound = () => {
   return (
      <div className="flex flex-col h-screen items-center justify-center">
         <div className="w-2/4 mx-auto">
            <img className="" src={errorImage} alt="Page not found" />
         </div>
         <div className="text-center mt-10">
            <h2 className="text-4xl font-bold">Oops... Page Not Found!</h2>
            <p className="text-lg mt-3">Sorry! This Page Is Not Available!</p>
            <div className="mt-4">
               <Link
                  className="bg-secondary py-3 px-4 rounded-full tracking-wider w-full inline lg:mt-0 text-white text-sm font-semibold text-white0"
                  to="/">
                  Go Back To Home Page
               </Link>
            </div>
         </div>
      </div>
   );
};

export default PageNotFound;
