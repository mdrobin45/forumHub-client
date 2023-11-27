import moment from "moment";
import { useForm } from "react-hook-form";
import { CiStopwatch } from "react-icons/ci";
import {
   FaEnvelope,
   FaLinkedin,
   FaRegThumbsDown,
   FaRegThumbsUp,
   FaTags,
} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import {
   EmailShareButton,
   FacebookShareButton,
   LinkedinShareButton,
} from "react-share";
import { Tag } from "rsuite";
import useSecureRequest from "../../../Hooks/Shared/API/SecureRequest/useSecureRequest";
import useAuth from "../../../Hooks/Shared/useAuth";
import { showToast } from "../../../Utilities/toast";

const PostDetails = ({ postData, refetch }) => {
   const { id } = useParams();
   const { user } = useAuth();
   const { register, handleSubmit } = useForm();
   const { postComment, increaseUpVote, increaseDownVote } = useSecureRequest();
   const { _id, title, description, upVote, downVote, tag, postTime } =
      postData;

   const shareUrl =
      "https://assignment-11-robin45r.netlify.app/assignments/654ba33466a89de3f0711c30";

   // Submit comment
   const onSubmit = (data) => {
      const commentInfo = {
         commenterEmail: user?.email,
         text: data.commentText,
         post: id,
         dateTime: moment().format("MM MMM YYYY"),
      };

      // Request server with axios
      postComment(commentInfo).then((res) => {
         if (res.id) {
            showToast("Comment submitted", "success");
         }
      });
   };

   // handle up vote
   const handleUpvote = (id) => {
      if (user) {
         increaseUpVote(id).then((res) => {
            if (res.status === 200) {
               refetch();
            }
         });
      } else {
         showToast("Please login first", "error");
      }
   };

   // handle down vote
   const handleDownVote = (id) => {
      if (user) {
         increaseDownVote(id).then((res) => {
            if (res.status === 200) {
               refetch();
            }
         });
      } else {
         showToast("Please login first", "error");
      }
   };
   return (
      <>
         <div className="border rounded p-4 shadow-md">
            <div className="flex items-center justify-between py-6">
               <h2 className="text-4xl font-bold">{title}</h2>
               <div className="flex items-center gap-6">
                  <div>
                     <FaRegThumbsUp
                        onClick={() => {
                           handleUpvote(_id);
                        }}
                        className="text-xl"
                     />
                     <span>{upVote}</span>
                  </div>
                  <div>
                     <FaRegThumbsDown
                        onClick={() => {
                           handleDownVote(_id);
                        }}
                        className="text-xl"
                     />
                     <span>{downVote}</span>
                  </div>
               </div>
            </div>

            <p className="pb-3">{`${description}`}</p>
            <hr />

            <div className="flex items-center justify-between pt-6">
               <div className="flex items-center gap-6">
                  <p className="flex items-center gap-1">
                     <CiStopwatch className="text-xl" />
                     <span>{postTime}</span>
                  </p>
                  <div className="flex items-center gap-2">
                     <FaTags />
                     <Tag size="md">{tag}</Tag>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <h3 className="font-bold">Share : </h3>
                  <FacebookShareButton url={shareUrl}>
                     <FaFacebook className="text-xl" />
                  </FacebookShareButton>
                  <EmailShareButton>
                     <FaEnvelope className="text-xl" />
                  </EmailShareButton>
                  <LinkedinShareButton>
                     <FaLinkedin className="text-xl" />
                  </LinkedinShareButton>
               </div>
            </div>
         </div>
         <div className="border rounded p-4 shadow-md my-10">
            <h2 className="text-2xl font-bold pb-3">Leave a Reply</h2>

            {user ? (
               <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
                  <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                     <label htmlFor="comment" className="sr-only">
                        Your comment
                     </label>
                     <textarea
                        {...register("commentText")}
                        id="comment"
                        rows="6"
                        className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="Write a comment..."
                        required></textarea>
                  </div>
                  <button
                     type="submit"
                     className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-secondary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-secondary  hover:bg-secondary">
                     Post comment
                  </button>
               </form>
            ) : (
               <p>
                  You must be{" "}
                  <Link className="text-secondary" to="/login">
                     logged
                  </Link>{" "}
                  in to post a comment.
               </p>
            )}
         </div>
      </>
   );
};

export default PostDetails;
