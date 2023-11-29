import { useState } from "react";
import Pagination from "../../../../Components/Pagination/Pagination";
import useAllUsers from "../../../../Hooks/useAllUsers";
import UsersData from "./UsersData";

const ManageUsersContainer = () => {
   const [searchText, setSearchText] = useState("");
   let { searchRefetch, users, refetch } = useAllUsers(searchText);
   const [currentPage, setCurrentPage] = useState(1);
   const dataPerPage = 10;

   const startIndex = (currentPage - 1) * dataPerPage;
   const endIndex = startIndex + dataPerPage;

   const totalPage = Math.ceil(users.length / dataPerPage);
   const pageNumbers = [];

   for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
   }

   const displayUsers = users.slice(startIndex, endIndex);

   const handleSearch = () => {
      searchRefetch();
   };

   // Search text change handler
   const inputHandler = (e) => {
      setSearchText(e.target.value);
   };

   return (
      <>
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
               onChange={inputHandler}
               type="search"
               id="default-search"
               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Search user by name"
               required
            />
            <button
               onClick={handleSearch}
               className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Search
            </button>
         </div>
         <div className="relative mt-6 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" className="px-6 py-3">
                        User Name
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Email
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Subscription
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Action
                     </th>
                  </tr>
               </thead>
               {users.length ? (
                  <tbody>
                     {displayUsers.map((user) => (
                        <UsersData
                           refetch={refetch}
                           key={user?._id}
                           user={user}
                        />
                     ))}
                  </tbody>
               ) : (
                  <>
                     <p className="pl-4 py-4">No user created</p>
                  </>
               )}
            </table>
            {users.length > 10 ? (
               <div className="py-6 flex items-center pl-4">
                  <Pagination
                     currentPage={currentPage}
                     setCurrentPage={setCurrentPage}
                     pageNumbers={pageNumbers}
                     totalPage={totalPage}
                  />
               </div>
            ) : (
               ""
            )}
         </div>
      </>
   );
};

export default ManageUsersContainer;
