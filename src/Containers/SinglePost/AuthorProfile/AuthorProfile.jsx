import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import vipBadge from "../../../assets/images/vip-card.png";

const AuthorProfile = ({ postData }) => {
   const { name, image, isPremiumMember } = postData.author;
   return (
      <div className="p-6 dark:bg-gray-900 dark:text-gray-100 border rounded shadow-md my-10">
         <div className=" flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="w-52">
               <img
                  src={image}
                  alt="Profile"
                  className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
               />
               {isPremiumMember ? (
                  <img className="w-12" src={vipBadge} alt="Vip" />
               ) : (
                  "normal"
               )}
            </div>

            <div className="flex flex-col justify-center">
               <h4 className="text-lg font-semibold text-center md:text-left">
                  {name}
               </h4>
               <p className="dark:text-gray-400">
                  Sed non nibh iaculis, posuere diam vitae, consectetur neque.
                  Integer velit ligula, semper sed nisl in, cursus commodo elit.
                  Pellentesque sit amet mi luctus ligula euismod lobortis
                  ultricies et nibh.
               </p>
               <div className="flex pt-4 space-x-4 align-center">
                  <a
                     href="#"
                     className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                     <FaFacebook />
                  </a>
                  <a
                     href="#"
                     className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                     <FaTwitter />
                  </a>
                  <a
                     href="#"
                     className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                     <FaEnvelope />
                  </a>
                  <a
                     href="#"
                     className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                     <FaLinkedin />
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AuthorProfile;
