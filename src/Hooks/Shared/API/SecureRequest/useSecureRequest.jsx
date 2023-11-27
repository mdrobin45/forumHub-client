import useAuth from "../../useAuth";
import useAxiosSecure from "../../useAxiosSecure";

const useSecureRequest = () => {
   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();

   // Post comment
   const postComment = async (commentInfo) => {
      const { data } = await axiosSecure.post(`/comments`, commentInfo);
      return data;
   };

   // update user membership after payment
   const changeUserMembership = async () => {
      const { data } = await axiosSecure.patch(`/users?email=${user?.email}`, {
         isPremiumMember: true,
      });

      return data;
   };

   // Get user
   const getUser = async (email) => {
      const { data } = await axiosSecure.get(`/users?email=${email}`);
      return data;
   };

   // Add a post
   const AddPost = async (postDetails) => {
      const { data } = await axiosSecure.post(`/posts`, postDetails);
      return data;
   };

   // Get posts by user
   const userPosts = async () => {
      const { data } = await axiosSecure.get(
         `/posts/user?email=${user?.email}`
      );
      return data;
   };

   // Delete a post
   const deletePost = async (id) => {
      const { data } = await axiosSecure.delete(`/posts/${id}`);
      return data;
   };

   // Get comments of a post
   const getComments = async (id) => {
      const { data } = await axiosSecure.get(`/comments/post?id=${id}`);
      return data;
   };

   // Add comment report
   const reportComment = async (reportData) => {
      const { data } = await axiosSecure.post(`/comments/report`, reportData);
      return data;
   };

   // Get reported comments
   const getReportedComments = async () => {
      const { data } = await axiosSecure.get("/comments/report/all");
      return data;
   };

   // get all users
   const getAllUsers = async () => {
      const { data } = await axiosSecure.get("/users/all");
      return data;
   };

   // Make admin
   const makeAdmin = async (email) => {
      const { data } = await axiosSecure.patch(`/users?email=${email}`, {
         role: "admin",
      });
      return data;
   };

   // Create announcement
   const createAnnouncement = async (annData) => {
      const { data } = await axiosSecure.post("/announce", annData);
      return data;
   };

   // upVote update
   const increaseUpVote = async (id) => {
      const { data } = await axiosSecure.put(`/posts/upvote/${id}`);
      return data;
   };

   // upVote downVote
   const increaseDownVote = async (id) => {
      const { data } = await axiosSecure.put(`/posts/downvote/${id}`);
      return data;
   };

   return {
      postComment,
      changeUserMembership,
      deletePost,
      getUser,
      AddPost,
      userPosts,
      increaseUpVote,
      getComments,
      reportComment,
      getAllUsers,
      makeAdmin,
      createAnnouncement,
      getReportedComments,
      increaseDownVote,
   };
};

export default useSecureRequest;
