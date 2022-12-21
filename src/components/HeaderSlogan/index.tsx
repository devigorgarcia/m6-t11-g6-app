import { Button, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { VehicleContext } from "../../contexts/VehicleContext";

export const HeaderSlogan = () => {
  const { setCarFilter, carFilter } = useContext(VehicleContext);
  return (
    <Flex
      bg="brand.2"
      w="100%"
      h="600px"
      justifyContent={"center"}
      align="center"
    >
      <Flex
        w="50%"
        minWidth="400px"
        maxWidth="750px"
        flexDirection="column"
        textAlign="center"
        justifyContent={"space-around"}
        p={"1rem"}
        gap="10"
      >
        <Text color="grey.10" textStyle="h1">
          Velocidade e experiência em um lugar feito para você
        </Text>
        <Text color="grey.9" textStyle="h7">
          Um ambiente feito para você explorar o seu melhor
        </Text>
        <Flex
          alignItems={["center"]}
          justifyContent={["center"]}
          width={["100%"]}
          gap={"1rem"}
          flexDirection={["column", "row"]}
          maxWidth="400px"
          margin={["0 auto"]}
        >
          <Button
            onClick={() => setCarFilter(true)}
            w="100%"
            variant={
              carFilter === null
                ? "outlineLight"
                : carFilter === true
                ? "outlineLightClicked"
                : "outlineLight"
            }
          >
            Carros
          </Button>
          <Button
            onClick={() => setCarFilter(false)}
            w="100%"
            variant={
              carFilter || carFilter === null
                ? "outlineLight"
                : "outlineLightClicked"
            }
          >
            Motos
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
