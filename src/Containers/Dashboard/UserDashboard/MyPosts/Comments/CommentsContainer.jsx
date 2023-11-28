import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useSecureRequest from "../../../../../Hooks/Shared/API/SecureRequest/useSecureRequest";
import CommentData from "./CommentData";
const CommentsContainer = () => {
   const { id } = useParams();
   const { getComments } = useSecureRequest();

   const { data: comments = [] } = useQuery({
      queryKey: ["comments"],
      queryFn: () => getComments(id),
   });

   return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
               <tr>
                  <th scope="col" className="px-6 py-3">
                     Commenter Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Text
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Feedback
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Action
                  </th>
               </tr>
            </thead>
            {comments.length ? (
               <tbody>
                  {comments.map((comment) => (
                     <CommentData key={comment._id} comment={comment} />
                  ))}
               </tbody>
            ) : (
               <>
                  <p className="py-4 pl-6">No comments found</p>
               </>
            )}
         </table>
      </div>
   );
};

export default CommentsContainer;
