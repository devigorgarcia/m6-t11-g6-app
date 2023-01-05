import { Avatar, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import bolinha from "../../../assets/bolinha.svg";
import { CommentContext } from "../../../contexts/CommentContext";
import { VehicleContext } from "../../../contexts/VehicleContext";
import { ICommentsData } from "../../../interfaces/Comment/contextComment.interfafe";

interface ICarId {
  carId: string;
}
export const Comments = ({ carId }: ICarId) => {
  const { getComments, comments } = useContext(CommentContext);
  const { profileVehicle, vehicleInfo } = useContext(VehicleContext);

  profileVehicle(carId)
  
  useEffect(() => {
    getComments(carId);
  }, [vehicleInfo.Comment]);

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
          Comentários
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
                    <Text color={"#868E96"}>{comment.createAt}</Text>
                  </Flex>
                  <Text>{comment.content}</Text>
                </Flex>
              );
            })}
        </Flex>
      </Flex>
    </>
  );
};
