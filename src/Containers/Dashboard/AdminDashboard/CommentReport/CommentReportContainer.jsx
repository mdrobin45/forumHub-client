import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Pagination from "../../../../Components/Pagination/Pagination";
import useSecureRequest from "../../../../Hooks/Shared/API/SecureRequest/useSecureRequest";
import ReportedCommentDetails from "./ReportedCommentDetails";

const CommentReportContainer = () => {
   const { getReportedComments } = useSecureRequest();
   const [currentPage, setCurrentPage] = useState(1);
   const dataPerPage = 10;

   let { refetch, data: reportedComments = [] } = useQuery({
      queryKey: ["reportedComments"],
      queryFn: getReportedComments,
   });

   reportedComments = reportedComments.toReversed();

   const startIndex = (currentPage - 1) * dataPerPage;
   const endIndex = startIndex + dataPerPage;

   const totalPage = Math.ceil(reportedComments.length / dataPerPage);
   const pageNumbers = [];

   for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
   }

   const displayReportedComments = reportedComments.slice(startIndex, endIndex);

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
            {reportedComments.length ? (
               <tbody>
                  {displayReportedComments.map((comment) => (
                     <ReportedCommentDetails
                        key={comment._id}
                        commentData={comment}
                        refetch={refetch}
                     />
                  ))}
               </tbody>
            ) : (
               <>
                  <p className="pl-4 py-4">No reported comments</p>
               </>
            )}
         </table>
         {reportedComments.length > 10 ? (
            <div className="py-6 flex items-center pl-4">
               <Pagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageNumbers={pageNumbers}
                  totalPage={totalPage}
               />
            </div>
         ) : (
            ""
         )}
      </div>
   );
};

export default CommentReportContainer;
