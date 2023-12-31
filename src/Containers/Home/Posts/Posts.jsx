import { useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { Checkbox } from "rsuite";
import Pagination from "../../../Components/Pagination/Pagination";
import { SearchContext } from "../../../Context/SearchContextProvider";
import usePublicRequest from "../../../Hooks/Shared/API/PublicRequest/usePublicRequest";
import usePosts from "../../../Hooks/Shared/usePosts";
import PostCard from "./postCard";

const Posts = () => {
   const { isPending, posts: allPosts } = usePosts();
   const { searchPosts } = useContext(SearchContext);
   const { filterByPopularity } = usePublicRequest();
   const [isFilter, setIsFilter] = useState(false);
   const [filterPosts, setFilterPosts] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const postPerPage = 5;
   useEffect(() => {
      if (isFilter) {
         filterByPopularity().then((res) => setFilterPosts(res));
      }
      if (searchPosts.length) {
         setFilterPosts(searchPosts);
      } else {
         setFilterPosts(allPosts);
      }
   }, [isFilter, isPending, searchPosts]);

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
               {posts.length > 5 ? (
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
            <div className="h-screen flex flex-col items-center justify-center">
               <ClipLoader color="#EF1D26" />
            </div>
         )}
      </div>
   );
};

export default Posts;
