import { Button, Modal } from "rsuite";

const CommentModal = ({ handleClose, open, commentText }) => {
   return (
      <Modal open={open} onClose={handleClose}>
         <Modal.Header>
            <Modal.Title>Comment</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <p>{commentText}</p>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={handleClose} appearance="subtle">
               Close
            </Button>
         </Modal.Footer>
      </Modal>
   );
};

export default CommentModal;
