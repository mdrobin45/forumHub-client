import { useParams } from "react-router-dom";
import useSinglePostData from "../../Hooks/Shared/useSinglePostData";
import AuthorProfile from "./AuthorProfile/AuthorProfile";
import PostDetails from "./PostDetails/PostDetails";

const SinglePostContainer = () => {
   const { id } = useParams();
   const { isPending, postData, refetch } = useSinglePostData(id);
   return (
      <>
         {!isPending ? (
            <div>
               <AuthorProfile postData={postData} />
               <PostDetails refetch={refetch} postData={postData} />
            </div>
         ) : (
            "Loading"
         )}
      </>
   );
};

export default SinglePostContainer;
