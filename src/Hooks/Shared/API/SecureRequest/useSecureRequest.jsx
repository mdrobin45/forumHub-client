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

   // Get user role
   const getUser = async (email) => {
      const { data } = await axiosSecure.get(`/users?email=${email}`);
      return data;
   };

   return { postComment, changeUserMembership, getUser };
};

export default useSecureRequest;
