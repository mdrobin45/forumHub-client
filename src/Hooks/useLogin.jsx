import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./Shared/useAuth";

const useLogin = () => {
   const [visible, setVisible] = useState(false);
   const { loginWithEmailPassword } = useAuth();
   const { state } = useLocation();
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   // Form submit
   const onSubmit = async (data) => {
      // Custom tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Processing...",
         isLoading: true,
      });

      // Firebase email password login
      loginWithEmailPassword(data.email, data.password)
         .then((result) => {
            if (result.user) {
               // Update toast
               toast.update(toastMsg, {
                  render: "Login Successful!",
                  type: "success",
                  isLoading: false,
                  autoClose: 1500,
               });
               if (state !== null) {
                  navigate(state.from);
               } else {
                  navigate("/");
               }
            }
         })
         .catch((err) => {
            if (err) {
               toast.update(toastMsg, {
                  render: "Incorrect email or password",
                  type: "error",
                  isLoading: false,
                  autoClose: 1500,
               });
            }
         });
   };

   return { visible, setVisible, register, handleSubmit, onSubmit, errors };
};

export default useLogin;
