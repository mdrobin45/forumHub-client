import useUser from "../../../../../Hooks/Shared/useUser";

const Profile = () => {
   const { dbUser } = useUser();
   return (
      <div className="bg-white w-2/4 my-20 overflow-hidden shadow rounded-lg border">
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
                     dbUser ? dbUser.image : "https://i.ibb.co/238dYyx/user.png"
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
            </dl>
         </div>
      </div>
   );
};

export default Profile;
