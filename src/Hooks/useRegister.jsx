import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import usePublicRequest from "./Shared/API/PublicRequest/usePublicRequest";
import useAuth from "./Shared/useAuth";

// image bb api
const imageUploadAPI = `https://api.imgbb.com/1/upload?key=${
   import.meta.env.VITE_IMAGE_UPLOAD_KEY
}`;

const useRegister = () => {
   const [visible, setVisible] = useState(false);
   const { registerWithEmailPassword, profileUpdate } = useAuth();
   const { saveUser } = usePublicRequest();
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   // Form submit
   const onSubmit = async (data) => {
      // Initialize tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Please wait...",
         isLoading: true,
      });

      const imageFile = { image: data.photo[0] };

      // Image upload on image bb
      const uploadResponse = await axios.post(imageUploadAPI, imageFile, {
         headers: {
            "Content-Type": "multipart/form-data",
         },
      });

      // Register user if image upload successfully
      if (uploadResponse.data.success) {
         registerWithEmailPassword(data.email, data.password)
            .then((result) => {
               if (result.user) {
                  profileUpdate({
                     displayName: data.name,
                     photoURL: uploadResponse.data.data.display_url,
                  });

                  // Save user to database
                  const userInfo = {
                     name: data.name,
                     email: result.user?.email,
                     image: uploadResponse.data.data.display_url,
                     isPremiumMember: false,
                     role: "member",
                  };
                  saveUser(userInfo);

                  // Show toast
                  toast.update(toastMsg, {
                     render: "Registration Successful!",
                     type: "success",
                     isLoading: false,
                  });
                  navigate("/");
               }
            })
            .catch((err) => {
               toast.update(toastMsg, {
                  render: err.message,
                  type: "error",
                  isLoading: false,
               });
            });
      }
   };

   return { visible, setVisible, register, handleSubmit, onSubmit, errors };
};

export default useRegister;
