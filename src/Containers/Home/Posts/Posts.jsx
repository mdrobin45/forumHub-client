import { useState } from "react";
import Pagination from "../../../Components/Pagination/Pagination";
import usePosts from "../../../Hooks/Shared/usePosts";
import PostCard from "./postCard";

const Posts = () => {
   const { isPending, posts } = usePosts();
   const [currentPage, setCurrentPage] = useState(1);
   const postPerPage = 5;

   const startIndex = (currentPage - 1) * postPerPage;
   const endIndex = startIndex + postPerPage;

   const currentPagePosts = posts.slice(startIndex, endIndex);

   const totalPage = Math.ceil(posts.length / postPerPage);
   const pageNumbers = [];
   for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
   }
   return (
      <div>
         {!isPending ? (
            <>
               {currentPagePosts.map((post) => (
                  <PostCard key={post._id} post={post} />
               ))}
               <div className="flex items-center justify-center mt-6">
                  <Pagination
                     posts={posts}
                     currentPage={currentPage}
                     setCurrentPage={setCurrentPage}
                     pageNumbers={pageNumbers}
                     endIndex={endIndex}
                  />
               </div>
            </>
         ) : (
            "Loading"
         )}
      </div>
   );
};

export default Posts;
