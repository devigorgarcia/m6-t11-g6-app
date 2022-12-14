import {
  Avatar,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import bolinha from "../../../assets/bolinha.svg";
import { CommentContext } from "../../../contexts/CommentContext";
import { VehicleContext } from "../../../contexts/VehicleContext";
import { ICommentsData } from "../../../interfaces/Comment/contextComment.interfafe";
import jwt_decode from "jwt-decode";
import { DeleteCommentModal } from "../../Modals/DeleteCommentModal";
import { EditCommentModal } from "../../Modals/EditCommentModal";

interface ICarId {
  carId: string;
}

export const Comments = ({ carId }: ICarId) => {
  const { getComments, comments, newComment } = useContext(CommentContext);

  const { profileVehicle } = useContext(VehicleContext);

  const [userDecoded, setUserDecoded] = useState<any>({} as any);

  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const token = localStorage.getItem("@MotorShop:Token") || "";

  useEffect(() => {
    profileVehicle(carId);
    getComments(carId);
    if (token) {
      setUserDecoded(jwt_decode<any>(token));
    }
  }, [newComment]);

  const handleDate = (date: string) => {
    const commentDate = String(date);

    const [day, month, year] = commentDate.split("/");

    const usDate = [year, month, day].join("-");

    const newDate = new Date(usDate);

    const todayDate = new Date();

    const diff = Math.floor(
      (todayDate.getTime() - newDate.getTime()) / 86400000
    );

    if (diff < 1) {
      return "menos de um dia";
    }

    return `${diff} dias`;
  };

  return (
    <>
      <Flex
        bg="grey.9"
        width={["90%", "70%"]}
        margin={"0 auto"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        padding={"2rem"}
        borderRadius={"5px"}
      >
        <Heading size={"md"} justifyContent={"flex-start"} marginBottom={"5%"}>
          Coment??rios
        </Heading>
        <Flex
          flexDirection={"column"}
          justifyContent="flex-start"
          gap={"2rem"}
          marginBottom="44px"
        >
          {comments &&
            comments.map((comment: ICommentsData, index: number) => {
              return (
                <Flex key={index} flexDirection={"column"} gap={"10px"}>
                  <Flex alignItems={"center"} gap={"8px"}>
                    <Flex>
                      <Avatar name={comment.user.name} />
                    </Flex>
                    <Text>{comment.user.name}</Text>
                    <Image src={bolinha} />
                    <Text color={"#868E96"}>
                      h?? {handleDate(comment.createdAt)}
                    </Text>
                  </Flex>
                  <Text>{comment.content}</Text>

                  {userDecoded?.id && comment.userId === userDecoded.id && (
                    <>
                      <Flex gap={"2rem"}>
                        <Button bg="yellow" onClick={onOpenEdit}>
                          Editar
                        </Button>
                        <Button bg="red" color="white" onClick={onOpenDelete}>
                          Excluir
                        </Button>
                      </Flex>
                    </>
                  )}

                  <DeleteCommentModal
                    isOpenDelete={isOpenDelete}
                    onCloseDelete={onCloseDelete}
                    commentId={comment.id}
                  />
                  <EditCommentModal
                    isOpenEdit={isOpenEdit}
                    onCloseEdit={onCloseEdit}
                    commentId={comment.id}
                  />
                </Flex>
              );
            })}
        </Flex>
      </Flex>
    </>
  );
};
