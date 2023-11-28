import { useForm } from "react-hook-form";
import { Button, Input } from "rsuite";
import useSecureRequest from "../../../../../Hooks/Shared/API/SecureRequest/useSecureRequest";
import { showToast } from "../../../../../Utilities/toast";

const AddTag = () => {
   const { register, reset, handleSubmit } = useForm();
   const { addTag } = useSecureRequest();

   // Submit form
   const formSubmit = (data) => {
      addTag(data.name).then((res) => {
         if (res.id) {
            reset();
            showToast("New tag added", "success");
         }
      });
   };
   return (
      <form
         className="w-2/4 shadow-md border rounded-md mx-auto p-4"
         onSubmit={handleSubmit(formSubmit)}>
         <h4 className="text-2xl font-bold text-center">Add New Tag</h4>
         <div className="pb-3">
            <label htmlFor="title">Title</label>
            <Input
               {...register("name")}
               style={{ width: "100%", marginTop: "7px" }}
               id="tag"
               placeholder="Tag name"
            />
         </div>
         <Button
            className="bg-secondary mt-4 text-white hover:bg-secondary hover:text-white"
            type="submit">
            Submit
         </Button>
      </form>
   );
};

export default AddTag;
