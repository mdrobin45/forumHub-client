import axios from "axios";

const axiosPublic = axios.create({
   baseURL: import.meta.env.VITE_SERVER_URL,
   withCredentials: true,
});

const useAxiosPublic = () => {
   // Response interceptor
   axiosPublic.interceptors.response.use((response) => {
      return response;
   });

   return axiosPublic;
};

export default useAxiosPublic;
