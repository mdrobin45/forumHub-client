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
               saveUser({ email: result.user?.email, role: "patient" });
               showToast("Login Successful!", "success");
               navigate(state ? state.prevUrl : "/");
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
