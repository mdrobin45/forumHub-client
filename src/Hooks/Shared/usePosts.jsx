import { useQuery } from "@tanstack/react-query";
import usePublicRequest from "./API/PublicRequest/usePublicRequest";

const usePosts = () => {
   const { getAllPosts } = usePublicRequest();

   let {
      refetch: allPostRefetch,
      isPending,
      data: allPosts = [],
   } = useQuery({
      queryKey: ["posts"],
      queryFn: () => getAllPosts(),
   });

   // Reverse post
   const posts = allPosts.toReversed();

   return { isPending, posts, allPostRefetch };
};

export default usePosts;
