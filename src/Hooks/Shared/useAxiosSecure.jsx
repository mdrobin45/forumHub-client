import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
   baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
   const { logOut } = useAuth();
   const navigate = useNavigate();

   // Request interceptor
   axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access_token");
      config.headers.Authorization = token && `Bearer ${token}`;
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
