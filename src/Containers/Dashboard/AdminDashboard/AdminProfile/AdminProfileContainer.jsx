import { useQuery } from "@tanstack/react-query";
import { CgMenuGridR } from "react-icons/cg";
import { FaComments } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import FeaturedCard from "../../../../Components/Dashboard/FeaturedCard";
import useSecureRequest from "../../../../Hooks/Shared/API/SecureRequest/useSecureRequest";
import AddTag from "./AddTag/AddTag";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";

const AdminProfileContainer = () => {
   const { totalUsers, totalPosts, totalComments } = useSecureRequest();

   // Get posts
   const { data: posts = 0 } = useQuery({
      queryKey: ["totalPosts"],
      queryFn: totalPosts,
   });

   // Get users
   const { data: users = 0 } = useQuery({
      queryKey: ["totalUsers"],
      queryFn: totalUsers,
   });

   // Get comments
   const { data: comments = 0 } = useQuery({
      queryKey: ["totalComments"],
      queryFn: totalComments,
   });

   return (
      <div>
         <div className="grid grid-cols-3 gap-6">
            <FeaturedCard
               icon={<CgMenuGridR />}
               counter={posts}
               name="Total Posts"
            />
            <FeaturedCard
               icon={<FaComments />}
               counter={comments}
               name="Total Comments"
            />
            <FeaturedCard
               icon={<FaUsersLine />}
               counter={users}
               name="Total Users"
            />
         </div>
         <div className="flex items-start gap-4 py-20">
            <Profile />
            <AddTag />
         </div>
         <Statistics />
      </div>
   );
};

export default AdminProfileContainer;
