import { useQuery } from "@tanstack/react-query";
import { Button } from "rsuite";
import Swal from "sweetalert2";
import useSecureRequest from "../../../../Hooks/Shared/API/SecureRequest/useSecureRequest";

const ReportedCommentDetails = ({ commentData, refetch }) => {
   const {
      _id,
      commenterEmail: email,
      comment,
      reason,
      commentId,
   } = commentData;

   const { patchUserData, deleteComment, deleteReportComment } =
      useSecureRequest();
   const { getUser } = useSecureRequest();

   const { refetch: userRefetch, data: user = {} } = useQuery({
      queryKey: ["commenter", email],
      queryFn: () => getUser(email),
   });

   // Handle user block
   const handleUserBlock = () => {
      patchUserData({ isBlock: true }, email).then(() => userRefetch());
   };
   // Handle user block
   const handleUserUnblock = () => {
      patchUserData({ isBlock: false }, email).then(() => userRefetch());
   };

   // Handle delete comment
   const handleDelete = (id, reportId) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            deleteComment(id).then((res) => {
               if (!res.id) {
                  return;
               }
            });
            deleteReportComment(reportId).then((res) => {
               if (res.id) {
                  refetch();
                  Swal.fire({
                     title: "Deleted!",
                     text: "Your file has been deleted.",
                     icon: "success",
                  });
               }
            });
         }
      });
   };

   return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
         <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {email}
         </th>
         <td className="px-6 py-4">{comment}</td>
         <td className="px-6 py-4">{reason}</td>
         <td className="px-6 py-4">
            {user.isBlock ? (
               <Button
                  onClick={handleUserUnblock}
                  appearance="primary"
                  color="yellow"
                  className="bg-red-500 text-white hover:bg-red-600 hover:text-white">
                  Unblock
               </Button>
            ) : (
               <Button
                  onClick={handleUserBlock}
                  appearance="primary"
                  color="yellow"
                  className="bg-red-500 text-white hover:bg-red-600 hover:text-white">
                  Block User
               </Button>
            )}

            <Button
               onClick={() => {
                  handleDelete(commentId, _id);
               }}
               appearance="primary"
               color="yellow"
               className="bg-primary ml-3 text-white hover:bg-primary hover:text-white">
               Delete Comment
            </Button>
         </td>
      </tr>
   );
};

export default ReportedCommentDetails;
