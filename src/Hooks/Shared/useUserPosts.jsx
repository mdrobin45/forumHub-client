import { useQuery } from "@tanstack/react-query";
import useSecureRequest from "./API/SecureRequest/useSecureRequest";

const useUserPosts = () => {
   const { userPosts } = useSecureRequest();
   let {
      isPending,
      refetch,
      data: posts = [],
   } = useQuery({
      queryKey: ["userPosts"],
      queryFn: userPosts,
   });

   posts = posts.toReversed();
   return { isPending, posts, refetch };
};

export default useUserPosts;
