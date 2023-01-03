import { Flex, Heading, Image } from "@chakra-ui/react";
import car from "../../../assets/car.jpg";

export const CarImages = () => {
  return (
    <Flex
      bg="grey.9"
      width={"90%"}
      height={"350px"}
      margin={"0 auto"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      padding={"2rem"}
      borderRadius={"5px"}
    >
      <Heading size={"md"}>Fotos</Heading>
      <Flex gap={"5px"} wrap={"wrap"}>
        <Flex
          width={["90px","80px"]}
          height={["90px","80px"]}
          bg={"grey.7"}
          borderRadius={"5px"}
        >
          <Image src={car} width={"100%"} height={"60%"} margin={"auto"} />
        </Flex>
        <Flex
          width={["90px","80px"]}
          height={["90px","80px"]}
          bg={"grey.7"}
          borderRadius={"5px"}
        >
          <Image src={car} width={"100%"} height={"60%"} margin={"auto"} />
        </Flex>
        <Flex
          width={["90px","80px"]}
          height={["90px","80px"]}
          bg={"grey.7"}
          borderRadius={"5px"}
        >
          <Image src={car} width={"100%"} height={"60%"} margin={"auto"} />
        </Flex>
        <Flex
          width={["90px","80px"]}
          height={["90px","80px"]}
          bg={"grey.7"}
          borderRadius={"5px"}
        >
          <Image src={car} width={"100%"} height={"60%"} margin={"auto"} />
        </Flex>
        <Flex
          width={["90px","80px"]}
          height={["90px","80px"]}
          bg={"grey.7"}
          borderRadius={"5px"}
        >
          <Image src={car} width={"100%"} height={"60%"} margin={"auto"} />
        </Flex>
        <Flex
          width={["90px","80px"]}
          height={["90px","80px"]}
          bg={"grey.7"}
          borderRadius={"5px"}
        >
          <Image src={car} width={"100%"} height={"60%"} margin={"auto"} />
        </Flex>
      </Flex>
    </Flex>
  );
};
