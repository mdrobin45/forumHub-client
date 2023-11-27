import { useQuery } from "@tanstack/react-query";
import usePublicRequest from "./API/PublicRequest/usePublicRequest";

const usePosts = () => {
   const { getAllPosts } = usePublicRequest();

   let { isPending, data: posts = [] } = useQuery({
      queryKey: ["posts"],
      queryFn: () => getAllPosts(),
   });

   // Reverse post
   posts = posts.toReversed();

   return { isPending, posts };
};

export default usePosts;
