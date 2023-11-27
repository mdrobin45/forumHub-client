import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import usePublicRequest from "./API/PublicRequest/usePublicRequest";

const usePosts = (searchText) => {
   const { getAllPosts, tagSearchPosts } = usePublicRequest();
   let [posts, setPosts] = useState([]);

   const { refetch: searchRefetch, data: searchedPosts = [] } = useQuery({
      queryKey: ["searchedPosts"],
      queryFn: () => tagSearchPosts(searchText),
   });

   let {
      refetch,
      isPending,
      data: allPosts = [],
   } = useQuery({
      queryKey: ["posts"],
      queryFn: () => getAllPosts(),
   });

   useEffect(() => {
      if (searchedPosts.length) {
         setPosts(searchedPosts);
      } else {
         setPosts(allPosts);
      }
   }, [allPosts, searchedPosts]);

   // Reverse post
   posts = posts.toReversed();

   return { isPending, posts, refetch, searchRefetch };
};

export default usePosts;
