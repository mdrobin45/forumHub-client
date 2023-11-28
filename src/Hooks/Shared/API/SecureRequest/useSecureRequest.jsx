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
   const patchUserData = async (updateInfo, email) => {
      const { data } = await axiosSecure.patch(
         `/users?email=${email}`,
         updateInfo
      );

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

   // Search user
   const searchUser = async (searchText) => {
      const { data } = await axiosSecure.get(
         `/users/search?search=${searchText}`
      );
      return data;
   };

   // Total users
   const totalUsers = async () => {
      const { data } = await axiosSecure.get("/users/total");
      return data;
   };

   // Total Posts
   const totalPosts = async () => {
      const { data } = await axiosSecure.get("/posts/total");
      return data;
   };

   // Total Comments
   const totalComments = async () => {
      const { data } = await axiosSecure.get("/comments/total");
      return data;
   };

   return {
      totalUsers,
      totalPosts,
      totalComments,
      postComment,
      patchUserData,
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
      searchUser,
   };
};

export default useSecureRequest;
