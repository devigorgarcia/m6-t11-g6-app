import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { VehicleCard } from "../../components/VehicleCard";

export function Home() {
  return (
    <>
      <Header />
      <Flex bg="brand.2" w="100%" h="600px" justify="center" align="center">
        <Center
          w="40%"
          minWidth="400px"
          height="43%"
          flexDirection="column"
          justifyContent="space-between"
          textAlign="center"
        >
          <Text color="grey.10" textStyle="h1">
            Velocidade e experiência em um lugar feito para você
          </Text>
          <Text color="grey.9" textStyle="h7">
            Um ambiente feito para você explorar o seu melhor
          </Text>
          <ButtonGroup spacing="5" flexDirection={["column", "row"]}>
            <Button color="grey.10" variant="outline">
              Carros
            </Button>
            <Button color="grey.10" variant="outline">
              Motos
            </Button>
          </ButtonGroup>
        </Center>
      </Flex>
      <VehicleCard/>
    </>
  );
}
