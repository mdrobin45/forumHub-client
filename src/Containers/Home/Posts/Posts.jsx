import usePosts from "../../../Hooks/Shared/usePosts";
import PostCard from "./postCard";

const Posts = () => {
   const { isPending, posts } = usePosts();
   return (
      <div>
         {!isPending ? (
            <>
               {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
               ))}
            </>
         ) : (
            "Loading"
         )}
      </div>
   );
};

export default Posts;
