import { Button } from "rsuite";
import useSecureRequest from "../../../../Hooks/Shared/API/SecureRequest/useSecureRequest";

const ReportedCommentDetails = ({ commentData }) => {
   const { commenterEmail: email, comment, reason } = commentData;

   const { patchUserData } = useSecureRequest();

   // Handle user block
   const handleUserBlock = () => {
      patchUserData({ isBlock: true }, email);
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
            <Button
               onClick={handleUserBlock}
               appearance="primary"
               color="yellow"
               className="bg-red-500 text-white hover:bg-red-600 hover:text-white">
               Block User
            </Button>
            <Button
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
