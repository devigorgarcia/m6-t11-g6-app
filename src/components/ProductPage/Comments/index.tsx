import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import bolinha from "../../../assets/bolinha.svg";

export const Comments = () => {
  const name1 = "Júlia Lima";
  const firstLetter1 = name1.split(" ")[0][0];
  const secondLetter1 = name1.split(" ")[1][0];
  const avatar1 = `${firstLetter1 + secondLetter1}`;

  const name2 = "Marcos Antônio";
  const firstLetter2 = name2.split(" ")[0][0];
  const secondLetter2 = name2.split(" ")[1][0];
  const avatar2 = `${firstLetter2 + secondLetter2}`;

  const name3 = "Camila Silva";
  const firstLetter3 = name3.split(" ")[0][0];
  const secondLetter3 = name3.split(" ")[1][0];
  const avatar3 = `${firstLetter3 + secondLetter3}`;
  return (
    <Flex
      bg="#F8F9FA"
      width={"90%"}
      margin={"0 auto"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      padding={"2rem"}
      borderRadius={"5px"}
    >
      <Heading size={"md"} justifyContent={"flex-start"} marginBottom={"25px"}>
        Comentários
      </Heading>
      <Flex
        flexDirection={"column"}
        justifyContent="flex-start"
        gap={"12px"}
        marginBottom="44px"
      >
        <Flex alignItems={"center"} gap={"8px"}>
          <Flex>
            <Flex
              w="32px"
              h="32px"
              rounded="full"
              bg={"#E34D8C"}
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontSize="14px" fontWeight="700">
                {avatar1}
              </Text>
            </Flex>
          </Flex>
          <Text>{name1}</Text>
          <Image src={bolinha} />
          <Text color={"#868E96"}>há 3 dias</Text>
        </Flex>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent="flex-start"
        gap={"12px"}
        marginBottom="44px"
      >
        <Flex alignItems={"center"} gap={"8px"}>
          <Flex>
            <Flex
              w="32px"
              h="32px"
              rounded="full"
              bg="#7000FF"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontSize="14px" fontWeight="700">
                {avatar2}
              </Text>
            </Flex>
          </Flex>
          <Text>{name2}</Text>
          <Image src={bolinha} />
          <Text color={"#868E96"}>há 7 dias</Text>
        </Flex>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent="flex-start"
        gap={"12px"}
        marginBottom="44px"
      >
        <Flex alignItems={"center"} gap={"8px"}>
          <Flex>
            <Flex
              w="32px"
              h="32px"
              rounded="full"
              bg="#153D2E"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontSize="14px" fontWeight="700">
                {avatar3}
              </Text>
            </Flex>
          </Flex>
          <Text>{name3}</Text>
          <Image src={bolinha} />
          <Text color={"#868E96"}>há 1 mês</Text>
        </Flex>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </Flex>
    </Flex>
  );
};
