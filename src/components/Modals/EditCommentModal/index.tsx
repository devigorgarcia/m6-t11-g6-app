import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { CommentContext } from "../../../contexts/CommentContext";

interface EditPropsModal {
  commentId: string;
  isOpenEdit: boolean;
  onCloseEdit: () => void;
}

export const EditCommentModal = ({
  commentId,
  isOpenEdit,
  onCloseEdit,
}: EditPropsModal) => {

  const { getOneComment, oneComment, updateComment } =useContext(CommentContext);
  
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    getOneComment(commentId);
  }, [commentId]);

  const initialRef = React.useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edite seu comentário</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                ref={initialRef}
                defaultValue={oneComment.content}
                onChange={(e) => setNewContent(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => updateComment(commentId, newContent, onCloseEdit)}
            >
              Editar Comentário
            </Button>
            <Button onClick={onCloseEdit}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
