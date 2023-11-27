import { useQuery } from "@tanstack/react-query";
import usePublicRequest from "./API/PublicRequest/usePublicRequest";

const useAnnounce = () => {
   const { getAllAnnounce } = usePublicRequest();

   let {
      refetch,
      isPending,
      data: announces = [],
   } = useQuery({
      queryKey: ["announces"],
      queryFn: getAllAnnounce,
   });

   announces = announces.toReversed();

   return { isPending, announces, refetch };
};

export default useAnnounce;
