import { useState } from "react";
import Pagination from "../../../../Components/Pagination/Pagination";
import useUserPosts from "../../../../Hooks/Shared/useUserPosts";
import PostTableData from "./PostTableData";

const MyPostContainer = () => {
   let { posts } = useUserPosts();
   const [currentPage, setCurrentPage] = useState(1);
   const dataPerPage = 10;

   const startIndex = (currentPage - 1) * dataPerPage;
   const endIndex = startIndex + dataPerPage;

   const totalPage = Math.ceil(posts.length / dataPerPage);
   const pageNumbers = [];

   for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
   }

   const displayPosts = posts.slice(startIndex, endIndex);

   return (
      <>
         <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" className="px-6 py-3">
                        Title
                     </th>
                     <th scope="col" className="px-6 text-center py-3">
                        Up Vote
                     </th>
                     <th scope="col" className="px-6 text-center py-3">
                        Down Vote
                     </th>
                     <th scope="col" className="px-6 text-center py-3">
                        Comments
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Action
                     </th>
                  </tr>
               </thead>
               {posts.length ? (
                  <tbody>
                     {displayPosts.map((post) => (
                        <PostTableData key={post._id} post={post} />
                     ))}
                  </tbody>
               ) : (
                  <>
                     <p className="py-4 pl-6">No posts found</p>
                  </>
               )}
            </table>
            {posts.length > 10 ? (
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

export default MyPostContainer;
