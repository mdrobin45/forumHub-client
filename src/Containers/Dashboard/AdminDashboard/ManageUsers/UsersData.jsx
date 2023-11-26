import { Button } from "rsuite";
import Swal from "sweetalert2";
import useSecureRequest from "../../../../Hooks/Shared/API/SecureRequest/useSecureRequest";

const UsersData = ({ user, refetch }) => {
   const { makeAdmin } = useSecureRequest();
   const { name, email, isPremiumMember, role } = user;

   // handle make admin
   const handleMakeAdmin = () => {
      Swal.fire({
         title: "Are you sure?",
         text: "This user will be an admin",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes",
      }).then((result) => {
         if (result.isConfirmed) {
            makeAdmin(email).then((res) => {
               if (res) {
                  refetch();
               }
            });
            Swal.fire({
               title: "User Updated!",
               text: "This user can manage all data",
               icon: "success",
            });
         }
      });
   };
   return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
         <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {name}
         </th>
         <td className="px-6 py-4">{email}</td>
         <td className="px-6 py-4">{isPremiumMember ? "Premium" : "Free"}</td>
         <td className="px-6 py-4">
            {role === "admin" ? (
               "Already Admin"
            ) : (
               <Button
                  onClick={handleMakeAdmin}
                  appearance="primary"
                  color="#6A7BF0"
                  className="bg-secondary text-white hover:bg-secondary hover:text-white">
                  Make Admin
               </Button>
            )}
         </td>
      </tr>
   );
};

export default UsersData;
