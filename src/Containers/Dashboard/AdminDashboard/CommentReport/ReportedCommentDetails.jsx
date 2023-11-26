import { Button } from "rsuite";

const ReportedCommentDetails = ({ commentData }) => {
   const { commenterEmail: email, comment, reason } = commentData;
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
               appearance="primary"
               color="yellow"
               className="bg-yellow-600 text-white hover:bg-yellow-600 hover:text-white">
               Give Warning
            </Button>
         </td>
      </tr>
   );
};

export default ReportedCommentDetails;
