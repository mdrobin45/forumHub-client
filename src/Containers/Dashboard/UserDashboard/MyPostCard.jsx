import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useSecureRequest from "../../../Hooks/Shared/API/SecureRequest/useSecureRequest";
import useUserPosts from "../../../Hooks/Shared/useUserPosts";

const MyPostCard = ({ post }) => {
   const { deletePost } = useSecureRequest();
   const { refetch } = useUserPosts();
   const { _id, title, upVote, downVote } = post;

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
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
         </h5>

         <div className="flex items-center gap-4 pt-4">
            <div>
               <FaRegThumbsUp className="text-xl" />
               <span>{upVote}</span>
            </div>
            <div>
               <FaRegThumbsDown className="text-xl" />
               <span>{downVote}</span>
            </div>
         </div>

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
      </div>
   );
};

export default MyPostCard;
