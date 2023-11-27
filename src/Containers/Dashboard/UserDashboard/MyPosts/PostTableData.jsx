import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useSecureRequest from "../../../../Hooks/Shared/API/SecureRequest/useSecureRequest";
import useUserPosts from "../../../../Hooks/Shared/useUserPosts";

const PostTableData = ({ post }) => {
   const { _id, title, upVote, downVote } = post;
   const { deletePost } = useSecureRequest();
   const { refetch } = useUserPosts();

   // Delete operation
   const handleDeletePost = (id) => {
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
            deletePost(id).then((res) => {
               if (res.id) {
                  refetch();
               }
            });
            Swal.fire({
               title: "Deleted!",
               text: "Your file has been deleted.",
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
            {title}
         </th>
         <td className="px-6 py-4">{upVote}</td>
         <td className="px-6 py-4">{downVote}</td>
         <td className="px-6 py-4">
            <div className="flex items-center gap-3">
               <Link
                  to={`/user/comments/${_id}`}
                  className="inline-flex mt-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-secondary dark:focus:ring-secondary">
                  See Comments
               </Link>
               <button
                  onClick={() => {
                     handleDeletePost(_id);
                  }}
                  className="inline-flex mt-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-red-500">
                  Delete
               </button>
            </div>
         </td>
      </tr>
   );
};

export default PostTableData;
