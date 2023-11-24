import useAxiosPublic from "../../useAxiosPublic";

const usePublicRequest = () => {
   const axiosPublic = useAxiosPublic();

   // Get all posts
   const getAllPosts = async () => {
      const { data } = await axiosPublic.get("/posts");
      return data;
   };

   // Generate JWT token
   const createToken = async (email) => {
      const { data } = await axiosPublic.post("/jwt", { email });
      return data;
   };

   const countComment = async (id) => {
      const { data } = await axiosPublic.get(`/comments/count?id=${id}`);
      return data;
   };

   // Save user to database when new signup
   const saveUser = async (userData) => {
      const { data } = await axiosPublic.post("/users", userData);
      return data;
   };

   return { createToken, saveUser, getAllPosts, countComment };
};

export default usePublicRequest;
