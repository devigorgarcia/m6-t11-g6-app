import {
  Card,
  Image,
  Heading,
  Text,
  Flex,
  Avatar,
  CardFooter,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../../../../contexts/ModalContext";
import { EditVehicleModal } from "../../../../Modals/EditVehicleModal";

interface IVehicleProps {
  data: any;
}

export function VehicleCardAdmin({ data }: IVehicleProps) {
  const { onOpenEdit } = useContext(ModalContext);
  const navigate = useNavigate();

  const { price, km } = data;
  let numberPrice = +price;
  let numberKm = +km;

  const handleNavigate = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Card minW={"350px"} maxW="350px" flex="1" p="1rem">
        <Image src={data.frontImg} alt="Green double couch with wooden legs" />
        <VStack mt="8" spacing="3">
          <Heading size="md" color="grey.1" noOfLines={1}>
            {data.title}
          </Heading>
          <Text noOfLines={2}>{data.description}</Text>
        </VStack>
        <CardFooter justify="space-between" padding="0" marginTop={8}>
          <Flex justify="space-between">
            <Flex gap="1rem" justify="center" align="center">
              <Text
                bg="brand.4"
                color="brand.1"
                borderRadius="6px"
                p={["4px 8px"]}
                fontSize="14px"
                fontWeight="500"
                fontFamily={"Inter"}
              >
                {numberKm.toLocaleString("pt-br")} KM
              </Text>
              <Text
                bg="brand.4"
                color="brand.1"
                borderRadius="6px"
                p={["4px 8px"]}
                fontSize="14px"
                fontWeight="500"
                fontFamily={"Inter"}
              >
                {data.year}
              </Text>
            </Flex>
          </Flex>
          <Text
            fontSize="16px"
            fontWeight="500"
            fontFamily={"Inter"}
            color="grey.1"
          >
            {numberPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </CardFooter>
        <Flex
          gap={8}
          alignSelf="flex-start"
          direction="row"
          align="center"
          mt={8}
        >
          <Button variant="outline1" onClick={onOpenEdit} w={""}>
            Editar
          </Button>
          <Button
            onClick={() => handleNavigate(data.id)}
            variant="outline1"
            w={""}
          >
            Ver como
          </Button>
        </Flex>
      </Card>
      <EditVehicleModal vehicleId={data.id} />
    </>
  );
}
