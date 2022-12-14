import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  Input,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { services } from "../../api";
import { toast } from "react-toastify";

const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("O email está errado")
      .required("Campo obrigatório"),

    password: yup.string().required("Campo obrigatório"),
  });

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
  });

  const action = (email, password) => {
    console.log(email, password);
    services()
      .login({ email, password })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      })
      .catch((err) => {
        toast.error("Login ou senha inválidos");
      });
  };

  return (
    <Flex
      flexDir={["column"]}
      height={"90vh"}
      width={["100vw"]}
      alignItems="center"
      padding={["100px"]}
      bg="grey.8"
    >
      <Flex
        gap="10px"
        justifyContent="center"
        height={["542px"]}
        width={["412px"]}
        bg={"grey.11"}
        flexDir={["column"]}
        alignItems="center"
        padding={"48px"}
        borderRadius="5px"
      >
        <Flex
          width="100%"
          paddingBottom={"20px"}
          paddingTop={"20px"}
          justifyContent="start"
          alignItems="start"
          spacing={3}
        >
          <Heading fontSize="2xl">Login</Heading>
        </Flex>
   
          <FormControl as={"form"} onSubmit={handleSubmit(action)}>
            <FormLabel>Usuário</FormLabel>
            <Input id="email" placeholder="Digitar Usuário" type="email"       
            {...register('email')}/>
            <FormLabel>Senha</FormLabel>
            <Input
              id="password"
              placeholder="Digitar Senha"
              type="password"
              {...register('password')}
            />

            <Stack width={"100%"} direction="column" spacing={4} align="center">
              <Button
                width={"100%"}
                alignItems="center"
                justifyContent="end"
                colorScheme="teal"
                variant="grey.2"
              >
                Esqueci minha senha
              </Button>
              <Button
                type="submit"
                width={"100%"}
                colorScheme="teal"
                variant="brand1"
              >
                Entrar
              </Button>
              <Button colorScheme="teal" variant="grey2">
                Ainda não possui conta?
              </Button>
              <Button width={"100%"} colorScheme="teal" variant="outline1">
                Cadastrar
              </Button>
            </Stack>
          </FormControl>

      </Flex>
    </Flex>
  );
};

export default Login;
