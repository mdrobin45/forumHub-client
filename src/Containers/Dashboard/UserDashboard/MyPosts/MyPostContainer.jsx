import useUserPosts from "../../../../Hooks/Shared/useUserPosts";
import PostTableData from "./PostTableData";

const MyPostContainer = () => {
   const { posts } = useUserPosts();
   return (
      <>
         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" className="px-6 py-3">
                        Title
                     </th>
                     <th scope="col" className="px-6 text-center py-3">
                        Up Vote
                     </th>
                     <th scope="col" className="px-6 text-center py-3">
                        Down Vote
                     </th>
                     <th scope="col" className="px-6 text-center py-3">
                        Comments
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Action
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {posts.map((post) => (
                     <PostTableData key={post._id} post={post} />
                  ))}
               </tbody>
            </table>
         </div>
      </>
   );
};

export default MyPostContainer;
