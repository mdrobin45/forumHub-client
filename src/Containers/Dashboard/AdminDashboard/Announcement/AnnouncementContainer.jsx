import { useForm } from "react-hook-form";
import { Button, Input } from "rsuite";
import useSecureRequest from "../../../../Hooks/Shared/API/SecureRequest/useSecureRequest";
import useUser from "../../../../Hooks/Shared/useUser";
import { showToast } from "../../../../Utilities/toast";

const AnnouncementContainer = () => {
   const { dbUser } = useUser();
   const { register, handleSubmit } = useForm();
   const { createAnnouncement } = useSecureRequest();

   // Handle form submit
   const formSubmit = (data) => {
      const announceData = {
         ...data,
         authorName: dbUser?.name,
         image: dbUser?.image,
         status: "unread",
      };
      createAnnouncement(announceData).then((res) => {
         if (res.id) {
            showToast("Announce created", "success");
         }
      });
   };
   return (
      <div>
         <form
            className="w-2/4 shadow-md border rounded-md mx-auto my-10 p-4"
            onSubmit={handleSubmit(formSubmit)}>
            <h4 className="text-2xl font-bold text-center">Add Announcement</h4>
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
            <Button
               className="bg-secondary mt-4 text-white hover:bg-secondary hover:text-white"
               type="submit">
               Submit
            </Button>
         </form>
      </div>
   );
};

export default AnnouncementContainer;
