import { useQuery } from "@tanstack/react-query";
import useSecureRequest from "./API/SecureRequest/useSecureRequest";
import useAuth from "./useAuth";

const useUser = () => {
   const { user } = useAuth();
   const { getUser } = useSecureRequest();

   // Request server for getting user role
   const { isPending, data: dbUser = {} } = useQuery({
      queryKey: ["userRole", user],
      queryFn: () => getUser(user?.email),
   });

   const userRole = dbUser?.role;

   return { userRole, isPending, dbUser };
};

export default useUser;
