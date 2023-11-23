import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";

const useAuth = () => {
   const authInfo = useContext(AuthContext);
   return authInfo;
};

export default useAuth;
