import { useQuery } from "@tanstack/react-query";
import usePublicRequest from "./API/PublicRequest/usePublicRequest";

const useTags = () => {
   const { getTags } = usePublicRequest();

   let { isPending, data: tags = [] } = useQuery({
      queryKey: ["tags"],
      queryFn: () => getTags(),
   });

   return { isPending, tags };
};

export default useTags;
