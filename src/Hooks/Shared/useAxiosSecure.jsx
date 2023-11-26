import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";

const useAxiosSecure = () => {
   const { logOut } = useAuth();
   const navigate = useNavigate();

   const axiosSecure = axios.create({
      baseURL: import.meta.env.VITE_SERVER_URL,
      withCredentials: true,
   });

   // Request interceptor
   axiosSecure.interceptors.request.use((config) => {
      return config;
   });

   // Response interceptor
   axiosSecure.interceptors.response.use(
      (response) => {
         return response;
      },
      (err) => {
         if (err.response.status === 401 || err.response.status === 403) {
            logOut().then(() => {
               toast.error("Unauthorized access");
               navigate("/login");
            });
         }
      }
   );

   return axiosSecure;
};

export default useAxiosSecure;
