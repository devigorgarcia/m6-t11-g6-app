import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  Textarea,
} from "@chakra-ui/react";
import car from "../../assets/car.jpg";
import bolinha from "../../assets/bolinha.svg";

export const ProductPage = () => {
  const name = "Samuel Leão";
  const firstLetter = name.split(" ")[0][0];
  const secondLetter = name.split(" ")[1][0];
  const avatar = `${firstLetter + secondLetter}`;

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
      flexDirection={"column"}
      bg={"linear-gradient(#4529E6 15%, #FFFFFF 0%)"}
      gap={"20px"}
    >
      <Flex
        bg={"#FDFDFD"}
        width={"90%"}
        height={"355px"}
        margin={"10% auto 0 auto"}
        borderRadius={"5px"}
      >
        <Image
          src={car}
          width={"350px"}
          height={"300px"}
          margin={"auto auto"}
        />
      </Flex>
      <Flex
        bg="#F8F9FA"
        width={"90%"}
        height={"350px"}
        margin={"0 auto"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        padding={"2rem"}
        borderRadius={"5px"}
      >
        <Heading size={"lg"}>
          Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
        </Heading>
        <HStack spacing={"4"}>
          <Tag size={"lg"} variant="solid" bg={"#EDEAFD"} color={"#4529E6"}>
            2013
          </Tag>
          <Tag size={"lg"} variant="solid" bg={"#EDEAFD"} color={"#4529E6"}>
            0 KM
          </Tag>
        </HStack>
        <Text fontWeight={"700"} fontSize={"lg"}>
          R$ 00.000,00
        </Text>
        <Button bg={"#4529E6"} color={"white"} fontSize={"lg"}>
          Comprar
        </Button>
      </Flex>
      <Flex
        bg="#F8F9FA"
        width={"90%"}
        height={"350px"}
        margin={"0 auto"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        padding={"2rem"}
        borderRadius={"5px"}
      >
        <Heading size={"md"}>Descrição</Heading>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </Flex>
      <Flex
        bg="#F8F9FA"
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
            width={"90px"}
            height={"90px"}
            bg={"#E9ECEF"}
            borderRadius={"5px"}
          >
            <Image src={car} width={"100%"} height={"60%"} margin={"auto"} />
          </Flex>
          <Flex
            width={"90px"}
            height={"90px"}
            bg={"#E9ECEF"}
            borderRadius={"5px"}
          >
            <Image src={car} width={"100%"} height={"60%"} margin={"auto"} />
          </Flex>
          <Flex
            width={"90px"}
            height={"90px"}
            bg={"#E9ECEF"}
            borderRadius={"5px"}
          >
            <Image src={car} width={"100%"} height={"60%"} margin={"auto"} />
          </Flex>
          <Flex
            width={"90px"}
            height={"90px"}
            bg={"#E9ECEF"}
            borderRadius={"5px"}
          >
            <Image src={car} width={"100%"} height={"60%"} margin={"auto"} />
          </Flex>
          <Flex
            width={"90px"}
            height={"90px"}
            bg={"#E9ECEF"}
            borderRadius={"5px"}
          >
            <Image src={car} width={"100%"} height={"60%"} margin={"auto"} />
          </Flex>
          <Flex
            width={"90px"}
            height={"90px"}
            bg={"#E9ECEF"}
            borderRadius={"5px"}
          >
            <Image src={car} width={"100%"} height={"60%"} margin={"auto"} />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        bg="#F8F9FA"
        width={"90%"}
        height={"350px"}
        margin={"0 auto"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        padding={"2rem"}
        borderRadius={"5px"}
      >
        <Flex
          w="60px"
          h="60px"
          rounded="full"
          bg="brand.1"
          align="center"
          justifyContent="center"
        >
          <Text color="white" fontSize="20px" fontWeight="700">
            {avatar}
          </Text>
        </Flex>
        <Text fontSize="20px" fontWeight="700">
          {name}
        </Text>
        <Text width={"295px"} height={"84px"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <Button bg={"black"} color={"white"} width={[""]}>
          Ver todos os anúncios
        </Button>
      </Flex>
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
        <Heading size={"md"} justifyContent={"flex-start"}>
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
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </Flex>
      </Flex>
      <Flex
        bg="#F8F9FA"
        width={"90%"}
        margin={"0 auto"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        padding={"2rem"}
        borderRadius={"5px"}
        gap={"24px"}
        marginBottom={"45px"}
      >
        <Flex alignItems={"center"} gap={"8px"}>
          <Flex
            w="50px"
            h="50px"
            rounded="full"
            bg="brand.1"
            align="center"
            justifyContent="center"
          >
            <Text color="white" fontSize="20px" fontWeight="700">
              {avatar}
            </Text>
          </Flex>
          <Text fontSize="20px" fontWeight="700">
            {name}
          </Text>
        </Flex>
        <Textarea placeholder="Carro muito confortável, foi uma ótima experiência de compra..." />
        <Button bg={"#4529E6"} color={"white"} fontSize={"md"}>
          Comentar
        </Button>
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
    </Flex>
  );
};
