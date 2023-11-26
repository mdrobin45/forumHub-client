import { useQuery } from "@tanstack/react-query";
import useSecureRequest from "../../../../Hooks/Shared/API/SecureRequest/useSecureRequest";
import ReportedCommentDetails from "./ReportedCommentDetails";

const CommentReportContainer = () => {
   const { getReportedComments } = useSecureRequest();

   const { data: reportedComments = [] } = useQuery({
      queryKey: ["reportedComments"],
      queryFn: getReportedComments,
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
                     Comment
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Reason
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Action
                  </th>
               </tr>
            </thead>
            <tbody>
               {reportedComments.map((comment) => (
                  <ReportedCommentDetails
                     key={comment._id}
                     commentData={comment}
                  />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default CommentReportContainer;
