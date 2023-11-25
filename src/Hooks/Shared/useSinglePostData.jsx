import { useQuery } from "@tanstack/react-query";
import usePublicRequest from "./API/PublicRequest/usePublicRequest";

const useSinglePostData = (id) => {
   const { getSinglePostData } = usePublicRequest();

   const { isPending, data: postData = {} } = useQuery({
      queryKey: ["post Data"],
      queryFn: () => getSinglePostData(id),
   });

   return { isPending, postData };
};

export default useSinglePostData;
