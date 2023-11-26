import useUserPosts from "../../../Hooks/Shared/useUserPosts";
import MyPostCard from "./MyPostCard";

const MyPostContainer = () => {
   const { posts } = useUserPosts();
   return (
      <>
         <div className="grid grid-cols-3 gap-4">
            {posts.map((post) => (
               <MyPostCard key={post._id} post={post} />
            ))}
         </div>
      </>
   );
};

export default MyPostContainer;
