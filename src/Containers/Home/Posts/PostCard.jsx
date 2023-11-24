import { useQuery } from "@tanstack/react-query";
import { FaRegThumbsUp, FaTags } from "react-icons/fa";
import { FaMessage, FaRegThumbsDown } from "react-icons/fa6";
import { IoMdStopwatch } from "react-icons/io";
import { Tag } from "rsuite";
import usePublicRequest from "../../../Hooks/Shared/API/PublicRequest/usePublicRequest";

const PostCard = ({ post }) => {
   const { countComment } = usePublicRequest();
   const { _id, title, description, tags, postTime, upVote, downVote, author } =
      post;

   const { data = 0 } = useQuery({
      queryKey: ["commentsCount", _id],
      queryFn: () => countComment(_id),
   });
   return (
      <div className="flex gap-10 my-4 border p-3">
         <div>
            <img
               className="w-10 h-10 rounded-full"
               src={author.image}
               alt="Rounded avatar"
            />
         </div>
         <div className="flex gap-7 items-center justify-between w-full">
            <div>
               <h2 className="text-2xl font-bold">{title}</h2>
               <div className="flex items-center gap-4 py-4">
                  <div className="flex gap-2 items-center">
                     {tags.map((tag, index) => (
                        <div key={index} className="flex items-center gap-2">
                           <FaTags />
                           <Tag size="md">{tag}</Tag>
                        </div>
                     ))}
                  </div>
                  <div className="flex text-gray-500 items-center gap-3">
                     <IoMdStopwatch />
                     <span>{postTime}</span>
                  </div>
               </div>
               <p className="text-gray-400">{description}</p>
               <div className="flex items-center gap-4 pt-4">
                  <div>
                     <FaRegThumbsUp className="text-xl" />
                     <span>{upVote}</span>
                  </div>
                  <div>
                     <FaRegThumbsDown className="text-xl" />
                     <span>{downVote}</span>
                  </div>
               </div>
            </div>
            <div className="text-center">
               <FaMessage className="text-4xl text-gray-500" />
               <span>{data?.count}</span>
            </div>
         </div>
      </div>
   );
};

export default PostCard;
