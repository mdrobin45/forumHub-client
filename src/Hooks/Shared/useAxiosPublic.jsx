import axios from "axios";

const axiosPublic = axios.create({
   baseURL: "http://localhost:3000",
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
