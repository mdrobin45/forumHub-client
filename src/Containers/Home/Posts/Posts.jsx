import { useEffect, useState } from "react";
import { Checkbox } from "rsuite";
import Pagination from "../../../Components/Pagination/Pagination";
import usePublicRequest from "../../../Hooks/Shared/API/PublicRequest/usePublicRequest";
import usePosts from "../../../Hooks/Shared/usePosts";
import PostCard from "./postCard";

const Posts = () => {
   const { isPending, posts: allPosts } = usePosts();
   const { filterByPopularity } = usePublicRequest();
   const [isFilter, setIsFilter] = useState(false);
   const [filterPosts, setFilterPosts] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const postPerPage = 5;

   useEffect(() => {
      if (isFilter) {
         filterByPopularity().then((res) => setFilterPosts(res));
      } else {
         setFilterPosts(allPosts);
      }
   }, [isFilter]);

   const posts = filterPosts.length ? filterPosts : allPosts;

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
               <Checkbox
                  onChange={() => {
                     setIsFilter(!isFilter);
                  }}>
                  Short by popularity
               </Checkbox>
               {currentPagePosts.map((post) => (
                  <PostCard key={post._id} post={post} />
               ))}
               {allPosts.length > 5 ? (
                  <div className="flex items-center justify-center mt-6">
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
            </>
         ) : (
            "Loading"
         )}
      </div>
   );
};

export default Posts;
