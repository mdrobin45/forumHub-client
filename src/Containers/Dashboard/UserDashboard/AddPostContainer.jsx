import moment from "moment";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Input } from "rsuite";
import useSecureRequest from "../../../Hooks/Shared/API/SecureRequest/useSecureRequest";
import useUser from "../../../Hooks/Shared/useUser";
import useUserPosts from "../../../Hooks/Shared/useUserPosts";
import { showToast } from "../../../Utilities/toast";

const AddPostContainer = () => {
   const { AddPost } = useSecureRequest();
   const { posts, refetch } = useUserPosts();
   const { dbUser } = useUser();
   const { register, handleSubmit } = useForm();

   // Form submit
   const formSubmit = (data) => {
      const postTime = moment().format("MM MMM YYYY");
      const postInfo = { ...data, postTime, author: dbUser?._id };

      if (dbUser.isPremiumMember) {
         AddPost(postInfo).then((res) => {
            if (res.id) {
               refetch();
               showToast("Post added", "success");
            }
         });
      } else {
         if (posts.length < 5) {
            AddPost(postInfo).then((res) => {
               if (res.id) {
                  refetch();
                  showToast("Post added", "success");
               }
            });
         } else {
            showToast("Your post limited! Become our member", "error");
         }
      }
   };

   return (
      <div>
         {!dbUser.isPremiumMember && posts.length >= 5 ? (
            <>
               <div className="h-[80vh] flex items-center justify-center flex-col">
                  <Link
                     className="bg-secondary py-2 px-2 rounded text-white"
                     to="/membership">
                     Become a Member
                  </Link>
                  <p className="pt-3">You are limited user</p>
               </div>
            </>
         ) : (
            <>
               <form
                  className="w-2/4 shadow-md border rounded-md mx-auto my-10 p-4"
                  onSubmit={handleSubmit(formSubmit)}>
                  <h4 className="text-2xl font-bold text-center">Add Post</h4>
                  <div className="pb-3">
                     <label htmlFor="title">Title</label>
                     <Input
                        {...register("title")}
                        style={{ width: "100%", marginTop: "7px" }}
                        id="title"
                        placeholder="Title"
                     />
                  </div>
                  <div className="pb-3">
                     <label htmlFor="description">Description</label>
                     <Input
                        {...register("description")}
                        style={{ width: "100%", marginTop: "7px" }}
                        as="textarea"
                        rows={3}
                        placeholder="Description"
                     />
                  </div>
                  <div>
                     <label className="block" htmlFor="description">
                        Tag
                     </label>
                     <select
                        {...register("tag")}
                        id="tag"
                        className="bg-white border py-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Tag</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                     </select>
                  </div>
                  <Button
                     className="bg-secondary mt-4 text-white hover:bg-secondary hover:text-white"
                     type="submit">
                     Submit
                  </Button>
               </form>
            </>
         )}
      </div>
   );
};

export default AddPostContainer;
