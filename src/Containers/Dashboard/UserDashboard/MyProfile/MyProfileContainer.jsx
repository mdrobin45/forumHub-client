import { useState } from "react";
import useUser from "../../../../Hooks/Shared/useUser";
import useUserPosts from "../../../../Hooks/Shared/useUserPosts";
import freeUserLogo from "../../../../assets/images/free-user.png";
import vipLogo from "../../../../assets/images/vip-user.png";
import BioModal from "./BioModal";
import PostCard from "./PostCard";

const MyProfileContainer = () => {
   const { dbUser } = useUser();
   let { posts } = useUserPosts();
   const [open, setOpen] = useState(false);

   posts = posts.slice(0, 3);

   const handleClose = () => setOpen(false);
   const handleOpen = () => setOpen(true);
   return (
      <>
         <div className="bg-white mx-6 lg:w-3/4 lg:mx-auto my-20 overflow-hidden shadow rounded-lg border">
            <div className="flex items-center justify-between">
               <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                     My Profile
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                     This is some information about you.
                  </p>
               </div>
               <div className="px-4">
                  <img
                     className="w-10 md:w-20 h-10 md:h-20 rounded-full border"
                     src={
                        dbUser
                           ? dbUser.image
                           : "https://i.ibb.co/238dYyx/user.png"
                     }
                     alt="User"
                  />
               </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
               <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt className="text-sm font-medium text-gray-500">
                        Full name
                     </dt>
                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {dbUser?.name}
                     </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt className="text-sm font-medium text-gray-500">
                        Email address
                     </dt>
                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {dbUser?.email}
                     </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt className="text-sm font-medium text-gray-500">
                        Phone number
                     </dt>
                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Phone not available
                     </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt className="text-sm font-medium text-gray-500">
                        <span>Bio</span>
                        <br />
                        <button onClick={handleOpen} className="text-secondary">
                           Edit
                        </button>
                     </dt>
                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {dbUser?.bio}
                     </dd>
                  </div>
                  <div className="py-3 flex flex-col md:flex-row items-center justify-center sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt className="text-sm font-medium text-gray-500">
                        My Badge
                     </dt>
                     <div>
                        {dbUser.isPremiumMember ? (
                           <img src={vipLogo} alt="VIP" />
                        ) : (
                           <img src={freeUserLogo} alt="VIP" />
                        )}
                     </div>
                     <BioModal
                        bio={dbUser?.bio}
                        handleClose={handleClose}
                        open={open}
                     />
                  </div>
               </dl>
            </div>
         </div>
         {posts.length ? (
            <>
               <h2 className="text-3xl font-bold">Recent Posts</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                  {posts.map((post) => (
                     <PostCard key={post} post={post} />
                  ))}
               </div>
            </>
         ) : (
            ""
         )}
      </>
   );
};

export default MyProfileContainer;
