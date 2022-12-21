import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import bolinha from "../../../assets/bolinha.svg";
import { IIComments } from "../../../interfaces/VehicleContext/Vehicle.interfaces";

export const Comments = ({ comments }: IIComments) => {
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
        <Text>Adoro dirigir em estradas de montanha com este carro!</Text>
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
          Eu amei este carro! Ele é tão potente e tem um ótimo sistema de som.
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
          Eu prefiro carros elétricos porque são mais amigos do ambiente.
        </Text>
      </Flex>
    </Flex>
  );
};
