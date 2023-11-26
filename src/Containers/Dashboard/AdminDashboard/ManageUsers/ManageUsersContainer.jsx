import { useQuery } from "@tanstack/react-query";
import useSecureRequest from "../../../../Hooks/Shared/API/SecureRequest/useSecureRequest";
import UsersData from "./UsersData";

const ManageUsersContainer = () => {
   const { getAllUsers } = useSecureRequest();
   const { refetch, data: users = [] } = useQuery({
      queryKey: ["users"],
      queryFn: getAllUsers,
   });

   return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
               <tr>
                  <th scope="col" className="px-6 py-3">
                     User Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Subscription
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Action
                  </th>
               </tr>
            </thead>
            <tbody>
               {users.map((user) => (
                  <UsersData refetch={refetch} key={user._id} user={user} />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default ManageUsersContainer;
