import useUserPosts from "../../../../Hooks/Shared/useUserPosts";

const MyPostContainer = () => {
   const { posts } = useUserPosts();
   return (
      <>
         <div className="grid grid-cols-3 gap-4">
            <h3>Test</h3>
         </div>
      </>
   );
};

export default MyPostContainer;
