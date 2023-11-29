import { useForm } from "react-hook-form";
import { Button, Input, Modal } from "rsuite";
import useSecureRequest from "../../../../Hooks/Shared/API/SecureRequest/useSecureRequest";
import useAuth from "../../../../Hooks/Shared/useAuth";
import useUser from "../../../../Hooks/Shared/useUser";
import { showToast } from "../../../../Utilities/toast";

const BioModal = ({ handleClose, open, bio }) => {
   const { register, handleSubmit } = useForm();
   const { patchUserData } = useSecureRequest();
   const { user } = useAuth();
   const { refetch } = useUser();

   // Form submit handler
   const onSubmit = (data) => {
      patchUserData(data, user?.email).then((res) => {
         if (res.status === 200) {
            refetch();
            handleClose();
            showToast("Bio updated", "success");
         }
      });
   };
   return (
      <Modal open={open} onClose={handleClose}>
         <Modal.Header>
            <Modal.Title>Edit Bio</Modal.Title>
         </Modal.Header>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Body>
               <Input
                  {...register("bio")}
                  as="textarea"
                  rows="4"
                  defaultValue={bio}
               />
            </Modal.Body>
            <Modal.Footer>
               <Button
                  type="submit"
                  color="blue"
                  className="bg-blue-500"
                  appearance="primary">
                  Save
               </Button>
            </Modal.Footer>
         </form>
      </Modal>
   );
};

export default BioModal;
