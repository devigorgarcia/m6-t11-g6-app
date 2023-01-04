import {
  Avatar,
  Button,
  Flex,
  FormControl,
  HStack,
  Tag,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { CommentContext } from "../../../contexts/CommentContext";
import {
  ICommentContextInfo,
  IContent,
} from "../../../interfaces/Comment/contextComment.interfafe";
import jwt_decode from "jwt-decode";
import { UserContext } from "../../../contexts/UserContext";


export const CommentBox = ({ owner, carId }: ICommentContextInfo) => {
  const { handleSubmit, register } = useForm<IContent>({});

  const { getUserProfile, userProfile } = useContext(UserContext);
  const { createComment } = useContext(CommentContext);
  const token = localStorage.getItem("@MotorShop:Token");

  useEffect(() => {
    if (token) {
      let decodeToken = jwt_decode<any>(token);
      getUserProfile(decodeToken.id);
    }
  }, []);

  console.log(userProfile);

  const onSubmit = (content: any) => {
    createComment(content, carId);
  };

  return (
    <>
      {owner ? (
        <Flex
          bg="grey.9"
          width={["90%", "70%"]}
          margin={"0 auto"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
          padding={"2rem"}
          borderRadius={"5px"}
          gap={"24px"}
          marginBottom={"45px"}
        >
          <Flex alignItems={"center"} gap={"8px"}>
            <Avatar name={userProfile.name} />
            <Text fontSize="20px" fontWeight="700">
              {userProfile.name}
            </Text>
          </Flex>
          <FormControl as={"form"} onSubmit={handleSubmit(onSubmit)}>
            <Flex flexDirection={"column"} gap={"1rem"}>
              <Textarea
                placeholder="Digitar comentário..."
                {...register("content")}
              />
              <Button
                bg={"#4529E6"}
                color={"white"}
                fontSize={"md"}
                type={"submit"}
              >
                Comentar
              </Button>
            </Flex>
          </FormControl>
          <HStack wrap={"wrap"} gap={"24px"}>
            <Tag size={"md"} variant="solid" color={"#868E96"} bg={"#E9ECEF"}>
              Gostei muito!
            </Tag>
            <Tag size={"md"} variant="solid" color={"#868E96"} bg={"#E9ECEF"}>
              Incrível
            </Tag>
            <Tag size={"md"} variant="solid" color={"#868E96"} bg={"#E9ECEF"}>
              Recomendarei para meus amigos!
            </Tag>
          </HStack>
        </Flex>
      ) : (
        <></>
      )}
    </>
  );
};
