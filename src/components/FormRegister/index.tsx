import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  Input,
  FormErrorMessage,
  Flex,
  Heading,
  Box,
  useDisclosure,
} from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useContext, useState } from "react";
import ModalRegister from "../ModalRegister";
import { RegisterContext } from "../../contexts/registerContext";

interface IRegisterData {
  name: string;
  email: string;
  cpf: string;
  fone: string;
  birthday: Date;
  descripiton: string;
  is_admin: boolean;
  password: string;
  confirmPassword: string;
  address: {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: number;
    complement: string;
  };
}



export const FormRegister = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { registerForm } = useContext(RegisterContext);
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup
      .string()
      .email("O email está errado")
      .required(),
    cpf: yup.string().required(),
    fone: yup.string().required(),
    birthday: yup.date().required(),
    descripiton: yup.string().required(),
    is_admin: yup.boolean().required().default(isAdmin),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    address: yup.object().shape({
      cep: yup.string().required(),
      state: yup.string().required(),
      city: yup.string().required(),
      street: yup.string().required(),
      number: yup.number().required(),
      complement: yup.string(),
    }),
  });

  const { handleSubmit, register, setValue } = useForm<IRegisterData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IRegisterData) => {

    const currentData = { 
      ...data , is_admin: isAdmin
    }
    const {confirmPassword, ...finalData} = currentData
   
    registerForm(finalData, onOpen);
  };

  return (
    <>
    <Flex
      flexDir={["column"]}
      width={["100vw"]}
      alignItems="center"
      padding={["100px"]}
      bg="grey.8"
    >
      <Flex
        gap="10px"
        justifyContent="center"
        width={["auto", "412px"]}
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
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
          gap={3}
        >
          <Heading fontSize="2xl">Cadastro</Heading>
          <Heading marginTop={"20px"} fontSize="x">
            Informações Pessoais
          </Heading>
        </Flex>

        <FormControl isRequired as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDir={["column"]} gap={["8"]}>
            <Box>
              <FormLabel>Nome</FormLabel>
              <Input
                id="name"
                placeholder="Ex: Samuel Leão"
                type="text"
                {...register("name")}
              />
            </Box>
            <FormErrorMessage>Name is required.</FormErrorMessage>
            <Box>
              <FormLabel>Email</FormLabel>
              <Input
                id="email"
                placeholder="Ex: samuel@kenzie.com.br"
                type="text"
                {...register("email")}
              />
            </Box>
            <Box>
              <FormLabel>CPF</FormLabel>
              <Input
                id="CPF"
                placeholder="000.000.000-00"
                type="number"
                {...register("cpf")}
              />
            </Box>
            <Box>
              <FormLabel>Celular</FormLabel>
              <Input
                id="fone"
                placeholder="(DDD) 90000-0000"
                type="number"
                {...register("fone")}
              />
            </Box>
            <Box>
              <FormLabel>Data de nascimento</FormLabel>
              <Input
                id="birthDate"
                placeholder="00/00/00"
                type="date"
                {...register("birthday")}
              />
            </Box>
            <Box>
              <FormLabel>Descrição</FormLabel>
              <Input
                height={"100px"}
                id="description"
                placeholder="Digitar descrição"
                type="text"
                {...register("descripiton")}
              />
            </Box>
            <Heading marginTop={"20px"} fontSize="x">
              Informações de endereço
            </Heading>
            <Box>
              <FormLabel>CEP</FormLabel>
              <Input
                id="CEP"
                placeholder="00000-000"
                type="text"
                {...register("address.cep")}
              />
            </Box>
            <Box display="flex" gap={"7px"}>
              <Box>
                <FormLabel>Estado</FormLabel>
                <Input
                  id="state"
                  placeholder="Digitar estado"
                  type="text"
                  {...register("address.state")}
                />
              </Box>
              <Box>
                <FormLabel>Cidade</FormLabel>
                <Input
                  id="city"
                  placeholder="Digitar cidade"
                  type="text"
                  {...register("address.city")}
                />
              </Box>
            </Box>
            <Box>
              <FormLabel>Rua</FormLabel>
              <Input
                id="street"
                placeholder="Digitar rua"
                type="text"
                {...register("address.street")}
              />
            </Box>
            <Box display="flex" gap={"7px"}>
              <Box>
                <FormLabel>Número</FormLabel>
                <Input
                  id="number"
                  placeholder="Digitar número"
                  type="number"
                  {...register("address.number")}
                />
              </Box>
              <Box>
                <FormLabel>Complemento</FormLabel>
                <Input
                  id="complement"
                  placeholder="Ex: apart 307"
                  type="text"
                  {...register("address.complement")}
                />
              </Box>
            </Box>
            <Heading marginTop={"20px"} fontSize="x">
              Tipo de conta
            </Heading>
            <Stack
              width={"100%"}
              display="flex"
              direction="row"
              spacing={4}
              align="center"
            >
              <Button
                width={"100%"}
                colorScheme="teal"
                variant={isAdmin ? "outline1" : "brand1"}
                onClick={() => setIsAdmin(false)}
              >
                Comprador
              </Button>

              <Button
                width={"100%"}
                colorScheme="teal"
                variant={isAdmin ? "brand1" : "outline1"}
                onClick={() => setIsAdmin(true)}
              >
                Anunciante
              </Button>
            </Stack>
            <Box>
              <FormLabel>Senha</FormLabel>
              <Input
                id="password"
                placeholder="Digitar senha"
                type="password"
                {...register("password")}
              />
            </Box>
            <Box>
              <FormLabel>Confirmar senha</FormLabel>
              <Input
                id="confirmPassword"
                placeholder="Digitar senha"
                type="password"
                {...register("confirmPassword")}
              />
            </Box>
            <Button
              type="submit"
              width={"100%"}
              colorScheme="teal"
              variant="brand1"
    
            >
              Finalizar cadastro
            </Button>
          </Flex>
        </FormControl>
      </Flex>

    </Flex>

    <ModalRegister isOpen={isOpen} onClose={onClose}/>
    </>
  );
};
