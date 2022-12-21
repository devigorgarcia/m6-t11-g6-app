import { Card, Image, Stack, Heading, Text, Flex, Avatar, CardFooter} from "@chakra-ui/react"

export function VehicleCard() {
    return (
        <Card maxW="sm">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" color="grey.1" noOfLines={1}>
            Product title stays here - max 1 line Product title stays here -
            maximum 1 line
          </Heading>
          <Text fontStyle="h7" noOfLines={2}>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Flex direction="row" align="center">
            <Avatar size="sm" name="Samuel Leao" marginRight="10px" />
            <Text>Samuel Leão</Text>
          </Flex>
        </Stack>
        <CardFooter justify="space-between" padding="0" marginTop={3}>
          <Flex justify="space-between" w="35%">
            <Flex
              bg="brand.4"
              borderRadius="6px"
              w="50px"
              h="30px"
              justify="center"
              align="center"
            >
              <Text textStyle="h7" color="brand.1">
                0 KM
              </Text>
            </Flex>
            <Flex
              bg="brand.4"
              borderRadius="6px"
              w="50px"
              h="30px"
              justify="center"
              align="center"
            >
              <Text textStyle="h7" color="brand.1">
                2019
              </Text>
            </Flex>
          </Flex>
          <Text color="grey.1" textStyle="h6">
            R$ 00.000,00
          </Text>
        </CardFooter>
      </Card>
    )
}