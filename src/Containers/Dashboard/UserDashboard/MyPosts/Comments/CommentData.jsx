import { useEffect, useState } from "react";
import { Button } from "rsuite";
import useSecureRequest from "../../../../../Hooks/Shared/API/SecureRequest/useSecureRequest";
import { showToast } from "../../../../../Utilities/toast";
import CommentModal from "./CommentModal";

const CommentData = ({ comment }) => {
   const { reportComment } = useSecureRequest();
   const [open, setOpen] = useState(false);
   const [textExceed, setTextExceed] = useState(false);
   const [reason, setReason] = useState(false);
   const { commenterEmail, text } = comment;
   const [reportData, setReportData] = useState({
      commenterEmail,
      comment: text,
   });

   const handleClose = () => setOpen(false);
   const handleOpen = () => setOpen(true);

   useEffect(() => {
      if (text.length > 20) {
         setTextExceed(true);
      }
   }, [text.length]);

   const shortText = text.slice(0, 20);

   const feedbackChangeHandler = (e) => {
      const value = e.target.value;
      setReportData((prevData) => ({ ...prevData, reason: value }));

      if (value != 0) {
         setReason(true);
      } else {
         setReason(false);
      }
   };

   // handle report comment
   const handleReport = () => {
      reportComment(reportData).then((res) => {
         if (res.id) {
            showToast("Report submitted", "success");
            setReason(false);
         }
      });
   };
   return (
      <>
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
               scope="row"
               className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               {commenterEmail}
            </th>
            <td className="px-6 py-4">
               {!textExceed ? text : shortText}{" "}
               {textExceed && (
                  <button onClick={handleOpen} className="text-secondary">
                     See more
                  </button>
               )}
            </td>
            <td className="px-6 py-4">
               <select
                  onChange={feedbackChangeHandler}
                  id="countries"
                  className="bg-gray-50 p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value={0} selected>
                     Select Reason
                  </option>
                  <option value="Spam or Unwanted Commercial Content">
                     Spam or Unwanted Commercial Content
                  </option>
                  <option value="Hate Speech or Offensive Language">
                     Hate Speech or Offensive Language
                  </option>
                  <option value="Personal Attacks or Harassment">
                     Personal Attacks or Harassment
                  </option>
                  <option value="Violence or Threats">
                     Violence or Threats
                  </option>
               </select>
            </td>
            <td className="px-6 py-4">
               <Button
                  onClick={handleReport}
                  appearance="primary"
                  color="red"
                  disabled={!reason ? true : false}
                  className="bg-red-500 text-white hover:bg-red-600 hover:text-white">
                  Report
               </Button>
            </td>
         </tr>
         <CommentModal
            commentText={text}
            handleClose={handleClose}
            open={open}
         />
      </>
   );
};

export default CommentData;
