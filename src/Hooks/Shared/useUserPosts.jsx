import { useQuery } from "@tanstack/react-query";
import useSecureRequest from "./API/SecureRequest/useSecureRequest";

const useUserPosts = () => {
   const { userPosts } = useSecureRequest();
   const {
      isPending,
      refetch,
      data: posts = [],
   } = useQuery({
      queryKey: ["userPosts"],
      queryFn: userPosts,
   });

   return { isPending, posts, refetch };
};

export default useUserPosts;
