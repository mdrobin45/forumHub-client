import { useState } from "react";
import usePosts from "../../../Hooks/Shared/usePosts";

const Banner = () => {
   const [searchText, setSearchText] = useState("");
   const { searchRefetch } = usePosts(searchText);

   // Handle change input
   const changeHandler = (e) => {
      setSearchText(e.target.value);
   };

   // Search button handler
   const searchBtnHandler = () => {
      searchRefetch();
   };
   return (
      <div className="bg-primary text-white text-center py-72 flex items-center justify-center flex-col">
         <h2 className="text-6xl leading-[130%] uppercase font-bold">
            Welcome to DisputeHub
         </h2>
         <p className="text-2xl italic pt-4">
            The most popular forum in bangladesh
         </p>

         <form className=" w-2/4 mt-7">
            <label
               htmlFor="default-search"
               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
               Search
            </label>
            <div className="relative">
               <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                     className="w-4 h-4 text-gray-500 dark:text-gray-400"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 20 20">
                     <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                     />
                  </svg>
               </div>
               <input
                  onChange={changeHandler}
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-md text-gray-200 border border-gray-500 rounded-lg bg-[#313B4B] focus:ring-secondary focus:border-secondary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search by tags"
                  required
               />
               <button
                  type="button"
                  onClick={searchBtnHandler}
                  className="text-white absolute end-2.5 bottom-2.5 bg-secondary focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-secondary dark:focus:ring-secondary">
                  Search
               </button>
            </div>
         </form>
      </div>
   );
};

export default Banner;
