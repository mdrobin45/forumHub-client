import { useQuery } from "@tanstack/react-query";
import usePublicRequest from "./API/PublicRequest/usePublicRequest";

const useSinglePostData = (id) => {
   const { getSinglePostData } = usePublicRequest();

   const {
      refetch,
      isPending,
      data: postData = {},
   } = useQuery({
      queryKey: ["SinglePostData"],
      queryFn: () => getSinglePostData(id),
   });

   return { isPending, postData, refetch };
};

export default useSinglePostData;
