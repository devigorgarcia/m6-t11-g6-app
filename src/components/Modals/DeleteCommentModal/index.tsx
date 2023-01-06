import {
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CommentContext } from "../../../contexts/CommentContext";

interface DeleteModalProps {
  commentId: string;
  onCloseDelete: () => void;
  isOpenDelete: boolean;
}

export const DeleteCommentModal = ({
  commentId,
  onCloseDelete,
  isOpenDelete,
}: DeleteModalProps) => {
  
  const { deleteComment } = useContext(CommentContext);

  return (
    <Modal isOpen={isOpenDelete} onClose={onCloseDelete}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Excluir Comentário</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading fontSize="16px">
            Tem certeza que deseja excluir este comentário
          </Heading>
          <Text color="grey.200" mt={"1rem"}>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
            comentário e outros usuarios deixarão de vê-lo.
          </Text>
        </ModalBody>
        <ModalFooter>
          <HStack>
            <Button onClick={onCloseDelete} w={""} variant="negative">
              Cancelar
            </Button>
            <Button
              onClick={() => deleteComment(commentId, onCloseDelete)}
              w={""}
              variant="alert"
            >
              Sim, excluir comentário
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
