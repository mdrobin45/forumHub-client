import useAxiosPublic from "../../useAxiosPublic";

const usePublicRequest = () => {
   const axiosPublic = useAxiosPublic();

   // Get all posts
   const getAllPosts = async () => {
      const { data } = await axiosPublic.get("/posts");
      return data;
   };

   // Get all posts
   const getSinglePostData = async (id) => {
      const { data } = await axiosPublic.get(`/posts/${id}`);
      return data;
   };

   // Post comment
   const postComment = async (commentInfo) => {
      const { data } = await axiosPublic.post(`/comments`, commentInfo);
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

   // Save user to database when new sign up
   const saveUser = async (userData) => {
      const { data } = await axiosPublic.post("/users", userData);
      return data;
   };

   return {
      createToken,
      saveUser,
      getAllPosts,
      countComment,
      getSinglePostData,
      postComment,
   };
};

export default usePublicRequest;
