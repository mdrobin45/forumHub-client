import useAxiosPublic from "../../useAxiosPublic";

const usePublicRequest = () => {
   const axiosPublic = useAxiosPublic();

   // Generate JWT token
   const createToken = async (email) => {
      const { data } = await axiosPublic.post("/jwt", { email });
      return data;
   };

   // Save user to database when new signup
   const saveUser = async (userData) => {
      const { data } = await axiosPublic.post("/users", userData);
      return data;
   };

   return { createToken, saveUser };
};

export default usePublicRequest;
