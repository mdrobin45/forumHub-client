import { useLocation, useNavigate } from "react-router-dom";
import { showToast } from "../../Utilities/toast";
import usePublicRequest from "./API/PublicRequest/usePublicRequest";
import useAuth from "./useAuth";

const useGoogleLogin = () => {
   const { loginWithGoogle } = useAuth();
   const { state } = useLocation();
   const navigate = useNavigate();
   const { saveUser } = usePublicRequest();

   // Handle signIn with google
   const handleGoogleSignIn = () => {
      loginWithGoogle()
         .then((result) => {
            if (result.user) {
               // Save user to database
               const userInfo = {
                  name: result.user?.displayName,
                  email: result.user?.email,
                  image: result.user?.photoURL,
                  isPremiumMember: false,
                  role: "member",
               };
               saveUser(userInfo);
               showToast("Login Successful!", "success");
               if (state !== null) {
                  navigate(state.from);
               } else {
                  navigate("/");
               }
            }
         })
         .catch((err) => {
            if (err) {
               showToast("Something went wrong!", "error");
            }
         });
   };

   return handleGoogleSignIn;
};

export default useGoogleLogin;
